/**
 * Cross-platform tRPC Client Configuration
 * For mobile apps, pass the full server URL to createTRPCClientConfig()
 */

import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@u3/types';

export const trpc = createTRPCReact<AppRouter>();

/**
 * Auth Token Manager - Singleton pattern for robust token management
 */
class AuthTokenManager {
  private static instance: AuthTokenManager;
  private tokenGetter: (() => Promise<string | null>) | null = null;

  private constructor() {}

  public static getInstance(): AuthTokenManager {
    if (!AuthTokenManager.instance) {
      AuthTokenManager.instance = new AuthTokenManager();
    }
    return AuthTokenManager.instance;
  }

  public setAuthTokenGetter(getter: () => Promise<string | null>): void {
    this.tokenGetter = getter;
  }

  public async getAuthToken(): Promise<string | null> {
    if (this.tokenGetter) {
      try {
        return await this.tokenGetter();
      } catch (_error) {
        console.error('Failed to get auth token');
        return null;
      }
    }
    return null;
  }

  public clearAuthTokenGetter(): void {
    this.tokenGetter = null;
  }
}

const authTokenManager = AuthTokenManager.getInstance();

export function setAuthTokenGetter(getter: () => Promise<string | null>) {
  authTokenManager.setAuthTokenGetter(getter);
}

export function clearAuthTokenGetter(): void {
  authTokenManager.clearAuthTokenGetter();
}

/**
 * tRPC client configuration factory
 */
export function createTRPCClientConfig(baseUrl?: string) {
  const apiUrl = baseUrl || '/api';

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
          const token = await authTokenManager.getAuthToken();
          return {
            ...(token && { authorization: `Bearer ${token}` }),
            'content-type': 'application/json',
          };
        },
      }),
    ],
  };
}

export const trpcClientConfig = createTRPCClientConfig();

export function handleTRPCError(error: unknown): string {
  console.error('tRPC Error:', error);

  if (
    error &&
    typeof error === 'object' &&
    'data' in error &&
    error.data &&
    typeof error.data === 'object' &&
    'zodError' in error.data
  ) {
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
 * Authentication utilities for Clerk integration
 */
export const auth = {
  async getToken(): Promise<string | null> {
    return await authTokenManager.getAuthToken();
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await authTokenManager.getAuthToken();
    return token !== null && token.length > 0;
  },
};

export function usePing() {
  // biome-ignore lint/suspicious/noExplicitAny: tRPC client typing limitation
  return (trpc as any).health.ping.useQuery();
}
