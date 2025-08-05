'// This is a generic layout component. Do not add business or use-case-specific logic here.';
'use client';

import { memo, useCallback, useMemo } from 'react';
import { ScrollView, useMedia, YStack } from 'tamagui';
import { Sheet } from '../components/Sheet';
import { SheetHeader } from '../components/SheetHeader';

export interface SheetLayoutProps {
  onClose?: () => void;
  isOpen?: boolean;
  content?: React.ReactNode;
  headerTitle?: string;
}

const SheetLayoutComponent = ({
  onClose,
  isOpen = true,
  content,
  headerTitle,
}: SheetLayoutProps) => {
  // Use Tamagui's useMedia hook for responsive behavior
  const media = useMedia();
  const isSmallScreen = !media.gtSm; // gtSm is minWidth: 769px, so !gtSm means <= 768px

  // Safe close handler - memoized to prevent unnecessary re-renders
  const handleSafeClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Render sheet content
  const renderSheetContent = useMemo(() => {
    return (
      <YStack flex={1} backgroundColor='$background'>
        <SheetHeader
          title={headerTitle || ''}
          onClose={handleSafeClose}
          isSmallScreen={isSmallScreen}
        />
        <ScrollView
          flex={1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {content}
        </ScrollView>
      </YStack>
    );
  }, [handleSafeClose, isSmallScreen, content, headerTitle]);

  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      {renderSheetContent}
    </Sheet>
  );
};

// Export memoized component for performance
export const SheetLayout = memo(SheetLayoutComponent);
