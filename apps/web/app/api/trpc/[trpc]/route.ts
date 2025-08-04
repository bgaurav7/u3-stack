/**
 * tRPC API Route Handler for Next.js App Router
 *
 * This file creates the Next.js App Router API route that handles all tRPC requests.
 * It imports the appRouter from the @u3/backend package and configures the
 * fetchRequestHandler with proper context creation and error handling.
 *
 * Route: /api/trpc/[trpc]
 * Handles: All tRPC procedure calls (queries and mutations)
 */

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter, createContext } from '@u3/backend';

/**
 * Handler function for all HTTP methods
 * App Router requires explicit exports for each HTTP method
 */
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createContext,
    onError: ({ error, path, input, type }) => {
      // Log error details for debugging
      console.error(`❌ tRPC Error on ${type} ${path}:`, {
        error: {
          message: error.message,
          code: error.code,
          cause: error.cause,
        },
        input,
        userAgent: req.headers.get('user-agent'),
        timestamp: new Date().toISOString(),
      });

      // Log stack trace in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Stack trace:', error.stack);
      }
    },
    responseMeta: ({ paths, errors, type }) => {
      // Set cache headers for queries (not mutations)
      const allPublic = paths?.every(path => path.includes('health'));
      const allOk = errors.length === 0;
      const isQuery = type === 'query';

      if (allPublic && allOk && isQuery) {
        // Cache health checks for 1 minute
        const ONE_MINUTE = 60;
        return {
          headers: {
            'Cache-Control': `s-maxage=${ONE_MINUTE}, stale-while-revalidate`,
          },
        };
      }

      return {};
    },
  });

/**
 * Export handlers for all HTTP methods that tRPC uses
 * App Router requires explicit exports for each method
 */
export { handler as GET, handler as POST };
