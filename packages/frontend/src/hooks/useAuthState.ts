import type { AppAuthState, AuthProvider } from '@u3/types';

/**
 * Custom hook that provides authentication state
 * This is a wrapper around the platform's authentication that provides
 * a consistent interface across platforms
 */
export function useAuthState(authProvider: AuthProvider): AppAuthState {
  return authProvider.useAuth();
}

/**
 * Hook that returns whether the user is authenticated
 * Useful for conditional rendering and route protection
 */
export function useIsAuthenticated(authProvider: AuthProvider): boolean {
  const { isSignedIn } = useAuthState(authProvider);
  return isSignedIn;
}

/**
 * Hook that returns the current user or null
 * Provides type-safe access to user data
 */
export function useCurrentUser(authProvider: AuthProvider) {
  const { user, isLoading } = useAuthState(authProvider);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}
