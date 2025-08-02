import { useAuth } from '@clerk/clerk-expo';
import { HomeScreen } from '@u3/frontend';
import { LoadingLayout } from '@u3/ui';
import { Redirect, router } from 'expo-router';

export default function RootPage() {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait for auth to load
  if (!isLoaded) {
    return <LoadingLayout />;
  }

  // If signed in, redirect to protected app
  if (isSignedIn) {
    return <Redirect href='/app' />;
  }

  // If signed out, show landing page with sign in option
  return <HomeScreen onSignInClick={() => router.push('/auth')} />;
}
