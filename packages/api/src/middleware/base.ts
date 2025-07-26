/**
 * Base middleware class and interfaces
 * Provides a foundation for creating structured middleware implementations
 */

import type { TRPCError } from '@trpc/server';
import type {
  ComposedMiddleware,
  MiddlewareConfig,
  MiddlewareContext,
  MiddlewareFunction,
  MiddlewareMetadata,
} from './types';
import { createMiddleware, defaultErrorHandler } from './utils';

/**
 * Abstract base class for creating structured middleware
 * Provides common functionality and enforces consistent patterns
 */
export abstract class BaseMiddleware<
  TInputContext extends MiddlewareContext = MiddlewareContext,
  TOutputContext extends MiddlewareContext = TInputContext,
> {
  protected readonly metadata: MiddlewareMetadata;
  protected readonly config: MiddlewareConfig;

  constructor(metadata: MiddlewareMetadata, config: MiddlewareConfig = {}) {
    this.metadata = metadata;
    this.config = {
      enabled: true,
      errorHandler: defaultErrorHandler,
      ...config,
    };
  }

  /**
   * Abstract method that must be implemented by concrete middleware classes
   * Contains the core middleware logic
   */
  protected abstract execute(opts: {
    ctx: TInputContext;
    next: () => Promise<{ ctx: TOutputContext }>;
    path?: string;
    type?: 'query' | 'mutation' | 'subscription';
  }): Promise<{ ctx: TOutputContext }>;

  /**
   * Optional hook called before middleware execution
   * Can be overridden for setup logic
   */
  protected async beforeExecute(
    _ctx: TInputContext,
    _path?: string,
    _type?: 'query' | 'mutation' | 'subscription'
  ): Promise<void> {
    // Default implementation does nothing
  }

  /**
   * Optional hook called after middleware execution
   * Can be overridden for cleanup logic
   */
  protected async afterExecute(
    _ctx: TOutputContext,
    _path?: string,
    _type?: 'query' | 'mutation' | 'subscription'
  ): Promise<void> {
    // Default implementation does nothing
  }

  /**
   * Optional hook called when an error occurs
   * Can be overridden for custom error handling
   */
  protected async onError(
    error: TRPCError | Error,
    ctx: TInputContext,
    path?: string,
    _type?: 'query' | 'mutation' | 'subscription'
  ): Promise<TRPCError | Error> {
    return this.config.errorHandler!(error, { ctx, path, type: _type });
  }

  /**
   * Determines if the middleware should execute for the given context
   * Can be overridden for custom execution logic
   */
  protected shouldExecute(
    _ctx: TInputContext,
    path?: string,
    _type?: 'query' | 'mutation' | 'subscription'
  ): boolean {
    if (!this.config.enabled) {
      return false;
    }

    if (this.config.skipPaths && path && this.config.skipPaths.includes(path)) {
      return false;
    }

    if (
      this.config.onlyPaths &&
      path &&
      !this.config.onlyPaths.includes(path)
    ) {
      return false;
    }

    return true;
  }

  /**
   * Creates the middleware function with all hooks and error handling
   * This is the main entry point for the middleware
   */
  private createMiddlewareFunction(): MiddlewareFunction {
    return async opts => {
      const { ctx, next, path, type } = opts;

      if (!this.shouldExecute(ctx as TInputContext, path, type)) {
        return next();
      }

      try {
        await this.beforeExecute(ctx as TInputContext, path, type);

        const result = await this.execute({
          ctx: ctx as TInputContext,
          next: next as () => Promise<{ ctx: TOutputContext }>,
          path,
          type,
        });

        await this.afterExecute(result.ctx, path, type);

        return result;
      } catch (error) {
        const handledError = await this.onError(
          error as any,
          ctx as TInputContext,
          path,
          type
        );
        throw handledError;
      }
    };
  }

  /**
   * Builds the composed middleware with configuration and metadata
   * Returns a ComposedMiddleware that can be used in the pipeline
   */
  public build(): ComposedMiddleware {
    return {
      middleware: this.createMiddlewareFunction(),
      config: this.config,
      metadata: this.metadata,
    };
  }

  /**
   * Updates the middleware configuration
   * Returns a new instance with updated configuration
   */
  public configure(newConfig: Partial<MiddlewareConfig>): this {
    const Constructor = this.constructor as new (
      metadata: MiddlewareMetadata,
      config: MiddlewareConfig
    ) => this;

    return new Constructor(this.metadata, {
      ...this.config,
      ...newConfig,
    });
  }

  /**
   * Gets the middleware metadata
   */
  public getMetadata(): MiddlewareMetadata {
    return { ...this.metadata };
  }

  /**
   * Gets the middleware configuration
   */
  public getConfig(): MiddlewareConfig {
    return { ...this.config };
  }

  /**
   * Checks if the middleware is enabled
   */
  public isEnabled(): boolean {
    return this.config.enabled ?? true;
  }

  /**
   * Enables the middleware
   */
  public enable(): this {
    return this.configure({ enabled: true });
  }

  /**
   * Disables the middleware
   */
  public disable(): this {
    return this.configure({ enabled: false });
  }
}

/**
 * Simple middleware class for creating middleware from functions
 * Useful for creating quick middleware without extending BaseMiddleware
 */
export class SimpleMiddleware<
  TInputContext extends MiddlewareContext = MiddlewareContext,
  TOutputContext extends MiddlewareContext = TInputContext,
> extends BaseMiddleware<TInputContext, TOutputContext> {
  private readonly middlewareFunction: MiddlewareFunction<
    TInputContext,
    TOutputContext
  >;

  constructor(
    middlewareFunction: MiddlewareFunction<TInputContext, TOutputContext>,
    metadata: MiddlewareMetadata,
    config: MiddlewareConfig = {}
  ) {
    super(metadata, config);
    this.middlewareFunction = middlewareFunction;
  }

  protected async execute(opts: {
    ctx: TInputContext;
    next: () => Promise<{ ctx: TOutputContext }>;
    path?: string;
    type?: 'query' | 'mutation' | 'subscription';
  }): Promise<{ ctx: TOutputContext }> {
    return this.middlewareFunction(opts);
  }
}

/**
 * Factory function for creating simple middleware
 * Provides a convenient way to create middleware without classes
 */
export function createSimpleMiddleware<
  TInputContext extends MiddlewareContext = MiddlewareContext,
  TOutputContext extends MiddlewareContext = TInputContext,
>(
  middlewareFunction: MiddlewareFunction<TInputContext, TOutputContext>,
  metadata: MiddlewareMetadata,
  config: MiddlewareConfig = {}
): ComposedMiddleware {
  const middleware = new SimpleMiddleware(middlewareFunction, metadata, config);
  return middleware.build();
}

/**
 * Higher-order function for creating middleware builders
 * Provides a consistent pattern for creating configurable middleware
 */
export function createMiddlewareBuilder<TOptions = {}>(
  name: string,
  description: string,
  middlewareFactory: (options?: TOptions) => MiddlewareFunction,
  defaultOptions?: TOptions,
  defaultConfig?: MiddlewareConfig
): (options?: TOptions) => ComposedMiddleware {
  return (options?: TOptions) => {
    const finalOptions = { ...defaultOptions, ...options } as TOptions;
    const middlewareFunction = middlewareFactory(finalOptions);

    return createMiddleware(
      middlewareFunction,
      {
        name,
        description,
        version: '1.0.0',
      },
      defaultConfig
    );
  };
}
