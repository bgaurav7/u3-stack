import { initTRPC } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

// Initialize tRPC
const t = initTRPC.context<Context>().create({
  errorFormatter({ shape }) {
    return shape;
  },
});

// Create context type for tRPC procedures
export interface Context {
  req?: CreateNextContextOptions['req'];
  res?: CreateNextContextOptions['res'];
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

// Export reusable router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;

// Protected procedure will be configured with auth middleware later
export const protectedProcedure = publicProcedure;

// Placeholder app router - will be populated with feature routers
export const appRouter = router({
  // Feature routers will be added here
});

export type AppRouter = typeof appRouter;
