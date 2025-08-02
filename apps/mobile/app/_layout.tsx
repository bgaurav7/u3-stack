import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { UIProvider } from '@u3/ui';
import { Stack } from 'expo-router';
import type React from 'react';
import '../provider/storage-provider';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file'
  );
}

export default function RootLayout(): React.ReactNode {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
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
    </ClerkProvider>
  );
}
