/**
 * Cross-platform tRPC Client Configuration
 * Works with both web and React Native environments
 */

import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@u3/api';
import { Platform } from 'react-native';

/**
 * Create the tRPC React client with proper typing
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * Platform-specific storage utilities
 */
const storage = {
  getItem: async (key: string): Promise<string | null> => {
    if (Platform.OS === 'web') {
      // Web environment
      if (typeof window === 'undefined') return null;
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn('Failed to retrieve from localStorage:', error);
        return null;
      }
    } else {
      // React Native environment
      try {
        const AsyncStorage =
          require('@react-native-async-storage/async-storage').default;
        return await AsyncStorage.getItem(key);
      } catch (error) {
        console.warn('Failed to retrieve from AsyncStorage:', error);
        return null;
      }
    }
  },

  setItem: async (key: string, value: string): Promise<void> => {
    if (Platform.OS === 'web') {
      // Web environment
      if (typeof window === 'undefined') return;
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.warn('Failed to save to localStorage:', error);
      }
    } else {
      // React Native environment
      try {
        const AsyncStorage =
          require('@react-native-async-storage/async-storage').default;
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.warn('Failed to save to AsyncStorage:', error);
      }
    }
  },

  removeItem: async (key: string): Promise<void> => {
    if (Platform.OS === 'web') {
      // Web environment
      if (typeof window === 'undefined') return;
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.warn('Failed to remove from localStorage:', error);
      }
    } else {
      // React Native environment
      try {
        const AsyncStorage =
          require('@react-native-async-storage/async-storage').default;
        await AsyncStorage.removeItem(key);
      } catch (error) {
        console.warn('Failed to remove from AsyncStorage:', error);
      }
    }
  },
};

/**
 * Get authentication token from platform-specific storage
 */
async function getAuthToken(): Promise<string | null> {
  return await storage.getItem('auth-token');
}

/**
 * tRPC client configuration factory
 * Creates platform-specific configuration for web and mobile
 */
export function createTRPCClientConfig(baseUrl?: string) {
  const defaultBaseUrl =
    Platform.OS === 'web' ? '/api' : 'http://localhost:3000/api';
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
export function handleTRPCError(error: any): string {
  console.error('tRPC Error:', error);

  // Handle different error types
  if (error?.data?.zodError) {
    // Zod validation errors
    const zodError = error.data.zodError;
    const fieldErrors = zodError.fieldErrors;
    const firstError = Object.values(fieldErrors)[0];
    return Array.isArray(firstError) ? firstError[0] : 'Validation error';
  }

  if (error?.message) {
    return error.message;
  }

  return 'An unexpected error occurred';
}

/**
 * Cross-platform authentication utilities
 */
export const auth = {
  async setToken(token: string): Promise<void> {
    await storage.setItem('auth-token', token);
  },

  async getToken(): Promise<string | null> {
    return await getAuthToken();
  },

  async removeToken(): Promise<void> {
    await storage.removeItem('auth-token');
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
  // Type assertion needed due to tRPC client setup
  return (trpc as any).health.ping.useQuery();
}

// Re-export types for convenience
export type { AppRouter } from '@u3/api';
