import type React from 'react';
import { Button, Separator, Text, Theme, XStack, YStack } from 'tamagui';
import { Input } from '../primitives/Input';

/**
 * Common props for authentication forms
 */
export interface BaseAuthFormProps {
  /**
   * Email input value
   */
  email: string;
  /**
   * Password input value
   */
  password: string;
  /**
   * Loading state
   */
  isLoading?: boolean;
  /**
   * Email change handler
   */
  onEmailChange: (email: string) => void;
  /**
   * Password change handler
   */
  onPasswordChange: (password: string) => void;
  /**
   * Submit handler
   */
  onSubmit: () => void;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
}

/**
 * Props for the SignInForm component
 */
export interface SignInFormProps extends BaseAuthFormProps {
  /**
   * Navigation to sign up handler
   */
  onNavigateToSignUp?: () => void;
}

/**
 * Props for the SignUpForm component
 */
export interface SignUpFormProps extends BaseAuthFormProps {
  /**
   * Verification code value (for sign up flow)
   */
  verificationCode?: string;
  /**
   * Whether verification is pending
   */
  isPendingVerification?: boolean;
  /**
   * Verification code change handler
   */
  onVerificationCodeChange?: (code: string) => void;
  /**
   * Verify handler
   */
  onVerify?: () => void;
  /**
   * Navigation to sign in handler
   */
  onNavigateToSignIn?: () => void;
}

/**
 * Base authentication form container
 */
function AuthFormContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: Record<string, unknown>;
}) {
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
      {children}
    </YStack>
  );
}

/**
 * Sign In Form UI Component
 */
export function SignInForm({
  email,
  password,
  isLoading = false,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onNavigateToSignUp,
  style,
}: SignInFormProps) {
  return (
    <AuthFormContainer style={style}>
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
          value={email}
          onChangeText={onEmailChange}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={onPasswordChange}
        />
      </YStack>

      <Theme inverse>
        <Button
          size='$4'
          backgroundColor='$blue10'
          color='white'
          fontWeight='600'
          disabled={isLoading}
          onPress={onSubmit}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
      </Theme>

      {onNavigateToSignUp && (
        <>
          <XStack alignItems='center' gap='$4'>
            <Separator flex={1} />
            <Text color='$gray11' fontSize='$3'>
              Or
            </Text>
            <Separator flex={1} />
          </XStack>

          <XStack justifyContent='center' gap='$2'>
            <Text color='$gray11' fontSize='$3'>
              Don't have an account?
            </Text>
            <Text
              color='$blue10'
              fontSize='$3'
              fontWeight='600'
              onPress={onNavigateToSignUp}
              cursor='pointer'
            >
              Sign Up
            </Text>
          </XStack>
        </>
      )}
    </AuthFormContainer>
  );
}

/**
 * Sign Up Form UI Component
 */
export function SignUpForm({
  email,
  password,
  verificationCode = '',
  isPendingVerification = false,
  isLoading = false,
  onEmailChange,
  onPasswordChange,
  onVerificationCodeChange,
  onSubmit,
  onVerify,
  onNavigateToSignIn,
  style,
}: SignUpFormProps) {
  if (isPendingVerification) {
    return (
      <AuthFormContainer style={style}>
        <YStack gap='$3'>
          <Text fontSize='$6' fontWeight='600' color='$gray12'>
            Verify Your Email
          </Text>
          <Text fontSize='$3' color='$gray11'>
            Enter the verification code sent to your email
          </Text>
        </YStack>

        <YStack gap='$4'>
          <Input
            placeholder='Verification Code'
            value={verificationCode}
            onChangeText={onVerificationCodeChange}
          />
        </YStack>

        <Theme inverse>
          <Button
            size='$4'
            backgroundColor='$blue10'
            color='white'
            fontWeight='600'
            disabled={isLoading}
            onPress={onVerify}
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </Button>
        </Theme>
      </AuthFormContainer>
    );
  }

  return (
    <AuthFormContainer style={style}>
      <YStack gap='$3'>
        <Text fontSize='$6' fontWeight='600' color='$gray12'>
          Sign Up
        </Text>
        <Text fontSize='$3' color='$gray11'>
          Create your account to get started
        </Text>
      </YStack>

      <YStack gap='$4'>
        <Input
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={onEmailChange}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={onPasswordChange}
        />
      </YStack>

      <Theme inverse>
        <Button
          size='$4'
          backgroundColor='$blue10'
          color='white'
          fontWeight='600'
          disabled={isLoading}
          onPress={onSubmit}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </Theme>

      {onNavigateToSignIn && (
        <>
          <XStack alignItems='center' gap='$4'>
            <Separator flex={1} />
            <Text color='$gray11' fontSize='$3'>
              Or
            </Text>
            <Separator flex={1} />
          </XStack>

          <XStack justifyContent='center' gap='$2'>
            <Text color='$gray11' fontSize='$3'>
              Already have an account?
            </Text>
            <Text
              color='$blue10'
              fontSize='$3'
              fontWeight='600'
              onPress={onNavigateToSignIn}
              cursor='pointer'
            >
              Sign In
            </Text>
          </XStack>
        </>
      )}
    </AuthFormContainer>
  );
}
