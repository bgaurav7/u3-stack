'use client';

import { HomeScreen } from '@u3/app';
import { UIProvider } from '@u3/ui';
import type React from 'react';
import { useClerkAuthProvider } from '../lib/clerk-auth-provider';

export default function HomePage(): React.ReactElement {
  const authProvider = useClerkAuthProvider();

  return (
    <UIProvider>
      <HomeScreen authProvider={authProvider} />
    </UIProvider>
  );
}
