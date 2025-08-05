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
      alignItems='center'
      justifyContent='flex-start'
      paddingHorizontal='$4'
      paddingVertical='$3'
      borderBottomWidth={1}
      borderBottomColor='$borderColor'
      backgroundColor='$color1'
      minHeight={60}
      gap='$3'
    >
      {onClose && (
        <Button
          size='$3'
          circular
          icon={X}
          aria-label='Close'
          onPress={onClose}
          backgroundColor='$color2'
          hoverStyle={{ backgroundColor: '$color3' }}
          pressStyle={{ backgroundColor: '$color4' }}
        />
      )}
      <H2 size='$7' fontWeight='600' color='$color12'>
        {title}
      </H2>
    </XStack>
  );
};

// Export memoized component for performance
export const SheetHeader = memo(SheetHeaderComponent);
