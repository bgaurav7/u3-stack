import { AppPage } from '@u3/frontend';
import { Stack } from 'expo-router';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function AppRoute() {
  const authProvider = useClerkAuthProvider();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // Hide native header since MainLayout provides NavBar
        }}
      />
      <AppPage authProvider={authProvider} />
    </>
  );
}
