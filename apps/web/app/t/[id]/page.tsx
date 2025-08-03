'use client';

import { TaskPage } from '@u3/frontend';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useClerkAuthProvider } from '../../../provider/auth-clerk-provider';

export default function TaskSheetRoute(): React.ReactElement {
  const authProvider = useClerkAuthProvider();
  const currentPath = usePathname();

  // Render the same TaskPage component as the main /t route
  // The MainLayout will detect the current path and render the sheet overlay
  return <TaskPage authProvider={authProvider} currentPath={currentPath} />;
}
