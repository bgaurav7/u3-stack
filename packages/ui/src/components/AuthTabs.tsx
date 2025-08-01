'use client';

import { Button, XStack } from 'tamagui';

export type AuthMode = 'signin' | 'signup';

export interface AuthTabsProps {
  /**
   * Current auth mode
   */
  mode: AuthMode;
  /**
   * Callback when mode changes
   */
  onModeChange: (mode: AuthMode) => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * Tab switcher component for Sign In / Sign Up modes
 */
export function AuthTabs({
  mode,
  onModeChange,
  disabled = false,
}: AuthTabsProps) {
  return (
    <XStack
      width='100%'
      backgroundColor='$gray3'
      borderRadius='$4'
      padding='$1'
      gap='$1'
    >
      <Button
        flex={1}
        size='$3'
        backgroundColor={mode === 'signin' ? '$background' : 'transparent'}
        color={mode === 'signin' ? '$gray12' : '$gray11'}
        borderRadius='$3'
        borderWidth={mode === 'signin' ? 1 : 0}
        borderColor={mode === 'signin' ? '$gray7' : 'transparent'}
        fontWeight={mode === 'signin' ? '600' : '400'}
        onPress={() => onModeChange('signin')}
        disabled={disabled}
        pressStyle={{
          backgroundColor: mode === 'signin' ? '$gray2' : '$gray4',
        }}
        hoverStyle={{
          backgroundColor: mode === 'signin' ? '$gray2' : '$gray4',
        }}
      >
        Sign In
      </Button>
      <Button
        flex={1}
        size='$3'
        backgroundColor={mode === 'signup' ? '$background' : 'transparent'}
        color={mode === 'signup' ? '$gray12' : '$gray11'}
        borderRadius='$3'
        borderWidth={mode === 'signup' ? 1 : 0}
        borderColor={mode === 'signup' ? '$gray7' : 'transparent'}
        fontWeight={mode === 'signup' ? '600' : '400'}
        onPress={() => onModeChange('signup')}
        disabled={disabled}
        pressStyle={{
          backgroundColor: mode === 'signup' ? '$gray2' : '$gray4',
        }}
        hoverStyle={{
          backgroundColor: mode === 'signup' ? '$gray2' : '$gray4',
        }}
      >
        Sign Up
      </Button>
    </XStack>
  );
}
