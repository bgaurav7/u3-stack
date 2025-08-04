'use client';

/**
 * Web-specific tRPC Provider with Clerk authentication integration
 *
 * This provider extends the base tRPC provider with Clerk-specific token management.
 */

import { useAuth } from '@clerk/nextjs';
import { BaseTRPCProvider } from '@u3/frontend';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

interface TRPCClientProviderProps {
  children: ReactNode;
}

export function TRPCClientProvider({ children }: TRPCClientProviderProps) {
  const { getToken, isLoaded } = useAuth();

  const getAuthToken = useCallback(async () => {
    // Wait for Clerk to load before attempting to get token
    if (!isLoaded) {
      return null;
    }

    try {
      const token = await getToken();
      return token;
    } catch (error) {
      console.error('Failed to get Clerk auth token:', error);
      return null;
    }
  }, [getToken, isLoaded]);

  return (
    <BaseTRPCProvider getAuthToken={getAuthToken}>{children}</BaseTRPCProvider>
  );
}
