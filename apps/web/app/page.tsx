'use client';

import { HomeScreen, Provider, View } from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <Provider>
      <View backgroundColor='$background' minHeight='100vh'>
        <HomeScreen />
      </View>
    </Provider>
  );
}
