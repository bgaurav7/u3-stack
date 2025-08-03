import { useAuth } from '@clerk/clerk-expo';
import { HomePage } from '@u3/frontend';
import { LoadingLayout } from '@u3/ui';
import { Redirect, router } from 'expo-router';

export default function HomeRoute() {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait for auth to load
  if (!isLoaded) {
    return <LoadingLayout />;
  }

  // If signed in, redirect to protected app
  if (isSignedIn) {
    return <Redirect href='/t' />;
  }

  // If signed out, show landing page with sign in option
  return <HomePage onSignInClick={() => router.push('/auth')} />;
}
