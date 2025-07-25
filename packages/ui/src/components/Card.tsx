import type * as React from 'react';
import {
  styled,
  Card as TamaguiCard,
  type CardProps as TamaguiCardProps,
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

// Define the Card component type with subcomponents
type CardComponentType = React.FC<CardProps> & {
  Header: typeof TamaguiCard.Header;
  Footer: typeof TamaguiCard.Footer;
  Background: typeof TamaguiCard.Background;
  displayName?: string;
};

export const Card: CardComponentType = (props: CardProps) => {
  const { children, ...restProps } = props || {};

  return <StyledCard {...restProps}>{children}</StyledCard>;
};

// Expose TamaguiCard subcomponents
Card.Header = TamaguiCard.Header;
Card.Footer = TamaguiCard.Footer;
Card.Background = TamaguiCard.Background;
Card.displayName = 'Card';
