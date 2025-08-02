import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '@u3/types';
import { z } from 'zod';

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
 * Clerk-based authentication middleware
 * Verifies Clerk JWT tokens and ensures user context is available
 */
const authMiddleware = t.middleware(async ({ next, ctx }) => {
  // Check if user is already in context (from createContext)
  if (ctx.user) {
    return next({
      ctx: {
        ...ctx,
        user: ctx.user,
      },
    });
  }

  // If no user in context, authentication is required but missing
  throw new TRPCError({
    code: 'UNAUTHORIZED',
    message: 'Valid authentication token required',
  });
});

/**
 * Logging middleware for request tracking
 * Provides request timing and path logging for debugging and monitoring
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
