import type React from 'react';
import { H1, Paragraph, YStack } from 'tamagui';
import { Button } from '../primitives';

/**
 * Props for the HomeLayout UI component
 */
export interface HomeLayoutProps {
  /**
   * Title text for the landing page
   */
  title?: string;
  /**
   * Subtitle text for the landing page
   */
  subtitle?: string;
  /**
   * Custom button text
   */
  buttonText?: string;
  /**
   * Callback when sign-in button is clicked
   */
  onSignInClick?: () => void;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
}

/**
 * UI layout component for the home/landing page
 * Shows welcome content and sign-in call-to-action
 * Uses Tamagui for cross-platform compatibility
 */
export function HomeLayout({
  title = 'Welcome to U3-Stack',
  subtitle = 'A modern, type-safe, scalable monorepo stack for Android, iOS, and Web applications.',
  buttonText = 'Get Started - Sign In',
  onSignInClick,
  style,
}: HomeLayoutProps): React.ReactElement {
  return (
    <YStack
      flex={1}
      justifyContent='center'
      alignItems='center'
      paddingHorizontal='$6'
      paddingVertical='$8'
      gap='$6'
      style={style}
    >
      <H1 size='$10' color='$color' textAlign='center' maxWidth='$20'>
        {title}
      </H1>

      <Paragraph
        size='$5'
        color='$color11'
        textAlign='center'
        maxWidth='$18'
        lineHeight='$6'
      >
        {subtitle}
      </Paragraph>

      <Button
        size='md'
        backgroundColor='$primary'
        color='$primaryFg'
        onPress={onSignInClick}
      >
        {buttonText}
      </Button>
    </YStack>
  );
}
