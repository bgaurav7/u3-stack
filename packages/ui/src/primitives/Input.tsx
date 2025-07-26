import type { InputProps as TamaguiInputProps } from 'tamagui';
import { Input as TamaguiInput } from 'tamagui';

// Enhanced props with common input states
export interface InputProps extends TamaguiInputProps {
  /** Input state for visual feedback */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** Helper text to display below input */
  helperText?: string;
  /** Whether the input is required */
  required?: boolean;
}

// Enhanced component with better accessibility and state management
export const Input = (props: InputProps) => {
  const { state = 'default', helperText, required, ...restProps } = props;

  // Apply state-based styling
  const getStateProps = () => {
    switch (state) {
      case 'error':
        return {
          borderColor: '$red10',
          focusStyle: { borderColor: '$red10' },
        };
      case 'success':
        return {
          borderColor: '$green10',
          focusStyle: { borderColor: '$green10' },
        };
      case 'warning':
        return {
          borderColor: '$yellow10',
          focusStyle: { borderColor: '$yellow10' },
        };
      default:
        return {};
    }
  };

  return (
    <TamaguiInput
      {...restProps}
      {...getStateProps()}
      aria-required={required}
      aria-invalid={state === 'error'}
      aria-describedby={helperText ? `${restProps.id}-helper` : undefined}
    />
  );
};

Input.displayName = 'Input';
