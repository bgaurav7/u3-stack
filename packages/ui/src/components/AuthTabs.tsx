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
      backgroundColor='$color3'
      borderRadius='$4'
      padding='$1'
      gap='$1'
    >
      <Button
        flex={1}
        size='$3'
        backgroundColor={mode === 'signin' ? '$background' : 'transparent'}
        color={mode === 'signin' ? '$color' : '$color11'}
        fontWeight={mode === 'signin' ? '600' : '400'}
        onPress={() => onModeChange('signin')}
        disabled={disabled}
      >
        Sign In
      </Button>
      <Button
        flex={1}
        size='$3'
        backgroundColor={mode === 'signup' ? '$background' : 'transparent'}
        color={mode === 'signup' ? '$color' : '$color11'}
        fontWeight={mode === 'signup' ? '600' : '400'}
        onPress={() => onModeChange('signup')}
        disabled={disabled}
      >
        Sign Up
      </Button>
    </XStack>
  );
}
