'use client';

import { H1, Paragraph, Theme, YStack } from 'tamagui';

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
        <Theme name='accent'>
          <YStack
            width={200}
            height={60}
            backgroundColor='$background'
            borderRadius='$4'
            justifyContent='center'
            alignItems='center'
            marginBottom='$2'
          >
            <H1 color='$color' size='$6'>
              U3 Stack
            </H1>
          </YStack>
        </Theme>
      )}
      <H1 size='$8' color='$color' textAlign='center' fontWeight='600'>
        {title}
      </H1>
      <Paragraph size='$4' color='$color11' textAlign='center' lineHeight='$5'>
        {subtitle}
      </Paragraph>
    </YStack>
  );
}
