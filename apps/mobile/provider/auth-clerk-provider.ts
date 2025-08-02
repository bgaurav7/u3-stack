/**
 * Clerk authentication provider implementation for Expo/React Native mobile app
 */

import { useAuth, useSignIn, useSignUp, useUser } from '@clerk/clerk-expo';
import type { AuthProvider } from '@u3/types/app/auth';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

export function useClerkAuthProvider(): AuthProvider {
  const { isSignedIn, isLoaded, signOut: clerkSignOut } = useAuth();
  const { user } = useUser();
  const {
    signIn,
    setActive: setActiveSignIn,
    isLoaded: signInLoaded,
  } = useSignIn();
  const {
    signUp,
    setActive: setActiveSignUp,
    isLoaded: signUpLoaded,
  } = useSignUp();
  const router = useRouter();

  // Transform Clerk user to our AppAuthUser interface
  const transformedUser = user
    ? {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
        firstName: user.firstName || undefined,
        lastName: user.lastName || undefined,
        fullName: user.fullName || undefined,
        imageUrl: user.imageUrl || undefined,
        createdAt: user.createdAt ? new Date(user.createdAt) : undefined,
        updatedAt: user.updatedAt ? new Date(user.updatedAt) : undefined,
      }
    : null;

  const authProvider: AuthProvider = {
    useAuth: () => ({
      isSignedIn: isSignedIn || false,
      isLoading: !isLoaded,
      user: transformedUser,
    }),

    signIn: async (email: string, password: string) => {
      if (!signInLoaded || !signIn || !setActiveSignIn) {
        return { success: false, error: 'Authentication not ready' };
      }

      try {
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        });

        if (signInAttempt.status === 'complete') {
          await setActiveSignIn({ session: signInAttempt.createdSessionId });
          return { success: true };
        } else {
          return {
            success: false,
            error: 'Sign in incomplete. Please try again.',
            requiresVerification: signInAttempt.status === 'needs_identifier',
          };
        }
      } catch (error: unknown) {
        console.error('Sign in error:', error);
        const errorMessage =
          (error as { errors?: Array<{ message?: string }> })?.errors?.[0]
            ?.message || 'Failed to sign in. Please try again.';
        return { success: false, error: errorMessage };
      }
    },

    signUp: async (email: string, password: string) => {
      if (!signUpLoaded || !signUp) {
        return { success: false, error: 'Authentication not ready' };
      }

      try {
        await signUp.create({
          emailAddress: email,
          password,
        });

        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code',
        });
        return { success: true, requiresVerification: true };
      } catch (error: unknown) {
        console.error('Sign up error:', error);
        const errorMessage =
          (error as { errors?: Array<{ message?: string }> })?.errors?.[0]
            ?.message || 'Failed to create account. Please try again.';
        return { success: false, error: errorMessage };
      }
    },

    verifyEmail: async (code: string) => {
      if (!signUpLoaded || !signUp || !setActiveSignUp) {
        return { success: false, error: 'Authentication not ready' };
      }

      try {
        const signUpAttempt = await signUp.attemptEmailAddressVerification({
          code,
        });

        if (signUpAttempt.status === 'complete') {
          await setActiveSignUp({ session: signUpAttempt.createdSessionId });
          return { success: true };
        } else {
          return {
            success: false,
            error: 'Verification incomplete. Please try again.',
          };
        }
      } catch (error: unknown) {
        console.error('Verification error:', error);
        const errorMessage =
          (error as { errors?: Array<{ message?: string }> })?.errors?.[0]
            ?.message || 'Failed to verify email. Please try again.';
        return { success: false, error: errorMessage };
      }
    },

    signOut: async () => {
      try {
        await clerkSignOut();
        router.replace('/');
      } catch (error) {
        console.error('Sign out error:', error);
        throw error;
      }
    },

    navigate: (path: string) => {
      if (path === '/auth') {
        router.push('/auth');
      } else if (path === '/') {
        router.replace('/');
      } else {
        // For other paths, use the path directly - Expo Router handles string paths
        router.push(path as never);
      }
    },

    showAlert: (title: string, message: string) => {
      Alert.alert(title, message);
    },
  };

  return authProvider;
}
