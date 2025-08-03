import { TaskPage } from '@u3/frontend';
import { usePathname } from 'expo-router';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function TaskSheetRoute() {
  const authProvider = useClerkAuthProvider();
  const currentPath = usePathname();

  // Render the main task page, which will detect the route and show the sheet overlay
  return <TaskPage authProvider={authProvider} currentPath={currentPath} />;
}
