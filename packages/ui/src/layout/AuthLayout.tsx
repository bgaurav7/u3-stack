import type React from 'react';
import { H1, Paragraph, Spinner, Text, View, YStack } from 'tamagui';

/**
 * Props for loading state layout
 */
export interface LoadingLayoutProps {
  /**
   * Custom loading component
   */
  loadingComponent?: React.ReactNode;
  /**
   * Custom styling
   */
  style?: any;
}

/**
 * Layout component for loading states
 */
export function LoadingLayout({ loadingComponent, style }: LoadingLayoutProps) {
  return (
    <View
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='$background'
      {...style}
    >
      {loadingComponent || (
        <YStack alignItems='center' gap='$4'>
          <Spinner size='large' color='$blue10' />
          <Text color='$gray11' fontSize='$4'>
            Loading...
          </Text>
        </YStack>
      )}
    </View>
  );
}

/**
 * Props for success state layout
 */
export interface SuccessLayoutProps {
  /**
   * Success message
   */
  message?: string;
  /**
   * Subtitle message
   */
  subtitle?: string;
  /**
   * Custom success component
   */
  successComponent?: React.ReactNode;
  /**
   * Custom styling
   */
  style?: any;
}

/**
 * Layout component for success states
 */
export function SuccessLayout({
  message = 'Successfully signed in!',
  subtitle = 'Redirecting...',
  successComponent,
  style,
}: SuccessLayoutProps) {
  return (
    <View
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='$background'
      {...style}
    >
      {successComponent || (
        <YStack alignItems='center' gap='$4'>
          <Text color='$green10' fontSize='$6' fontWeight='600'>
            {message}
          </Text>
          <Text color='$gray11' fontSize='$4'>
            {subtitle}
          </Text>
        </YStack>
      )}
    </View>
  );
}

/**
 * Props for centered content layout
 */
export interface CenteredLayoutProps {
  /**
   * Title text
   */
  title?: string;
  /**
   * Subtitle text
   */
  subtitle?: string;
  /**
   * Content to display
   */
  children?: React.ReactNode;
  /**
   * Custom styling
   */
  style?: any;
}

/**
 * Layout component for centered content with title and subtitle
 */
export function CenteredLayout({
  title = 'Welcome',
  subtitle = 'Sign in to continue',
  children,
  style,
}: CenteredLayoutProps) {
  return (
    <View flex={1} backgroundColor='$background' {...style}>
      <YStack
        flex={1}
        justifyContent='center'
        alignItems='center'
        paddingHorizontal='$6'
        paddingVertical='$8'
        gap='$6'
      >
        {/* Header */}
        <YStack alignItems='center' gap='$3'>
          <H1 size='$10' color='$gray12' textAlign='center'>
            {title}
          </H1>
          <Paragraph size='$5' color='$gray11' textAlign='center'>
            {subtitle}
          </Paragraph>
        </YStack>

        {/* Content */}
        <View width='100%' maxWidth={400} alignItems='center'>
          {children}
        </View>
      </YStack>
    </View>
  );
}

/**
 * Props for signed out layout
 */
export interface SignedOutLayoutProps {
  /**
   * Custom signed out component
   */
  signedOutComponent?: React.ReactNode;
  /**
   * Custom styling
   */
  style?: any;
}

/**
 * Layout component for signed out state
 */
export function SignedOutLayout({
  signedOutComponent,
  style,
}: SignedOutLayoutProps) {
  return (
    <View
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='$background'
      paddingHorizontal='$6'
      {...style}
    >
      {signedOutComponent || (
        <YStack alignItems='center' gap='$4' maxWidth={400}>
          <H1 size='$8' color='$gray12' textAlign='center'>
            Welcome!
          </H1>
          <Paragraph
            size='$4'
            color='$gray11'
            textAlign='center'
            lineHeight='$6'
          >
            Please sign in to access your account and view your profile
            information.
          </Paragraph>
          <Text
            fontSize='$3'
            color='$gray10'
            textAlign='center'
            lineHeight='$4'
          >
            You'll be able to see your name, email, and account details once
            authenticated.
          </Text>
        </YStack>
      )}
    </View>
  );
}
