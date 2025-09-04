'use client';

import { XStack } from 'tamagui';
import { Button } from '../primitives';

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
        size='sm'
        variant={mode === 'signin' ? 'primary' : 'ghost'}
        onPress={() => onModeChange('signin')}
        disabled={disabled}
      >
        Sign In
      </Button>
      <Button
        flex={1}
        size='sm'
        variant={mode === 'signup' ? 'primary' : 'ghost'}
        onPress={() => onModeChange('signup')}
        disabled={disabled}
      >
        Sign Up
      </Button>
    </XStack>
  );
}
