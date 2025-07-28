'use client';

import { SignedIn, SignedOut, useClerk, useUser } from '@clerk/nextjs';
import {
  PrimitivesSample,
  SignOutButton,
  Text,
  UIProvider,
  YStack,
} from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <UIProvider>
      <div style={{ minHeight: '100vh', flex: 1, padding: '2rem' }}>
        <SignedOut>
          <YStack
            gap='$4'
            alignItems='center'
            justifyContent='center'
            style={{ minHeight: '60vh' }}
          >
            <YStack gap='$3' alignItems='center'>
              <Text fontSize='$8' fontWeight='bold' textAlign='center'>
                Welcome to U3-Stack
              </Text>
              <Text fontSize='$5' color='$gray11' textAlign='center'>
                Please sign in to access the application.
              </Text>
            </YStack>
          </YStack>
        </SignedOut>

        <SignedIn>
          <YStack gap='$6'>
            <UserInfo />
            <PrimitivesSample />
            <div style={{ maxWidth: '200px' }}>
              <WebSignOutButton />
            </div>
          </YStack>
        </SignedIn>
      </div>
    </UIProvider>
  );
}

function UserInfo(): React.ReactElement {
  const { user } = useUser();

  return (
    <YStack
      gap='$3'
      padding='$4'
      backgroundColor='$gray2'
      borderRadius='$4'
      borderWidth={1}
      borderColor='$gray6'
    >
      <Text fontSize='$6' fontWeight='bold'>
        Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}! 🎉
      </Text>
      <Text fontSize='$4' color='$gray11'>
        You are successfully authenticated with Clerk.
      </Text>
    </YStack>
  );
}

function WebSignOutButton(): React.ReactElement {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Sign out error:', error);
      alert('An error occurred during sign out');
    }
  };

  return <SignOutButton onSignOut={handleSignOut} />;
}
