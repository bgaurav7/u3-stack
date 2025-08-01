'use client';

import type { AuthProvider } from '@u3/types';
import { CenteredLayout, SignInForm } from '@u3/ui';
import { useState } from 'react';

/**
 * Props for the SignInScreen component
 */
export interface SignInScreenProps {
  /**
   * Platform-specific auth provider
   */
  authProvider: AuthProvider;
  /**
   * Callback when user successfully signs in
   */
  onSignIn?: () => void;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
  /**
   * Navigation to sign up handler
   */
  onNavigateToSignUp?: () => void;
}

/**
 * Cross-platform Sign In Screen with business logic
 * Uses SignInForm from @u3/ui for presentation
 */
export function SignInScreen({
  authProvider,
  onSignIn,
  style,
  onNavigateToSignUp,
}: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await authProvider.signIn(email, password);

      if (result.success) {
        onSignIn?.();
        authProvider.navigate('/');
      } else {
        authProvider.showAlert('Error', result.error || 'Sign in failed');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      authProvider.showAlert('Error', 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToSignUp = () => {
    if (onNavigateToSignUp) {
      onNavigateToSignUp();
    } else {
      authProvider.navigate('/sign-up');
    }
  };

  return (
    <CenteredLayout
      title='Welcome Back'
      subtitle='Sign in to your account'
      style={style}
    >
      <SignInForm
        email={email}
        password={password}
        isLoading={isLoading}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSignIn}
        onNavigateToSignUp={handleNavigateToSignUp}
      />
    </CenteredLayout>
  );
}
