import { AppScreen } from '@u3/frontend';
import { Stack } from 'expo-router';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function AppPage() {
  const authProvider = useClerkAuthProvider();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'U3-Stack App',
        }}
      />
      <AppScreen authProvider={authProvider} />
    </>
  );
}
