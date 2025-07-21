import { forwardRef } from 'react';
import { Button as TamaguiButton } from 'tamagui';
import type { ButtonProps as TamaguiButtonProps } from 'tamagui';

export type ButtonProps = Omit<TamaguiButtonProps, 'variant' | 'size'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'medium', ...props }, ref) => {
    // Map our custom variants to Tamagui props
    const getVariantProps = () => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: '#007AFF',
            color: 'white',
          };
        case 'secondary':
          return {
            backgroundColor: '#F2F2F7',
            color: '#1C1C1E',
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            borderColor: '#007AFF',
            borderWidth: 1,
            color: '#007AFF',
          };
        default:
          return {};
      }
    };

    const getSizeProps = () => {
      switch (size) {
        case 'small':
          return {
            size: '$2',
          };
        case 'medium':
          return {
            size: '$3',
          };
        case 'large':
          return {
            size: '$4',
          };
        default:
          return {};
      }
    };

    return (
      <TamaguiButton
        ref={ref}
        {...getSizeProps()}
        {...getVariantProps()}
        {...props}
      >
        {children}
      </TamaguiButton>
    );
  }
);

Button.displayName = 'Button';
