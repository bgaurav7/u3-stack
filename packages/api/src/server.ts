import type { ProcedureRouterRecord } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { authRouter } from './routers/auth';

// Router imports will be added here when routers are implemented
import { healthRouter } from './routers/health';
import { todoRouter } from './routers/todo';
import { userRouter } from './routers/user';
// Import tRPC utilities from separate file to avoid circular dependencies
import { type Context, router } from './trpc';

// Re-export tRPC utilities for backward compatibility
export {
  type Context,
  loggedPublicProcedure,
  middleware,
  protectedProcedure,
  publicProcedure,
  router,
  type TRPCMiddleware,
  type TRPCProcedure,
  type TRPCRouter,
} from './trpc';

/**
 * Create app router factory function for composing feature routers
 * Allows dynamic composition of routers from different feature packages
 */
export function createAppRouter(routers: ProcedureRouterRecord = {}) {
  return router(routers);
}

/**
 * App router with feature routers
 * Combines all feature routers into a single app router for the API
 */
export const appRouter = createAppRouter({
  // Feature routers:
  health: healthRouter,
  todo: todoRouter,
  auth: authRouter,
  user: userRouter,
});

/**
 * Context creator for Next.js integration
 * Creates the context object that will be passed to all tRPC procedures
 */
export function createContext({ req, res }: CreateNextContextOptions): Context {
  return {
    req,
    res,
  };
}
