/**
 * tRPC Client Configuration for Next.js App Router
 */

import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@u3/api';

/**
 * Create the tRPC React client
 * Using explicit type assertion to avoid naming conflicts
 */
export const trpc = createTRPCReact<AppRouter>() as any;

/**
 * Get authentication token from localStorage
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return localStorage.getItem('auth-token');
  } catch (error) {
    console.warn('Failed to retrieve auth token:', error);
    return null;
  }
}

/**
 * tRPC client configuration
 */
export const trpcClientConfig = {
  links: [
    loggerLink({
      enabled: opts =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: '/api',
      headers() {
        const token = getAuthToken();

        return {
          ...(token && { authorization: `Bearer ${token}` }),
          'content-type': 'application/json',
        };
      },
    }),
  ],
};

/**
 * Error handler for tRPC operations
 */
export function handleTRPCError(error: any): string {
  console.error('tRPC Error:', error);
  return error?.message || 'An error occurred';
}

/**
 * Authentication utilities
 */
export const auth = {
  setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth-token', token);
    }
  },

  getToken(): string | null {
    return getAuthToken();
  },

  removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth-token');
    }
  },

  isAuthenticated(): boolean {
    const token = getAuthToken();
    return token !== null && token.length > 0;
  },
};

export type { AppRouter } from '@u3/api';
