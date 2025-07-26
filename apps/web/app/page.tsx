'use client';

import { HomeScreen, Provider } from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <Provider>
      <div style={{ minHeight: '100vh', flex: 1 }}>
        <HomeScreen />
      </div>
    </Provider>
  );
}
