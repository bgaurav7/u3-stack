/**
 * tRPC and React Query Providers for Next.js App Router
 */

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { trpc, trpcClientConfig } from './trpc';

interface TRPCProviderProps {
  children: React.ReactNode;
}

export function TRPCProvider({ children }: TRPCProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    (trpc as any).createClient(trpcClientConfig)
  );

  // Use variables to avoid JSX type assertion issues
  const TRPCProviderComponent = (trpc as any).Provider;

  return (
    <TRPCProviderComponent client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}

        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </TRPCProviderComponent>
  );
}

export { useQueryClient } from '@tanstack/react-query';
