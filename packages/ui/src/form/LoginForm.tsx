import type React from 'react';
import { Button, Separator, Text, Theme, View, XStack, YStack } from 'tamagui';
import { Input } from '../primitives/Input';

/**
 * Props for the LoginForm component
 */
export interface LoginFormProps {
  /**
   * Custom sign in component (e.g., Clerk's SignIn)
   */
  signInComponent?: React.ReactNode;
  /**
   * Custom styling
   */
  style?: any;
}

/**
 * Login form component with default form or custom sign in component
 */
export function LoginForm({ signInComponent, style }: LoginFormProps) {
  if (signInComponent) {
    return (
      <View
        backgroundColor='$background'
        borderRadius='$6'
        padding='$6'
        shadowColor='$shadowColor'
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.1}
        shadowRadius={12}
        width='100%'
        {...style}
      >
        {signInComponent}
      </View>
    );
  }

  return <DefaultLoginForm style={style} />;
}

/**
 * Default login form when no custom component is provided
 */
function DefaultLoginForm({ style }: { style?: any }) {
  return (
    <YStack
      gap='$4'
      width='100%'
      backgroundColor='$background'
      borderRadius='$6'
      padding='$6'
      borderWidth={1}
      borderColor='$borderColor'
      {...style}
    >
      <YStack gap='$3'>
        <Text fontSize='$6' fontWeight='600' color='$gray12'>
          Sign In
        </Text>
        <Text fontSize='$3' color='$gray11'>
          Enter your credentials to continue
        </Text>
      </YStack>

      <YStack gap='$4'>
        <Input
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input placeholder='Password' secureTextEntry />
      </YStack>

      <Theme inverse>
        <Button
          size='$4'
          backgroundColor='$blue10'
          color='white'
          fontWeight='600'
        >
          Sign In
        </Button>
      </Theme>

      <XStack alignItems='center' gap='$4'>
        <Separator flex={1} />
        <Text color='$gray11' fontSize='$3'>
          Or
        </Text>
        <Separator flex={1} />
      </XStack>

      <YStack gap='$3'>
        <Button
          size='$4'
          variant='outlined'
          backgroundColor='$background'
          borderColor='$borderColor'
        >
          Continue with Google
        </Button>
        <Button
          size='$4'
          variant='outlined'
          backgroundColor='$background'
          borderColor='$borderColor'
        >
          Continue with GitHub
        </Button>
      </YStack>

      <Text textAlign='center' color='$gray11' fontSize='$3'>
        Don't have an account?{' '}
        <Text
          color='$blue10'
          textDecorationLine='underline'
          onPress={() => console.log('Navigate to sign up')}
        >
          Sign up
        </Text>
      </Text>
    </YStack>
  );
}
