import { type AuthState, useAuthWrapper } from '../auth/clerk';

/**
 * Custom hook that provides authentication state
 * This is a wrapper around Clerk's authentication that provides
 * a consistent interface across platforms
 */
export function useAuthState(): AuthState {
  return useAuthWrapper();
}

/**
 * Hook that returns whether the user is authenticated
 * Useful for conditional rendering and route protection
 */
export function useIsAuthenticated(): boolean {
  const { isSignedIn } = useAuthState();
  return isSignedIn;
}

/**
 * Hook that returns the current user or null
 * Provides type-safe access to user data
 */
export function useCurrentUser() {
  const { user, isLoading } = useAuthState();

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}
