import { Input as TamaguiInput } from 'tamagui';
import type { InputProps as TamaguiInputProps } from 'tamagui';

// Use Tamagui's built-in theming system directly
export type InputProps = TamaguiInputProps;

// Simplified component for cross-platform compatibility
export const Input = (props: InputProps) => {
  const { children, ...restProps } = props || {};

  return <TamaguiInput {...restProps} />;
};

Input.displayName = 'Input';
