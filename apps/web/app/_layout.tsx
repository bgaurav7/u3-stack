import { TamaguiProvider } from '@tamagui/core';
import { Stack } from 'expo-router';
import tamaguiConfig from '../tamagui.config';

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack>
        <Stack.Screen name='index' options={{ title: 'U3-Stack Web' }} />
      </Stack>
    </TamaguiProvider>
  );
}
