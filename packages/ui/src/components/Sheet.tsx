'use client';

import type { ReactNode } from 'react';
import { memo, useMemo } from 'react';
import { useMedia, YStack } from 'tamagui';

export interface SheetProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  contentHeight?: number; // For mobile content-based sizing
  sidebarWidth?: number; // For web split-screen positioning
}

const SheetComponent = ({
  children,
  isOpen = true,
  onClose,
  contentHeight,
  sidebarWidth = 0,
}: SheetProps) => {
  // Use Tamagui's useMedia hook for responsive behavior
  const media = useMedia();
  const isSmallScreen = !media.gtSm; // gtSm is minWidth: 769px, so !gtSm means <= 768px

  // Platform-specific sheet configuration
  const sheetConfig = useMemo(() => {
    const baseConfig = {
      backgroundColor: '$color1',
      zIndex: 400, // Highest level for modal content
    };

    if (isSmallScreen) {
      // Mobile: Bottom sheet with content-based height (max 80% of screen)
      const maxHeight = '80vh';
      const calculatedHeight = contentHeight
        ? `${Math.min(
            contentHeight,
            typeof window !== 'undefined' ? window.innerHeight * 0.8 : 0
          )}px`
        : maxHeight;

      return {
        ...baseConfig,
        bottom: 0,
        left: 0,
        right: 0,
        height: calculatedHeight,
        maxHeight,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      };
    } else {
      // Web: Right-side panel positioned at the right edge
      const width = '40vw'; // Take 40% of viewport width
      const minWidth = 400; // Minimum width for usability
      const maxWidth = 600; // Maximum width to avoid too wide panels

      return {
        ...baseConfig,
        top: 60, // Start below navbar (assuming 60px navbar height)
        right: 0, // Position at right edge
        width: `clamp(${minWidth}px, ${width}, ${maxWidth}px)`,
        height: 'calc(100vh - 60px)', // Full height minus navbar
        borderLeftWidth: 1,
        borderLeftColor: '$color6',
        shadowColor: '$shadowColor',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        // Make it resizable later (future enhancement)
        resize: 'horizontal' as const,
      };
    }
  }, [isSmallScreen, contentHeight, sidebarWidth]);

  // Animation configuration
  const animationConfig = useMemo(() => {
    if (isSmallScreen) {
      // Mobile: slide up from bottom
      return {
        animation: 'bouncy',
        enterStyle: { y: '100%' },
        exitStyle: { y: '100%' },
      };
    } else {
      // Web: slide in from right
      return {
        animation: 'quick',
        enterStyle: { x: '100%' },
        exitStyle: { x: '100%' },
      };
    }
  }, [isSmallScreen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop only for mobile */}
      {isSmallScreen && (
        <YStack
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor='$color8'
          opacity={0.5}
          zIndex={300}
          onPress={onClose}
          animation='quick'
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
      )}

      {/* Sheet container */}
      <YStack
        {...animationConfig}
        position='absolute'
        backgroundColor='$color1'
        zIndex={400}
        style={{
          position: 'fixed', // Override with raw CSS
          ...sheetConfig,
        }}
      >
        {children}
      </YStack>
    </>
  );
};

// Export memoized component for performance
export const Sheet = memo(SheetComponent);
