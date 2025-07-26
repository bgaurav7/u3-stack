'use client';

import { PrimitivesSample, UIProvider } from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <UIProvider>
      <div style={{ minHeight: '100vh', flex: 1 }}>
        <PrimitivesSample />
      </div>
    </UIProvider>
  );
}
