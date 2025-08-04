'use client';

/**
 * Mobile-specific tRPC Provider
 *
 * This provider extends the base tRPC provider with mobile-specific token management.
 * Currently uses a placeholder auth implementation - replace with your mobile auth solution.
 */

import { BaseTRPCProvider } from '@u3/frontend';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

interface TRPCClientProviderProps {
  children: ReactNode;
}

export function TRPCClientProvider({ children }: TRPCClientProviderProps) {
  const getAuthToken = useCallback(async () => {
    // TODO: Implement mobile auth token retrieval
    // This could be from:
    // - Expo SecureStore
    // - Expo Auth Session
    // - React Native Async Storage
    // - Your mobile auth provider

    console.warn('Mobile auth token retrieval not implemented');
    return null;
  }, []);

  return (
    <BaseTRPCProvider getAuthToken={getAuthToken}>{children}</BaseTRPCProvider>
  );
}
