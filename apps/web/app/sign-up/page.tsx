'use client';

import { SignUpScreen } from '@u3/app';
import { UIProvider } from '@u3/ui';
import type React from 'react';

export default function SignUpPage(): React.ReactElement {
  return (
    <UIProvider>
      <div style={{ minHeight: '100vh', padding: '2rem' }}>
        <SignUpScreen />
      </div>
    </UIProvider>
  );
}
