import { useAuth } from '@clerk/clerk-expo';
import { HomeScreen } from '@u3/app';
import { Redirect, router } from 'expo-router';
import { Text, View } from 'react-native';

export default function RootPage() {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait for auth to load
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // If signed in, redirect to protected app
  if (isSignedIn) {
    return <Redirect href='/app' />;
  }

  // If signed out, show landing page with sign in option
  return <HomeScreen onSignInClick={() => router.push('/auth')} />;
}
