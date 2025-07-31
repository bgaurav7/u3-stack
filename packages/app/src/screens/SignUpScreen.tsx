'use client';

import { CenteredLayout, SignUpForm } from '@u3/ui';
import { useState } from 'react';
import { getPlatformDeps } from '../utils/platform-deps';

// Platform detection
const isReactNative = typeof window === 'undefined';

/**
 * Props for the SignUpScreen component
 */
export interface SignUpScreenProps {
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
  onSignUp,
  style,
  onNavigateToSignIn,
}: SignUpScreenProps = {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isPendingVerification, setIsPendingVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get platform-specific dependencies safely
  const platformDeps = getPlatformDeps();

  // Use hooks unconditionally
  const router = platformDeps?.useRouter?.() || {
    replace: () => {},
    push: () => {},
  };
  const signUpHook = platformDeps?.useSignUp?.() || {
    signUp: null,
    setActive: null,
    isLoaded: false,
  };
  const { signUp, setActive, isLoaded } = signUpHook;
  const Alert = platformDeps?.Alert || { alert: () => {} };

  if (!platformDeps) {
    return (
      <CenteredLayout
        title='Error'
        subtitle='Platform dependencies not available'
        style={style}
      >
        <div>Sign Up functionality is not available</div>
      </CenteredLayout>
    );
  }

  const handleSignUp = async () => {
    if (!isLoaded || !signUp) return;

    setIsLoading(true);
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setIsPendingVerification(true);
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
      const error = err as { errors?: Array<{ message: string }> };
      const errorMessage =
        error.errors?.[0]?.message || 'An error occurred during sign up';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async () => {
    if (!isLoaded || !signUp || !setActive) return;

    setIsLoading(true);
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        onSignUp?.();
        router.replace('/');
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
        Alert.alert('Error', 'Verification incomplete. Please try again.');
      }
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
      const error = err as { errors?: Array<{ message: string }> };
      const errorMessage =
        error.errors?.[0]?.message || 'An error occurred during verification';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToSignIn = () => {
    if (onNavigateToSignIn) {
      onNavigateToSignIn();
    } else if (isReactNative) {
      router.push('/(auth)/sign-in');
    } else {
      router.push('/sign-in');
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
