'use client';

import { HomeScreen } from '@u3/app';
import { UIProvider } from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <UIProvider>
      <HomeScreen />
    </UIProvider>
  );
}
