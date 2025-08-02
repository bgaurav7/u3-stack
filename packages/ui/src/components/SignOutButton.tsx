import { Button, Theme } from 'tamagui';

/**
 * Props for the SignOutButton component
 */
export interface SignOutButtonProps {
  /**
   * Loading state
   */
  isLoading?: boolean;
  /**
   * Sign out handler
   */
  onSignOut: () => void;
  /**
   * Button text
   */
  text?: string;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
  /**
   * Button variant
   */
  variant?: 'primary' | 'destructive';
}

/**
 * Sign Out Button UI Component
 */
export function SignOutButton({
  isLoading = false,
  onSignOut,
  text = 'Sign Out',
  style,
  variant = 'destructive',
}: SignOutButtonProps) {
  const themeName = variant === 'destructive' ? 'error' : 'accent';

  return (
    <Theme name={themeName}>
      <Button
        size='$4'
        backgroundColor='$background'
        color='$color'
        fontWeight='600'
        disabled={isLoading}
        onPress={onSignOut}
        {...style}
      >
        {isLoading ? 'Signing Out...' : text}
      </Button>
    </Theme>
  );
}
