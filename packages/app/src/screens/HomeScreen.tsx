import {
  LoadingLayout,
  type ProfileUser,
  SignedOutLayout,
  UserProfileLayout,
} from '@u3/ui';
import type React from 'react';
import { useSignOut } from '../auth/clerk';
import { useCurrentUser } from '../hooks/useAuthState';
import { formatDate } from '../utils/formatDate';

/**
 * Props for the HomeScreen business logic component
 */
export interface HomeScreenProps {
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
  /**
   * Custom signed out component passed to UI component
   */
  signedOutComponent?: React.ReactNode;
}

/**
 * Cross-platform home screen business logic component
 * Handles authentication state and delegates UI rendering to @u3/ui
 */
export function HomeScreen({
  onSignOut,
  style,
  loadingComponent,
  signedOutComponent,
}: HomeScreenProps = {}) {
  const { user, isLoading, isAuthenticated } = useCurrentUser();
  const { signOut } = useSignOut();

  const handleSignOut = async () => {
    try {
      await signOut();
      onSignOut?.();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  // Show loading state
  if (isLoading) {
    return <LoadingLayout loadingComponent={loadingComponent} style={style} />;
  }

  // Show signed out state
  if (!isAuthenticated) {
    return (
      <SignedOutLayout signedOutComponent={signedOutComponent} style={style} />
    );
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
