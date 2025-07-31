import { HomeScreen } from '@u3/app';
import { Stack } from 'expo-router';

export default function HomePage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'U3-Stack Mobile',
        }}
      />
      <HomeScreen />
    </>
  );
}
