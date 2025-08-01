'use client';

import { H1, Paragraph, YStack } from 'tamagui';

export interface LogoHeaderProps {
  /**
   * Main title text
   */
  title?: string;
  /**
   * Subtitle text
   */
  subtitle?: string;
  /**
   * Show logo (placeholder for now)
   */
  showLogo?: boolean;
}

/**
 * Header component with optional logo and welcome message
 */
export function LogoHeader({
  title = 'Welcome',
  subtitle = 'Sign in to your account',
  showLogo = false,
}: LogoHeaderProps) {
  return (
    <YStack alignItems='center' gap='$3'>
      {showLogo && (
        <YStack
          width={60}
          height={60}
          backgroundColor='$blue10'
          borderRadius='$4'
          justifyContent='center'
          alignItems='center'
          marginBottom='$2'
        >
          <H1 color='white' size='$6'>
            U3
          </H1>
        </YStack>
      )}
      <H1 size='$8' color='$gray12' textAlign='center' fontWeight='600'>
        {title}
      </H1>
      <Paragraph size='$4' color='$gray11' textAlign='center' lineHeight='$5'>
        {subtitle}
      </Paragraph>
    </YStack>
  );
}
