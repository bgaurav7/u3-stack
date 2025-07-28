'use client';

import { SignInScreen } from '@u3/app';
import { UIProvider } from '@u3/ui';
import type React from 'react';

export default function SignInPage(): React.ReactElement {
  return (
    <UIProvider>
      <div style={{ minHeight: '100vh', padding: '2rem' }}>
        <SignInScreen />
      </div>
    </UIProvider>
  );
}
