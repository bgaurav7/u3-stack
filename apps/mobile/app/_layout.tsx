import { UIProvider } from '@u3/ui';
import { Stack } from 'expo-router';
import type React from 'react';

export default function RootLayout(): React.ReactNode {
  return (
    <UIProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </UIProvider>
  );
}
