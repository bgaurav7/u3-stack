/**
 * Clerk authentication provider implementation for Next.js web app
 */

import { useAuth, useSignIn, useSignUp, useUser } from '@clerk/nextjs';
import type { AuthProvider } from '@u3/types/app/auth';
import { useRouter } from 'next/navigation';

export function useClerkAuthProvider(): AuthProvider {
  const { isSignedIn, isLoaded } = useAuth();
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
      } catch (error: any) {
        console.error('Sign in error:', error);
        const errorMessage =
          error.errors?.[0]?.message || 'An error occurred during sign in';
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
      } catch (error: any) {
        console.error('Sign up error:', error);
        const errorMessage =
          error.errors?.[0]?.message || 'An error occurred during sign up';
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
      } catch (error: any) {
        console.error('Verification error:', error);
        const errorMessage =
          error.errors?.[0]?.message || 'An error occurred during verification';
        return { success: false, error: errorMessage };
      }
    },

    signOut: async () => {
      // This will be handled by Clerk's UserButton or a custom sign out component
      // For now, we'll just reload the page
      window.location.href = '/';
    },

    navigate: (path: string) => {
      router.push(path);
    },

    showAlert: (title: string, message: string) => {
      if (typeof window !== 'undefined' && window.alert) {
        window.alert(`${title}: ${message}`);
      } else {
        console.log(`${title}: ${message}`);
      }
    },
  };

  return authProvider;
}
