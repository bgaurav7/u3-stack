import { HomeScreen } from '@u3/app';
import { Stack } from 'expo-router';
import { useClerkAuthProvider } from '../lib/clerk-auth-provider';

export default function HomePage() {
  const authProvider = useClerkAuthProvider();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'U3-Stack Mobile',
        }}
      />
      <HomeScreen authProvider={authProvider} />
    </>
  );
}
