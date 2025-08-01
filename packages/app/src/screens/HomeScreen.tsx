import type React from 'react';
import { Button, H1, Paragraph, YStack } from 'tamagui';

/**
 * Props for the HomeScreen component
 */
export interface HomeScreenProps {
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
 * Cross-platform public landing page component
 * Shows welcome content and sign-in call-to-action
 * Uses Tamagui for cross-platform compatibility
 */
export function HomeScreen({
  title = 'Welcome to U3-Stack',
  subtitle = 'A modern, type-safe, scalable monorepo stack for Android, iOS, and Web applications.',
  buttonText = 'Get Started - Sign In',
  onSignInClick,
  style,
}: HomeScreenProps): React.ReactElement {
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
      <H1 size='$10' color='$gray12' textAlign='center' maxWidth='$20'>
        {title}
      </H1>

      <Paragraph
        size='$5'
        color='$gray11'
        textAlign='center'
        maxWidth='$18'
        lineHeight='$6'
      >
        {subtitle}
      </Paragraph>

      <Button
        size='$5'
        backgroundColor='$blue10'
        color='white'
        fontWeight='600'
        paddingHorizontal='$8'
        paddingVertical='$4'
        borderRadius='$4'
        pressStyle={{
          backgroundColor: '$blue11',
          transform: [{ translateY: -1 }],
        }}
        hoverStyle={{
          backgroundColor: '$blue11',
          transform: [{ translateY: -1 }],
        }}
        onPress={onSignInClick}
      >
        {buttonText}
      </Button>
    </YStack>
  );
}
