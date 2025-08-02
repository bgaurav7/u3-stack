import { AppPage } from '@u3/frontend';
import { Stack } from 'expo-router';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function AppRoute() {
  const authProvider = useClerkAuthProvider();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'U3-Stack App',
        }}
      />
      <AppPage authProvider={authProvider} />
    </>
  );
}
