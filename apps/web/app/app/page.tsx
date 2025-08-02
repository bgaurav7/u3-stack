'use client';

import { AppPage } from '@u3/frontend';
import type React from 'react';
import { useClerkAuthProvider } from '../../provider/auth-clerk-provider';

export default function AppRoute(): React.ReactElement {
  const authProvider = useClerkAuthProvider();

  return <AppPage authProvider={authProvider} />;
}
