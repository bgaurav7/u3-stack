import { forwardRef } from 'react';
import { Button as TamaguiButton, styled } from 'tamagui';
import type { ButtonProps as TamaguiButtonProps } from 'tamagui';

// Use Tamagui's built-in styling system
const StyledButton = styled(TamaguiButton, {
  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue10',
        color: '$white1',
        borderWidth: 0,
      },
      secondary: {
        backgroundColor: '$gray5',
        color: '$gray12',
        borderWidth: 0,
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$blue10',
        borderWidth: 1,
        color: '$blue10',
      },
    },
    size: {
      small: {
        scale: 0.9,
        height: '$2',
        paddingHorizontal: '$2',
      },
      medium: {
        scale: 1,
        height: '$3',
        paddingHorizontal: '$3',
      },
      large: {
        scale: 1.1,
        height: '$4',
        paddingHorizontal: '$4',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export type ButtonProps = Omit<TamaguiButtonProps, 'variant' | 'size'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
