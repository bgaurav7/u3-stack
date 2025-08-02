import type { AuthProvider } from '@u3/types';
import { LoadingLayout, type ProfileUser, UserProfileLayout } from '@u3/ui';
import type React from 'react';
import { useEffect } from 'react';
import { useCurrentUser } from '../hooks/useAuthState';
import { formatDate } from '../utils/formatDate';

/**
 * Props for the AppPage business logic component
 */
export interface AppPageProps {
  /**
   * Authentication provider for the current platform
   */
  authProvider: AuthProvider;
  /**
   * Callback when user signs out
   */
  onSignOut?: () => void;
  /**
   * Custom styling passed to UI component
   */
  style?: Record<string, unknown>;
  /**
   * Custom loading component passed to UI component
   */
  loadingComponent?: React.ReactNode;
}

/**
 * Cross-platform app page business logic component
 * Handles authentication state and delegates UI rendering to @u3/ui
 * This is the main protected app content
 */
export function AppPage({
  authProvider,
  onSignOut,
  style,
  loadingComponent,
}: AppPageProps) {
  const { user, isLoading, isAuthenticated } = useCurrentUser(authProvider);

  const handleSignOut = async () => {
    try {
      await authProvider.signOut();
      onSignOut?.();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  // Redirect to auth if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      authProvider.navigate('/auth');
    }
  }, [isLoading, isAuthenticated, authProvider]);

  // Show loading state
  if (isLoading) {
    return <LoadingLayout loadingComponent={loadingComponent} style={style} />;
  }

  // If not authenticated, return null (redirect will handle navigation)
  if (!isAuthenticated) {
    return null;
  }

  // Transform user data to match UI component interface
  const profileUser: ProfileUser | null = user
    ? {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    : null;

  // Format current date
  const currentDate = formatDate(new Date(), { dateStyle: 'full' });

  // Show user profile
  return (
    <UserProfileLayout
      user={profileUser}
      onSignOut={handleSignOut}
      currentDate={currentDate}
      style={style}
    />
  );
}
