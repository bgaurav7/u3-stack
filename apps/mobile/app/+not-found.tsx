import { Button, PageNotFound } from '@u3/ui';
import { router, Stack } from 'expo-router';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <PageNotFound
        actionButton={
          <Button
            size='$4'
            backgroundColor='$color'
            color='white'
            onPress={() => router.replace('/')}
          >
            Go Home
          </Button>
        }
      />
    </>
  );
}
