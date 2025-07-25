import { Button as TamaguiButton } from 'tamagui';
import type { ButtonProps as TamaguiButtonProps } from 'tamagui';

// Use Tamagui's built-in theming system directly
export type ButtonProps = TamaguiButtonProps;

// Simplified component for cross-platform compatibility
export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props || {};

  return <TamaguiButton {...restProps}>{children}</TamaguiButton>;
};

Button.displayName = 'Button';
