import { verifyToken } from '@clerk/backend';
import type { ProcedureRouterRecord } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import type { Context } from '@u3/types';
// Router imports will be added here when routers are implemented
import { healthRouter } from './routers/health';
import { todoRouter } from './routers/todo';
// Import tRPC utilities from separate file to avoid circular dependencies
import { router } from './trpc';

// Re-export tRPC utilities for backward compatibility
export {
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
export function createAppRouter<T extends ProcedureRouterRecord>(routers: T) {
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
});

/**
 * App Router Type
 * Available for direct import by frontend packages for tRPC client setup
 * Not exported from main package index to keep it contained
 */
export type AppRouter = typeof appRouter;

/**
 * Context creator for Next.js App Router with Clerk authentication
 * Extracts user information from Clerk JWT tokens and creates tRPC context
 */
export async function createContext(
  opts: FetchCreateContextFnOptions
): Promise<Context> {
  const request = opts.req;

  // Extract auth token from headers
  const authHeader = request.headers.get('authorization');
  let user: { id: string; email: string; name: string } | undefined;

  if (authHeader?.startsWith('Bearer ')) {
    try {
      const token = authHeader.substring(7);
      // Verify the session token with Clerk
      const verifiedToken = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY,
      });

      if (verifiedToken.sub) {
        // Extract user details from JWT claims to avoid Clerk API call
        user = {
          id: verifiedToken.sub,
          email:
            (verifiedToken.email as string) ||
            (verifiedToken.email_address as string) ||
            '',
          name: (verifiedToken.name as string) || 'Unknown User',
        };
      }
    } catch (error) {
      console.error('Clerk token verification failed:', error);
      // User remains undefined, will be handled by auth middleware
    }
  }

  return {
    req: {
      headers: Object.fromEntries(request.headers.entries()),
      url: request.url,
      method: request.method,
    } as any,
    res: {
      setHeader: (_name: string, _value: string) => {
        // Headers managed by App Router
      },
    } as any,
    user, // Add user to context if authenticated
  };
}
