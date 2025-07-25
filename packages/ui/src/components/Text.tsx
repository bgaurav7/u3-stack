// No React import needed for this simplified component
import {
  Text as TamaguiText,
  type TextProps as TamaguiTextProps,
} from 'tamagui';

// Export Tamagui's TextProps directly
export type TextProps = TamaguiTextProps;

// Simplified component for cross-platform compatibility
export const Text = (props: TextProps) => {
  const { children, ...restProps } = props || {};
  return <TamaguiText {...restProps}>{children}</TamaguiText>;
};

Text.displayName = 'Text';
