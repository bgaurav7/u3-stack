import { Button as TamaguiButton } from 'tamagui';
import type { ButtonProps as TamaguiButtonProps } from 'tamagui';

export type ButtonProps = Omit<TamaguiButtonProps, 'variant' | 'size'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
};

// Simplified component for cross-platform compatibility
export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    ...restProps
  } = props || {};

  // Map our custom sizes to Tamagui size tokens
  const tamaguiSize = size === 'small' ? '$2' : size === 'large' ? '$4' : '$3';

  return (
    <TamaguiButton size={tamaguiSize} {...restProps}>
      {children}
    </TamaguiButton>
  );
};

Button.displayName = 'Button';
