import {
  CenteredLayout,
  LoadingLayout,
  LoginForm,
  SuccessLayout,
} from '@u3/ui';
import type React from 'react';
import { SignIn } from '../auth/clerk';
import { useAuthState } from '../hooks/useAuthState';

/**
 * Props for the LoginScreen business logic component
 */
export interface LoginScreenProps {
  /**
   * Callback when user successfully signs in
   */
  onSignIn?: () => void;
  /**
   * Custom styling passed to UI component
   */
  style?: Record<string, unknown>;
  /**
   * Custom loading component passed to UI component
   */
  loadingComponent?: React.ReactNode;
  /**
   * Custom signed in component passed to UI component
   */
  signedInComponent?: React.ReactNode;
}

/**
 * Cross-platform login screen using Clerk authentication
 * Handles business logic and uses UI components from @u3/ui
 */
export function LoginScreen({
  onSignIn,
  style,
  loadingComponent,
  signedInComponent,
}: LoginScreenProps = {}) {
  const { isSignedIn, isLoading } = useAuthState();

  // Show loading state
  if (isLoading) {
    return <LoadingLayout loadingComponent={loadingComponent} style={style} />;
  }

  // Show signed in state
  if (isSignedIn) {
    return (
      <SuccessLayout
        message='Successfully signed in!'
        subtitle='Redirecting...'
        successComponent={signedInComponent}
        style={style}
      />
    );
  }

  // Create the Clerk SignIn component
  const signInComponent = (
    <SignIn afterSignInUrl='/' afterSignUpUrl='/' onSignIn={onSignIn} />
  );

  // Show login form
  return (
    <CenteredLayout
      title='Welcome'
      subtitle='Sign in to continue'
      style={style}
    >
      <LoginForm signInComponent={signInComponent} />
    </CenteredLayout>
  );
}
