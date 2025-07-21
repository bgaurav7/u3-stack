import {
  Card as TamaguiCard,
  type CardProps as TamaguiCardProps,
} from '@tamagui/card';
import { forwardRef } from 'react';

export interface CardProps extends TamaguiCardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', children, ...props }, ref) => {
    // Map our custom variants to Tamagui styling
    const getVariantProps = () => {
      switch (variant) {
        case 'outlined':
          return {
            bordered: true,
            elevation: 0,
            backgroundColor: 'transparent',
          };
        case 'filled':
          return {
            bordered: false,
            elevation: 0,
            backgroundColor: '$background',
          };
        default:
          return {
            bordered: false,
            elevation: 2,
            backgroundColor: '$background',
          };
      }
    };

    return (
      <TamaguiCard
        ref={ref}
        padding='$4'
        borderRadius='$4'
        {...getVariantProps()}
        {...props}
      >
        {children}
      </TamaguiCard>
    );
  }
);

Card.displayName = 'Card';
