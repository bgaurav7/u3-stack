import { CenteredLayout, SignInForm } from '@u3/ui';
import { useState } from 'react';

// Platform detection
const isReactNative = typeof window === 'undefined';

/**
 * Props for the SignInScreen component
 */
export interface SignInScreenProps {
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
  onSignIn,
  style,
  onNavigateToSignUp,
}: SignInScreenProps = {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Import platform-specific dependencies at the top level
  let platformDeps: {
    useRouter?: () => {
      replace: (path: string) => void;
      push: (path: string) => void;
    };
    Alert?: { alert: (title: string, message: string) => void };
    useSignIn?: () => any;
  } = {};

  try {
    if (isReactNative) {
      const expo = require('expo-router');
      const rn = require('react-native');
      const clerk = require('@clerk/clerk-expo');
      platformDeps = {
        useRouter: expo.useRouter,
        Alert: rn.Alert,
        useSignIn: clerk.useSignIn,
      };
    } else {
      const clerk = require('@clerk/nextjs');
      platformDeps = {
        useRouter: () => ({
          replace: (path: string) => {
            window.location.href = path;
          },
          push: (path: string) => {
            window.location.href = path;
          },
        }),
        Alert: {
          alert: (title: string, message: string) =>
            alert(`${title}: ${message}`),
        },
        useSignIn: clerk.useSignIn,
      };
    }
  } catch (_e) {
    // Dependencies not available
  }

  // Use hooks unconditionally
  const router = platformDeps?.useRouter?.() || {
    replace: () => {},
    push: () => {},
  };
  const signInHook = platformDeps?.useSignIn?.() || {
    signIn: null,
    setActive: null,
    isLoaded: false,
  };
  const { signIn, setActive, isLoaded } = signInHook;
  const Alert = platformDeps?.Alert || { alert: () => {} };

  if (!platformDeps) {
    return (
      <CenteredLayout
        title='Error'
        subtitle='Platform dependencies not available'
        style={style}
      >
        <div>Sign In functionality is not available</div>
      </CenteredLayout>
    );
  }

  const handleSignIn = async () => {
    if (!isLoaded || !signIn || !setActive) return;

    setIsLoading(true);
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        onSignIn?.();
        router.replace('/');
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
        Alert.alert('Error', 'Sign in incomplete. Please try again.');
      }
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
      const error = err as { errors?: Array<{ message: string }> };
      const errorMessage =
        error.errors?.[0]?.message || 'An error occurred during sign in';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToSignUp = () => {
    if (onNavigateToSignUp) {
      onNavigateToSignUp();
    } else if (isReactNative) {
      router.push('/(auth)/sign-up');
    } else {
      router.push('/sign-up');
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
