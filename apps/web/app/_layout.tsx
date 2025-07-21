import { TamaguiProvider, config } from '@u3/ui';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name='index' options={{ title: 'U3-Stack Web' }} />
      </Stack>
    </TamaguiProvider>
  );
}
