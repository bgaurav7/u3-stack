import { Button as TamaguiButton } from '@tamagui/button';
import type { ButtonProps as TamaguiButtonProps } from '@tamagui/button';
import { forwardRef } from 'react';

export interface ButtonProps
  extends Omit<TamaguiButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', children, ...props }, ref) => {
    // Map our custom sizes to Tamagui sizes
    const tamaguiSize =
      size === 'small' ? '$2' : size === 'large' ? '$4' : '$3';

    // Apply variant styling through color props
    const getVariantProps = () => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: '$blue10',
            color: '$white1',
            borderWidth: 0,
          };
        case 'secondary':
          return {
            backgroundColor: '$gray5',
            color: '$gray12',
            borderWidth: 0,
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            borderColor: '$blue10',
            borderWidth: 1,
            color: '$blue10',
          };
        default:
          return {};
      }
    };

    return (
      <TamaguiButton
        ref={ref}
        size={tamaguiSize}
        {...getVariantProps()}
        {...props}
      >
        {children}
      </TamaguiButton>
    );
  }
);

Button.displayName = 'Button';
