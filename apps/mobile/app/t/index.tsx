import { TaskPage } from '@u3/frontend';
import { Stack, usePathname } from 'expo-router';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function TasksRoute() {
  const authProvider = useClerkAuthProvider();
  const currentPath = usePathname();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // Hide native header since MainLayout provides NavBar
        }}
      />
      <TaskPage authProvider={authProvider} currentPath={currentPath} />
    </>
  );
}
