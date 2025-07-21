import { forwardRef } from 'react';
import {
  Card as TamaguiCard,
  type CardProps as TamaguiCardProps,
  styled,
} from 'tamagui';

// Use Tamagui's built-in styling system
const StyledCard = styled(TamaguiCard, {
  padding: '$4',
  borderRadius: '$4',

  variants: {
    variant: {
      elevated: {
        bordered: false,
        elevation: '$2',
        backgroundColor: '$background',
      },
      outlined: {
        bordered: true,
        elevation: 0,
        backgroundColor: 'transparent',
      },
      filled: {
        bordered: false,
        elevation: 0,
        backgroundColor: '$background',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'elevated',
  },
});

export type CardProps = Omit<TamaguiCardProps, 'variant'> & {
  variant?: 'elevated' | 'outlined' | 'filled';
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledCard ref={ref} {...props}>
        {children}
      </StyledCard>
    );
  }
) as React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
>;

Card.displayName = 'Card';
