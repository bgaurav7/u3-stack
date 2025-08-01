'use client';

import { AppScreen } from '@u3/app';
import { UIProvider } from '@u3/ui';
import type React from 'react';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function AppPage(): React.ReactElement {
  const authProvider = useClerkAuthProvider();

  return (
    <UIProvider>
      <AppScreen authProvider={authProvider} />
    </UIProvider>
  );
}
