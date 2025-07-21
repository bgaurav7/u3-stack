import { TamaguiProvider, config } from '@u3/ui';
import { Stack } from 'expo-router';
import type React from 'react';

export default function RootLayout(): React.ReactNode {
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'U3-Stack Mobile',
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack>
    </TamaguiProvider>
  );
}
