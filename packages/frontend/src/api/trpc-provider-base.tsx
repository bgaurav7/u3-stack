'use client';

/**
 * Base tRPC Provider
 *
 * This provides a reusable tRPC provider that can be extended by platform-specific
 * implementations. It handles the base QueryClient setup and tRPC client creation.
 *
 * Platform-specific providers should use this as a base and provide their own
 * authentication token retrieval logic.
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { setAuthTokenGetter, trpc, trpcClientConfig } from './trpc-client';

interface BaseTRPCProviderProps {
  children: ReactNode;
  getAuthToken?: () => Promise<string | null>;
  baseUrl?: string;
}

export function BaseTRPCProvider({
  children,
  getAuthToken,
  baseUrl,
}: BaseTRPCProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: (failureCount, error) => {
              // Don't retry on 4xx errors
              if (error && typeof error === 'object' && 'status' in error) {
                const status = error.status as number;
                if (status >= 400 && status < 500) {
                  return false;
                }
              }
              return failureCount < 3;
            },
          },
        },
      })
  );

  const [trpcClient] = useState(() => {
    const config = baseUrl
      ? { ...trpcClientConfig, links: trpcClientConfig.links }
      : trpcClientConfig;

    // biome-ignore lint/suspicious/noExplicitAny: tRPC client typing limitation
    return (trpc as any).createClient(config);
  });

  // Set up auth token getter for tRPC client
  useEffect(() => {
    if (getAuthToken) {
      setAuthTokenGetter(getAuthToken);
    }
  }, [getAuthToken]);

  // biome-ignore lint/suspicious/noExplicitAny: tRPC provider typing limitation
  const TRPCProvider = (trpc as any).Provider;

  return (
    <TRPCProvider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TRPCProvider>
  );
}
