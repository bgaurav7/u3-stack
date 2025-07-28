import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Button, PrimitivesSample, Text, YStack } from '@u3/ui';
import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import SignOutButton from '../components/SignOutButton';

export default function HomePage() {
  const { user } = useUser();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'U3-Stack Mobile',
        }}
      />
      <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
        <SignedIn>
          <YStack gap='$4' flex={1}>
            <YStack gap='$2' alignItems='center'>
              <Text fontSize='$6' fontWeight='bold' textAlign='center'>
                Hello{' '}
                {user?.emailAddresses[0]?.emailAddress ||
                  user?.firstName ||
                  'User'}
                ! 🎉
              </Text>
              <Text fontSize='$4' color='$gray11' textAlign='center'>
                You are successfully authenticated with Clerk.
              </Text>
            </YStack>

            <YStack flex={1} gap='$4'>
              <PrimitivesSample />
            </YStack>

            <SignOutButton />
          </YStack>
        </SignedIn>

        <SignedOut>
          <YStack flex={1} justifyContent='center' alignItems='center' gap='$6'>
            <YStack gap='$3' alignItems='center'>
              <Text fontSize='$7' fontWeight='bold' textAlign='center'>
                Welcome to U3-Stack Mobile
              </Text>
              <Text fontSize='$4' color='$gray11' textAlign='center'>
                Please sign in to access the application.
              </Text>
            </YStack>

            <YStack gap='$3' width='100%' maxWidth={300}>
              <Link href='/(auth)/sign-in' asChild>
                <Button
                  size='$4'
                  backgroundColor='$blue10'
                  color='white'
                  fontWeight='600'
                >
                  Sign In
                </Button>
              </Link>
              <Link href='/(auth)/sign-up' asChild>
                <Button
                  size='$4'
                  variant='outlined'
                  backgroundColor='$background'
                >
                  Sign Up
                </Button>
              </Link>
            </YStack>
          </YStack>
        </SignedOut>
      </View>
    </>
  );
}
