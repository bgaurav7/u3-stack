'use client';

import { AuthForm, type AuthMode, AuthTabs, LogoHeader, YStack } from '@u3/ui';
import { useState } from 'react';

// Platform-specific Clerk hook imports will be handled by the implementing apps
export interface ClerkHooks {
  useSignIn: () => {
    signIn: any;
    setActive: ((params: { session: string }) => Promise<void>) | undefined;
    isLoaded: boolean;
  };
  useSignUp: () => {
    signUp: any;
    setActive: ((params: { session: string }) => Promise<void>) | undefined;
    isLoaded: boolean;
  };
}

export interface AuthScreenProps {
  /**
   * Initial auth mode
   */
  initialMode?: AuthMode;
  /**
   * Show logo in header
   */
  showLogo?: boolean;
  /**
   * Custom success callback
   */
  onSuccess?: () => void;
  /**
   * Platform-specific navigation function
   */
  onNavigate?: (path: string) => void;
  /**
   * Platform-specific Clerk hooks
   */
  clerkHooks: ClerkHooks;
}

/**
 * Unified authentication screen with Sign In / Sign Up toggle
 * Uses Clerk headless APIs for authentication
 */
export function AuthScreen({
  initialMode = 'signin',
  showLogo = true,
  onSuccess,
  onNavigate,
  clerkHooks,
}: AuthScreenProps) {
  const signInHook = clerkHooks.useSignIn();
  const signUpHook = clerkHooks.useSignUp();

  const signIn = signInHook?.signIn;
  const setActiveSignIn = signInHook?.setActive;
  const signUp = signUpHook?.signUp;
  const setActiveSignUp = signUpHook?.setActive;

  // Form state
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isPendingVerification, setIsPendingVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  // Reset form when switching modes
  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    setError(undefined);
    setPassword('');
    setConfirmPassword('');
    setVerificationCode('');
    setIsPendingVerification(false);
  };

  // Success handler
  const handleSuccess = () => {
    onSuccess?.();
    onNavigate?.('/');
  };

  // Sign in handler
  const handleSignIn = async () => {
    if (!signIn || !setActiveSignIn) return;

    setIsLoading(true);
    setError(undefined);

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActiveSignIn({ session: result.createdSessionId });
        handleSuccess();
      } else {
        setError('Sign in incomplete. Please try again.');
      }
    } catch (err: unknown) {
      const error = err as { errors?: Array<{ message: string }> };
      setError(
        error.errors?.[0]?.message || 'Failed to sign in. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up handler
  const handleSignUp = async () => {
    if (!signUp || !setActiveSignUp) return;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError(undefined);

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      if (result.status === 'complete') {
        await setActiveSignUp({ session: result.createdSessionId });
        handleSuccess();
      } else if (result.status === 'missing_requirements') {
        // Handle email verification
        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code',
        });
        setIsPendingVerification(true);
      } else {
        setError('Sign up incomplete. Please try again.');
      }
    } catch (err: unknown) {
      const error = err as { errors?: Array<{ message: string }> };
      setError(
        error.errors?.[0]?.message ||
          'Failed to create account. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Email verification handler
  const handleVerification = async () => {
    if (!signUp || !setActiveSignUp) return;

    setIsLoading(true);
    setError(undefined);

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === 'complete') {
        await setActiveSignUp({ session: result.createdSessionId });
        handleSuccess();
      } else {
        setError('Verification incomplete. Please try again.');
      }
    } catch (err: unknown) {
      const error = err as { errors?: Array<{ message: string }> };
      setError(
        error.errors?.[0]?.message ||
          'Failed to verify email. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Back to form handler
  const handleBackToForm = () => {
    setIsPendingVerification(false);
    setVerificationCode('');
    setError(undefined);
  };

  // Form submit handler
  const handleSubmit = () => {
    if (mode === 'signin') {
      handleSignIn();
    } else {
      handleSignUp();
    }
  };

  return (
    <YStack width='100%' gap='$6'>
      <LogoHeader
        title={isPendingVerification ? 'Verify Email' : 'Welcome'}
        subtitle={
          isPendingVerification
            ? 'Enter the verification code sent to your email'
            : mode === 'signin'
              ? 'Sign in to your account'
              : 'Create your account'
        }
        showLogo={showLogo}
      />

      {!isPendingVerification && (
        <AuthTabs
          mode={mode}
          onModeChange={handleModeChange}
          disabled={isLoading}
        />
      )}

      <AuthForm
        mode={mode}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        verificationCode={verificationCode}
        isPendingVerification={isPendingVerification}
        isLoading={isLoading}
        error={error}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
        onVerificationCodeChange={setVerificationCode}
        onSubmit={handleSubmit}
        onVerify={handleVerification}
        onBackToForm={handleBackToForm}
      />
    </YStack>
  );
}
