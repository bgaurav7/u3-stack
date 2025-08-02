/**
 * Cross-platform tRPC Client Configuration
 * Works with both web and React Native environments
 */

import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@u3/types';
import { getStorage, STORAGE_KEYS } from './storage';

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
 * Get authentication token from platform-specific storage
 */
async function getAuthToken(): Promise<string | null> {
  const storage = getStorage();
  return await storage.getItem(STORAGE_KEYS.AUTH_TOKEN);
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
 * Cross-platform authentication utilities
 */
export const auth = {
  async setToken(token: string): Promise<void> {
    const storage = getStorage();
    await storage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  async getToken(): Promise<string | null> {
    return await getAuthToken();
  },

  async removeToken(): Promise<void> {
    const storage = getStorage();
    await storage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async isAuthenticated(): Promise<boolean> {
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
