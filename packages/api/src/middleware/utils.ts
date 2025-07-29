/**
 * Middleware composition utilities
 * Provides helper functions for creating, composing, and managing middleware
 */

import { TRPCError } from '@trpc/server';
import type {
  ComposedMiddleware,
  MiddlewareConfig,
  MiddlewareContext,
  MiddlewareErrorHandler,
  MiddlewareFunction,
  MiddlewareMetadata,
  MiddlewarePipeline,
} from '@u3/types';

/**
 * Default error handler for middleware
 * Provides consistent error handling across all middleware
 */
export const defaultErrorHandler: MiddlewareErrorHandler = (error, context) => {
  console.error(`[Middleware Error] ${context.path || 'unknown'}:`, error);

  if (error instanceof TRPCError) {
    return error;
  }

  return new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Internal server error',
    cause: error,
  });
};

/**
 * Creates a configured middleware with metadata and configuration
 * Wraps a middleware function with error handling and configuration
 */
export function createMiddleware<
  TInputContext extends MiddlewareContext = MiddlewareContext,
  TOutputContext extends MiddlewareContext = TInputContext,
>(
  middleware: MiddlewareFunction<TInputContext, TOutputContext>,
  metadata: MiddlewareMetadata,
  config: MiddlewareConfig = {}
): ComposedMiddleware {
  const finalConfig: MiddlewareConfig = {
    enabled: true,
    errorHandler: defaultErrorHandler,
    ...config,
  };

  const wrappedMiddleware: MiddlewareFunction = async opts => {
    const { ctx, next, path, type } = opts;

    // Check if middleware is enabled
    if (!finalConfig.enabled) {
      return next();
    }

    // Check if path should be skipped
    if (finalConfig.skipPaths && path && finalConfig.skipPaths.includes(path)) {
      return next();
    }

    // Check if middleware should only run on specific paths
    if (
      finalConfig.onlyPaths &&
      path &&
      !finalConfig.onlyPaths.includes(path)
    ) {
      return next();
    }

    try {
      return await middleware(opts as Parameters<typeof middleware>[0]);
    } catch (error) {
      const handledError = finalConfig.errorHandler?.(error as Error, {
        path,
        type,
        ctx,
      });
      throw handledError;
    }
  };

  return {
    middleware: wrappedMiddleware,
    config: finalConfig,
    metadata,
  };
}

/**
 * Composes multiple middleware functions into a single middleware
 * Executes middleware in the order they are provided
 */
export function composeMiddleware(
  ...middlewares: ComposedMiddleware[]
): MiddlewareFunction {
  return async opts => {
    let currentContext = opts.ctx;
    let index = 0;

    const executeNext = async (): Promise<{ ctx: MiddlewareContext }> => {
      if (index >= middlewares.length) {
        return opts.next();
      }

      const currentMiddleware = middlewares[index++];

      if (!currentMiddleware) {
        return opts.next();
      }

      return currentMiddleware.middleware({
        ...opts,
        ctx: currentContext,
        next: async () => {
          const result = await executeNext();
          currentContext = result.ctx;
          return result;
        },
      });
    };

    return executeNext();
  };
}

/**
 * Creates a middleware pipeline for managing multiple middleware
 * Provides methods to add, remove, and execute middleware in order
 */
export function createMiddlewarePipeline(): MiddlewarePipeline {
  const middlewares: ComposedMiddleware[] = [];

  return {
    add(middleware: ComposedMiddleware): void {
      // Remove existing middleware with the same name
      const existingIndex = middlewares.findIndex(
        m => m.metadata.name === middleware.metadata.name
      );

      if (existingIndex !== -1) {
        middlewares.splice(existingIndex, 1);
      }

      // Insert middleware in the correct position based on order
      const order = middleware.metadata.order ?? 100;
      const insertIndex = middlewares.findIndex(
        m => (m.metadata.order ?? 100) > order
      );

      if (insertIndex === -1) {
        middlewares.push(middleware);
      } else {
        middlewares.splice(insertIndex, 0, middleware);
      }
    },

    remove(name: string): boolean {
      const index = middlewares.findIndex(m => m.metadata.name === name);
      if (index !== -1) {
        middlewares.splice(index, 1);
        return true;
      }
      return false;
    },

    async execute<TContext extends MiddlewareContext>(
      ctx: TContext,
      path?: string,
      type?: 'query' | 'mutation' | 'subscription'
    ): Promise<TContext> {
      const enabledMiddlewares = middlewares.filter(m => m.config.enabled);

      if (enabledMiddlewares.length === 0) {
        return ctx;
      }

      const composedMiddleware = composeMiddleware(...enabledMiddlewares);

      const result = await composedMiddleware({
        ctx,
        path,
        type,
        next: async () => ({ ctx }),
      });

      return result.ctx as TContext;
    },

    getMiddleware(name: string): ComposedMiddleware | undefined {
      return middlewares.find(m => m.metadata.name === name);
    },

    list(): ComposedMiddleware[] {
      return [...middlewares];
    },
  };
}

