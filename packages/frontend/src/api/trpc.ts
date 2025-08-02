/**
 * Cross-platform tRPC Client Configuration
 * Works with both web and React Native environments
 */

import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@u3/types';

// Safe platform detection without React Native dependencies
const isReactNative =
  typeof window === 'undefined' &&
  typeof navigator !== 'undefined' &&
  navigator.product === 'ReactNative';

/**
 * Create the tRPC React client with proper typing
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * Global auth token getter for use in tRPC headers
 * This will be set by the auth provider when available
 */
let getAuthTokenFn: (() => Promise<string | null>) | null = null;

/**
 * Set the auth token getter function
 * This should be called by the auth provider during initialization
 */
export function setAuthTokenGetter(getter: () => Promise<string | null>) {
  getAuthTokenFn = getter;
}

/**
 * Get authentication token from the registered auth provider
 */
async function getAuthToken(): Promise<string | null> {
  if (getAuthTokenFn) {
    try {
      return await getAuthTokenFn();
    } catch (error) {
      console.error('Failed to get auth token:', error);
    }
  }

  // No token available
  return null;
}

/**
 * tRPC client configuration factory
 * Creates platform-specific configuration for web and mobile
 */
export function createTRPCClientConfig(baseUrl?: string) {
  const defaultBaseUrl = !isReactNative ? '/api' : 'http://localhost:3000/api';
  const apiUrl = baseUrl || defaultBaseUrl;

  return {
    links: [
      loggerLink({
        enabled: opts =>
          process.env.NODE_ENV === 'development' ||
          (opts.direction === 'down' && opts.result instanceof Error),
      }),
      httpBatchLink({
        url: apiUrl,
        async headers() {
          const token = await getAuthToken();

          return {
            ...(token && { authorization: `Bearer ${token}` }),
            'content-type': 'application/json',
          };
        },
      }),
    ],
  };
}

/**
 * Default tRPC client configuration
 */
export const trpcClientConfig = createTRPCClientConfig();

/**
 * Error handler for tRPC operations
 */
export function handleTRPCError(error: unknown): string {
  console.error('tRPC Error:', error);

  // Handle different error types
  if (
    error &&
    typeof error === 'object' &&
    'data' in error &&
    error.data &&
    typeof error.data === 'object' &&
    'zodError' in error.data
  ) {
    // Zod validation errors
    // biome-ignore lint/suspicious/noExplicitAny: Zod error structure varies
    const zodError = error.data.zodError as any;
    const fieldErrors = zodError.fieldErrors;
    const firstError = Object.values(fieldErrors)[0];
    return Array.isArray(firstError) ? firstError[0] : 'Validation error';
  }

  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message;
  }

  return 'An unexpected error occurred';
}

/**
 * Authentication utilities for proper Clerk integration
 * Uses the registered auth provider for token management
 */
export const auth = {
  async getToken(): Promise<string | null> {
    return await getAuthToken();
  },

  async isAuthenticated(): Promise<boolean> {
    // Check if we have a valid token
    const token = await getAuthToken();
    return token !== null && token.length > 0;
  },
};

/**
 * Test procedure for API connectivity
 * Useful for debugging and health checks
 */
export function usePing() {
  // biome-ignore lint/suspicious/noExplicitAny: tRPC client typing limitation
  return (trpc as any).health.ping.useQuery();
}
