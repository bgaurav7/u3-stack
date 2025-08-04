'use client';

import { X } from '@tamagui/lucide-icons';
import { memo } from 'react';
import { Button, H2, XStack } from 'tamagui';

export interface SheetHeaderProps {
  title: string;
  onClose?: () => void;
  isSmallScreen?: boolean;
}

const SheetHeaderComponent = ({ title, onClose }: SheetHeaderProps) => {
  return (
    <XStack
      height={60}
      alignItems='center'
      justifyContent='flex-start'
      paddingHorizontal='$4'
      borderBottomWidth={1}
      borderBottomColor='$color6'
      backgroundColor='$color1'
    >
      {/* Close Button and Title grouped together on the left */}
      <XStack alignItems='center' gap='$3'>
        {/* Close Button - positioned before the title */}
        <Button
          size='$3'
          circular
          backgroundColor='transparent'
          hoverStyle={{ backgroundColor: '$color4' }}
          pressStyle={{ backgroundColor: '$color5' }}
          icon={X}
          onPress={onClose}
        />

        <H2 size='$6' color='$color12' fontWeight='600'>
          {title}
        </H2>
      </XStack>
    </XStack>
  );
};

// Export memoized component for performance
export const SheetHeader = memo(SheetHeaderComponent);