/**
 * Utility function to create a conditional middleware
 * Only executes the middleware if the condition is met
 */
export function conditionalMiddleware<
  TInputContext extends MiddlewareContext = MiddlewareContext,
  TOutputContext extends MiddlewareContext = TInputContext,
>(
  condition: (ctx: TInputContext, path?: string, type?: string) => boolean,
  middleware: MiddlewareFunction<TInputContext, TOutputContext>
): MiddlewareFunction<TInputContext, TOutputContext> {
  return async opts => {
    if (condition(opts.ctx, opts.path, opts.type)) {
      return middleware(opts);
    }
    return opts.next();
  };
}

/**
 * Utility function to create a rate limiting middleware
 * Provides basic rate limiting functionality
 */
export function createRateLimitMiddleware(
  maxRequests: number,
  windowMs: number,
  keyGenerator: (ctx: MiddlewareContext) => string = ctx =>
    ctx.req?.socket.remoteAddress || 'unknown'
): ComposedMiddleware {
  const requests = new Map<string, { count: number; resetTime: number }>();

  const middleware: MiddlewareFunction = async ({ ctx, next }) => {
    const key = keyGenerator(ctx);
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean up old entries
    for (const [k, v] of requests.entries()) {
      if (v.resetTime < windowStart) {
        requests.delete(k);
      }
    }

    const current = requests.get(key) || {
      count: 0,
      resetTime: now + windowMs,
    };

    if (current.count >= maxRequests && current.resetTime > now) {
      throw new TRPCError({
        code: 'TOO_MANY_REQUESTS',
        message: 'Rate limit exceeded',
      });
    }

    current.count++;
    requests.set(key, current);

    return next();
  };

  return createMiddleware(
    middleware,
    {
      name: 'rateLimit',
      description: `Rate limiting middleware (${maxRequests} requests per ${windowMs}ms)`,
      order: 10,
    },
    { enabled: true }
  );
}

/**
 * Utility function to create a timing middleware
 * Adds request timing information to the context
 */
export function createTimingMiddleware(): ComposedMiddleware {
  const middleware: MiddlewareFunction = async ({ next, path, type }) => {
    const startTime = Date.now();

    const result = await next();

    const duration = Date.now() - startTime;

    // Log timing information
    console.log(`[Timing] ${type} ${path} - ${duration}ms`);

    return {
      ctx: {
        ...result.ctx,
        timing: {
          startTime,
          duration,
        },
      },
    };
  };

  return createMiddleware(
    middleware,
    {
      name: 'timing',
      description: 'Request timing middleware',
      order: 5,
    },
    { enabled: true }
  );
}

/**
 * Utility function to validate middleware dependencies
 * Ensures required middleware are present before execution
 */
export function validateMiddlewareDependencies(
  pipeline: MiddlewarePipeline
): void {
  const middlewares = pipeline.list();
  const middlewareNames = new Set(middlewares.map(m => m.metadata.name));

  for (const middleware of middlewares) {
    const dependencies = middleware.metadata.dependencies || [];

    for (const dependency of dependencies) {
      if (!middlewareNames.has(dependency)) {
        throw new Error(
          `Middleware "${middleware.metadata.name}" depends on "${dependency}" which is not registered`
        );
      }
    }
  }
}

/**
 * Utility function to create a debug middleware
 * Logs detailed information about requests for debugging
 */
export function createDebugMiddleware(
  enabled: boolean = false
): ComposedMiddleware {
  const middleware: MiddlewareFunction = async ({ ctx, next, path, type }) => {
    if (enabled) {
      console.log(`[Debug] ${type} ${path}`, {
        headers: ctx.req?.headers,
        user: ctx.user?.id,
        timestamp: new Date().toISOString(),
      });
    }

    const result = await next();

    if (enabled) {
      console.log(`[Debug] ${type} ${path} completed`, {
        user: result.ctx.user?.id,
        timestamp: new Date().toISOString(),
      });
    }

    return result;
  };

  return createMiddleware(
    middleware,
    {
      name: 'debug',
      description: 'Debug logging middleware',
      order: 1,
    },
    { enabled }
  );
}
