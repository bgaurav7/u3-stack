'use client';

import {
  AnimatePresence,
  Button,
  Input,
  Paragraph,
  Spinner,
  Text,
  Theme,
  YStack,
} from 'tamagui';
import type { AuthMode } from './AuthTabs';

export interface AuthFormProps {
  /**
   * Current auth mode
   */
  mode: AuthMode;
  /**
   * Email input value
   */
  email: string;
  /**
   * Password input value
   */
  password: string;
  /**
   * Confirm password input value (signup only)
   */
  confirmPassword: string;
  /**
   * Verification code input value
   */
  verificationCode: string;
  /**
   * Whether form is in verification step
   */
  isPendingVerification: boolean;
  /**
   * Loading state
   */
  isLoading: boolean;
  /**
   * Form error message
   */
  error?: string;
  /**
   * Email change handler
   */
  onEmailChange: (email: string) => void;
  /**
   * Password change handler
   */
  onPasswordChange: (password: string) => void;
  /**
   * Confirm password change handler
   */
  onConfirmPasswordChange: (confirmPassword: string) => void;
  /**
   * Verification code change handler
   */
  onVerificationCodeChange: (code: string) => void;
  /**
   * Form submit handler (sign in/up)
   */
  onSubmit: () => void;
  /**
   * Verification submit handler
   */
  onVerify: () => void;
  /**
   * Back to form handler (from verification)
   */
  onBackToForm: () => void;
}

/**
 * Unified auth form component with email/password inputs and Clerk integration
 */
export function AuthForm({
  mode,
  email,
  password,
  confirmPassword,
  verificationCode,
  isPendingVerification,
  isLoading,
  error,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onVerificationCodeChange,
  onSubmit,
  onVerify,
  onBackToForm,
}: AuthFormProps) {
  const isSignUp = mode === 'signup';
  const isValidEmail = email.includes('@') && email.includes('.');
  const isValidPassword = password.length >= 6;
  const isValidConfirmPassword = !isSignUp || password === confirmPassword;
  const isValidVerificationCode = verificationCode.length === 6;

  const canSubmit =
    !isLoading && isValidEmail && isValidPassword && isValidConfirmPassword;
  const canVerify = !isLoading && isValidVerificationCode;

  if (isPendingVerification) {
    return (
      <YStack width='100%' gap='$4'>
        <YStack gap='$2'>
          <Text fontSize='$3' color='$gray11'>
            We sent a verification code to:
          </Text>
          <Text fontSize='$4' fontWeight='600' color='$gray12'>
            {email}
          </Text>
        </YStack>

        <Input
          size='$4'
          placeholder='Enter 6-digit code'
          value={verificationCode}
          onChangeText={onVerificationCodeChange}
          keyboardType='number-pad'
          maxLength={6}
          autoFocus
          autoComplete='one-time-code'
          textContentType='oneTimeCode'
        />

        {error && (
          <Theme name='error'>
            <Text fontSize='$3' textAlign='center' color='$color'>
              {error}
            </Text>
          </Theme>
        )}

        <YStack gap='$3'>
          <Button
            size='$4'
            fontWeight='600'
            onPress={onVerify}
            disabled={!canVerify}
            icon={
              <AnimatePresence>
                {isLoading && (
                  <Spinner
                    size='small'
                    animation='quick'
                    enterStyle={{ opacity: 0, scale: 0.5 }}
                    exitStyle={{ opacity: 0, scale: 0.5 }}
                  />
                )}
              </AnimatePresence>
            }
          >
            {isLoading ? 'Verifying...' : 'Verify Email'}
          </Button>

          <Button
            size='$4'
            variant='outlined'
            onPress={onBackToForm}
            disabled={isLoading}
          >
            Back to Sign Up
          </Button>
        </YStack>
      </YStack>
    );
  }

  return (
    <YStack width='100%' gap='$4'>
      <YStack gap='$3'>
        <Input
          size='$4'
          placeholder='Email address'
          value={email}
          onChangeText={onEmailChange}
          keyboardType='email-address'
          autoCapitalize='none'
          autoComplete='email'
          textContentType='emailAddress'
        />

        <Input
          size='$4'
          placeholder='Password'
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry
          autoComplete={isSignUp ? 'new-password' : 'current-password'}
          textContentType={isSignUp ? 'newPassword' : 'password'}
        />

        {isSignUp && (
          <Input
            size='$4'
            placeholder='Confirm password'
            value={confirmPassword}
            onChangeText={onConfirmPasswordChange}
            secureTextEntry
            autoComplete='new-password'
            textContentType='newPassword'
          />
        )}
      </YStack>

      {error && (
        <Theme name='error'>
          <Text fontSize='$3' textAlign='center' color='$color'>
            {error}
          </Text>
        </Theme>
      )}

      <Button
        size='$4'
        fontWeight='600'
        onPress={onSubmit}
        disabled={!canSubmit}
        icon={
          <AnimatePresence>
            {isLoading && (
              <Spinner
                size='small'
                animation='quick'
                position='absolute'
                left='60%'
                enterStyle={{ opacity: 0, scale: 0.5 }}
                exitStyle={{ opacity: 0, scale: 0.5 }}
              />
            )}
          </AnimatePresence>
        }
      >
        {isLoading
          ? isSignUp
            ? 'Creating Account...'
            : 'Signing In...'
          : isSignUp
            ? 'Create Account'
            : 'Sign In'}
      </Button>

      {isSignUp && (
        <Paragraph
          fontSize='$2'
          color='$color10'
          textAlign='center'
          lineHeight='$3'
        >
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </Paragraph>
      )}
    </YStack>
  );
}
