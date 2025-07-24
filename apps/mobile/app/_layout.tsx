import { Provider } from 'app/provider';
import { Stack } from 'expo-router';
import type React from 'react';

export default function RootLayout(): React.ReactNode {
  return (
    <Provider>
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
    </Provider>
  );
}
