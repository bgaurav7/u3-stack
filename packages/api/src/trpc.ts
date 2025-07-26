import { initTRPC, TRPCError } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { z } from 'zod';

/**
 * Context interface for tRPC procedures
 * Contains request/response objects and optional authenticated user
 */
export interface Context {
  req?: CreateNextContextOptions['req'];
  res?: CreateNextContextOptions['res'];
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

/**
 * Initialize tRPC with context and error formatting
 * Includes Zod error formatting for better validation error messages
 */
const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof z.ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Export reusable tRPC utilities for building routers and procedures
 * These are the core building blocks for feature routers
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;

/**
 * Basic authentication middleware (placeholder implementation)
 * This will be moved to packages/api/src/middleware/auth.ts in a later task
 * Currently provides mock authentication for development
 */
const authMiddleware = t.middleware(async ({ next, ctx }) => {
  // Mock authentication - will be replaced with real auth logic in middleware package
  const authHeader = ctx.req?.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Authentication required',
    });
  }

  const token = authHeader.substring(7);

  // Mock user validation - will be replaced with real token validation
  if (token !== 'valid-token') {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Invalid token',
    });
  }

  // Mock user object - will be replaced with real user lookup
  const user = {
    id: 'user-1',
    email: 'user@example.com',
    name: 'Test User',
  };

  return next({
    ctx: {
      ...ctx,
      user,
    },
  });
});

/**
 * Logging middleware for request tracking
 * This will be moved to packages/api/src/middleware/logging.ts in a later task
 * Provides request timing and path logging for debugging
 */
const loggingMiddleware = t.middleware(async ({ path, type, next }) => {
  const start = Date.now();

  console.log(`[tRPC] ${type} ${path} - Start`);

  const result = await next();

  const duration = Date.now() - start;
  console.log(`[tRPC] ${type} ${path} - ${duration}ms`);

  return result;
});

/**
 * Protected procedure with authentication middleware
 * Requires valid authentication token and injects user context
 */
export const protectedProcedure = publicProcedure
  .use(loggingMiddleware)
  .use(authMiddleware);

/**
 * Public procedure with logging middleware
 * Available without authentication but includes request logging
 */
export const loggedPublicProcedure = publicProcedure.use(loggingMiddleware);

/**
 * Export types for external use by feature packages and frontend
 * These types enable proper TypeScript integration across the stack
 */
export type TRPCRouter = typeof router;
export type TRPCProcedure = typeof publicProcedure;
export type TRPCMiddleware = typeof middleware;
