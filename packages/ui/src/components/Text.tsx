import { forwardRef } from 'react';
import { Text as TamaguiText, styled } from 'tamagui';
import type { TextProps } from 'tamagui';

// Use Tamagui's built-in styling system
const StyledText = styled(TamaguiText, {
  variants: {
    variant: {
      heading: {
        fontFamily: '$heading',
        fontSize: '$6',
        lineHeight: '$6',
      },
      body: {
        fontFamily: '$body',
        fontSize: '$4',
        lineHeight: '$4',
      },
      caption: {
        fontFamily: '$body',
        fontSize: '$2',
        lineHeight: '$2',
      },
    },
    weight: {
      normal: { fontWeight: '$3' },
      medium: { fontWeight: '$5' },
      bold: { fontWeight: '$7' },
    },
  } as const,
  defaultVariants: {
    variant: 'body',
    weight: 'normal',
  },
});

export type CustomTextProps = TextProps & {
  variant?: 'heading' | 'body' | 'caption';
  weight?: 'normal' | 'medium' | 'bold';
};

export const Text = forwardRef<HTMLParagraphElement, CustomTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledText ref={ref} {...props}>
        {children}
      </StyledText>
    );
  }
) as React.ForwardRefExoticComponent<
  CustomTextProps & React.RefAttributes<HTMLParagraphElement>
>;

Text.displayName = 'Text';
