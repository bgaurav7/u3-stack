'// This is a generic layout component. Do not add business or use-case-specific logic here.';
'use client';

import { X } from '@tamagui/lucide-icons';
import { memo, useCallback } from 'react';
import { Button, H2, ScrollView, XStack, YStack } from 'tamagui';

export interface SheetLayoutProps {
  onClose?: () => void;
  content?: React.ReactNode;
  headerTitle?: string;
}

const SheetLayoutComponent = ({
  onClose,
  content,
  headerTitle,
}: SheetLayoutProps) => {
  // Safe close handler - memoized to prevent unnecessary re-renders
  const handleSafeClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Only render header and content, no Sheet wrapper
  return (
    <YStack flex={1} backgroundColor='$background'>
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
            onPress={handleSafeClose}
            backgroundColor='$color2'
            hoverStyle={{ backgroundColor: '$color3' }}
            pressStyle={{ backgroundColor: '$color4' }}
          />
        )}
        <H2 size='$7' fontWeight='600' color='$color12'>
          {headerTitle}
        </H2>
      </XStack>
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {content}
      </ScrollView>
    </YStack>
  );
};

// Export memoized component for performance
export const SheetLayout = memo(SheetLayoutComponent);
