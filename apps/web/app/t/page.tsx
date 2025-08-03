'use client';

import { TaskPage } from '@u3/frontend';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function TasksRoute(): React.ReactElement {
  const authProvider = useClerkAuthProvider();
  const currentPath = usePathname();

  return <TaskPage authProvider={authProvider} currentPath={currentPath} />;
}
