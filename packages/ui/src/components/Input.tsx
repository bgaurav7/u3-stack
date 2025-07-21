import { Input as TamaguiInput } from '@tamagui/input';
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';

export interface CustomInputProps extends ComponentProps<typeof TamaguiInput> {
  variant?: 'default' | 'outlined' | 'filled';
  state?: 'default' | 'error' | 'success';
}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ variant = 'default', state = 'default', ...props }, ref) => {
    // Map our custom variants and states to Tamagui styling
    const getVariantProps = () => {
      const baseProps = {
        size: '$4',
        borderRadius: '$2',
        padding: '$3',
      };

      const variantProps = (() => {
        switch (variant) {
          case 'outlined':
            return {
              borderWidth: 1,
              backgroundColor: 'transparent',
            };
          case 'filled':
            return {
              borderWidth: 0,
              backgroundColor: '$backgroundHover',
            };
          default:
            return {
              borderWidth: 1,
              backgroundColor: '$background',
            };
        }
      })();

      const stateProps = (() => {
        switch (state) {
          case 'error':
            return {
              borderColor: '$red10',
              focusStyle: {
                borderColor: '$red10',
              },
            };
          case 'success':
            return {
              borderColor: '$green10',
              focusStyle: {
                borderColor: '$green10',
              },
            };
          default:
            return {
              borderColor: '$borderColor',
              focusStyle: {
                borderColor: '$blue10',
              },
            };
        }
      })();

      return { ...baseProps, ...variantProps, ...stateProps };
    };

    return <TamaguiInput ref={ref} {...getVariantProps()} {...props} />;
  }
);

Input.displayName = 'Input';
