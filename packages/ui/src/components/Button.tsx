import { forwardRef } from 'react';
import type { ForwardRefRenderFunction } from 'react';
import { Button as TamaguiButton } from 'tamagui';
import type { ButtonProps as TamaguiButtonProps } from 'tamagui';

export type ButtonProps = Omit<TamaguiButtonProps, 'variant' | 'size'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
};

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, variant = 'primary', size = 'medium', ...props }, ref) => {
  // Map our custom sizes to Tamagui size tokens
  const tamaguiSize = size === 'small' ? '$2' : size === 'large' ? '$4' : '$3';

  return (
    <TamaguiButton ref={ref} size={tamaguiSize} {...props}>
      {children}
    </TamaguiButton>
  );
};

export const Button = forwardRef(ButtonComponent);
Button.displayName = 'Button';
