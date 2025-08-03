import type { AuthProvider } from '@u3/types';
import { H1, LoadingLayout, MainLayout, Text, YStack } from '@u3/ui';
import type React from 'react';
import { useCallback, useEffect } from 'react';
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

  // Handle sign out
  const handleSignOut = useCallback(async () => {
    try {
      await authProvider.signOut();
      onSignOut?.();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }, [authProvider, onSignOut]);

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

  // Format current date
  const currentDate = formatDate(new Date(), { dateStyle: 'full' });

  // Transform user data for sidebar
  const sidebarUser = user
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

  // Show welcome page using MainLayout
  return (
    <MainLayout
      title='Dashboard'
      scrollable={true}
      user={sidebarUser}
      onSignOut={handleSignOut}
    >
      <YStack
        gap='$6'
        alignItems='center'
        justifyContent='center'
        flex={1}
        {...style}
      >
        {/* Welcome Message */}
        <YStack alignItems='center' gap='$4'>
          <H1 size='$10' color='$color12' textAlign='center'>
            Welcome!
          </H1>
          <Text fontSize='$5' color='$color11' textAlign='center'>
            {currentDate}
          </Text>
          <Text
            fontSize='$4'
            color='$color10'
            textAlign='center'
            maxWidth={400}
          >
            Here will be your task list.
          </Text>
        </YStack>
      </YStack>
    </MainLayout>
  );
}
