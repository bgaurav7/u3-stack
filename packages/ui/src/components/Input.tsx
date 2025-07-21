import { forwardRef } from 'react';
import type { ComponentProps, ForwardRefRenderFunction } from 'react';
import type { TextInput } from 'react-native';
import { Input as TamaguiInput, styled } from 'tamagui';

// Use Tamagui's built-in styling system
const StyledInput = styled(TamaguiInput, {
  size: '$4',
  borderRadius: '$2',
  padding: '$3',

  variants: {
    variant: {
      default: {
        borderWidth: 1,
        backgroundColor: '$background',
      },
      outlined: {
        borderWidth: 1,
        backgroundColor: 'transparent',
      },
      filled: {
        borderWidth: 0,
        backgroundColor: '$backgroundHover',
      },
    },
    state: {
      default: {
        borderColor: '$borderColor',
        focusStyle: {
          borderColor: '$blue10',
        },
      },
      error: {
        borderColor: '$red10',
        focusStyle: {
          borderColor: '$red10',
        },
      },
      success: {
        borderColor: '$green10',
        focusStyle: {
          borderColor: '$green10',
        },
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
    state: 'default',
  },
});

export type CustomInputProps = Omit<
  ComponentProps<typeof TamaguiInput>,
  'variant'
> & {
  variant?: 'default' | 'outlined' | 'filled';
  state?: 'default' | 'error' | 'success';
};

const InputComponent: ForwardRefRenderFunction<TextInput, CustomInputProps> = (
  { ...props },
  ref
) => {
  return <StyledInput ref={ref} {...props} />;
};

export const Input = forwardRef(InputComponent);
Input.displayName = 'Input';
