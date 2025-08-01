'use client';

import type { AuthProvider } from '@u3/types';
import { CenteredLayout, SignUpForm } from '@u3/ui';
import { useState } from 'react';

/**
 * Props for the SignUpScreen component
 */
export interface SignUpScreenProps {
  /**
   * Platform-specific auth provider
   */
  authProvider: AuthProvider;
  /**
   * Callback when user successfully signs up
   */
  onSignUp?: () => void;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
  /**
   * Navigation to sign in handler
   */
  onNavigateToSignIn?: () => void;
}

/**
 * Cross-platform Sign Up Screen with business logic
 * Uses SignUpForm from @u3/ui for presentation
 */
export function SignUpScreen({
  authProvider,
  onSignUp,
  style,
  onNavigateToSignIn,
}: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isPendingVerification, setIsPendingVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const result = await authProvider.signUp(email, password);

      if (result.success) {
        if (result.requiresVerification) {
          setIsPendingVerification(true);
        } else {
          onSignUp?.();
          authProvider.navigate('/');
        }
      } else {
        authProvider.showAlert('Error', result.error || 'Sign up failed');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      authProvider.showAlert('Error', 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async () => {
    setIsLoading(true);
    try {
      const result = await authProvider.verifyEmail(verificationCode);

      if (result.success) {
        onSignUp?.();
        authProvider.navigate('/');
      } else {
        authProvider.showAlert('Error', result.error || 'Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      authProvider.showAlert('Error', 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToSignIn = () => {
    if (onNavigateToSignIn) {
      onNavigateToSignIn();
    } else {
      authProvider.navigate('/sign-in');
    }
  };

  return (
    <CenteredLayout
      title={isPendingVerification ? 'Verify Email' : 'Create Account'}
      subtitle={
        isPendingVerification
          ? 'Enter the verification code sent to your email'
          : 'Sign up to get started'
      }
      style={style}
    >
      <SignUpForm
        email={email}
        password={password}
        verificationCode={verificationCode}
        isPendingVerification={isPendingVerification}
        isLoading={isLoading}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onVerificationCodeChange={setVerificationCode}
        onSubmit={handleSignUp}
        onVerify={handleVerification}
        onNavigateToSignIn={handleNavigateToSignIn}
      />
    </CenteredLayout>
  );
}
