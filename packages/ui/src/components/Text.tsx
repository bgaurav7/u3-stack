import { Text as TamaguiText } from '@tamagui/core';
import type { TextProps } from '@tamagui/core';
import { forwardRef } from 'react';

export interface CustomTextProps extends Omit<TextProps, 'variant'> {
  variant?: 'heading' | 'body' | 'caption';
  weight?: 'normal' | 'medium' | 'bold';
}

export const Text = forwardRef<HTMLParagraphElement, CustomTextProps>(
  ({ variant = 'body', weight = 'normal', children, ...props }, ref) => {
    // Map our custom variants to appropriate styling
    const getVariantProps = () => {
      switch (variant) {
        case 'heading':
          return {
            fontSize: '$6',
            lineHeight: '$6',
            fontWeight:
              weight === 'normal' ? '$6' : weight === 'medium' ? '$7' : '$8',
          };
        case 'caption':
          return {
            fontSize: '$2',
            lineHeight: '$2',
            fontWeight:
              weight === 'normal' ? '$3' : weight === 'medium' ? '$4' : '$5',
          };
        default:
          return {
            fontSize: '$4',
            lineHeight: '$4',
            fontWeight:
              weight === 'normal' ? '$4' : weight === 'medium' ? '$5' : '$6',
          };
      }
    };

    return (
      <TamaguiText ref={ref} {...getVariantProps()} {...props}>
        {children}
      </TamaguiText>
    );
  }
);

Text.displayName = 'Text';
