'use client';

import type { ReactNode } from 'react';
import { memo, useEffect, useMemo, useState } from 'react';
import { YStack } from 'tamagui';

export interface SheetProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const SheetComponent = ({ children, isOpen = true, onClose }: SheetProps) => {
  // SSR-safe responsive behavior
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        const newIsSmallScreen = window.innerWidth < 768;
        setIsSmallScreen(newIsSmallScreen);
      }
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Platform-specific sheet configuration
  const sheetConfig = useMemo(() => {
    const baseConfig = {
      position: 'absolute' as const,
      backgroundColor: '$color1',
      zIndex: 2000,
    };

    if (isSmallScreen) {
      // Mobile: Bottom sheet covering ~80% of screen
      return {
        ...baseConfig,
        bottom: 0,
        left: 0,
        right: 0,
        height: '80vh',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      };
    } else {
      // Web: Side panel from the right
      return {
        ...baseConfig,
        top: 0,
        right: 0,
        width: 480, // Fixed width for side panel
        height: '100vh',
        borderLeftWidth: 1,
        borderLeftColor: '$color6',
        shadowColor: '$shadowColor',
        shadowOffset: { width: -4, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      };
    }
  }, [isSmallScreen]);

  // Animation configuration
  const animationConfig = useMemo(() => {
    if (isSmallScreen) {
      return {
        animation: 'bouncy',
        enterStyle: { y: '100%' },
        exitStyle: { y: '100%' },
      };
    } else {
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
          zIndex={1999}
          onPress={onClose}
          animation='quick'
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
      )}

      {/* Sheet container */}
      <YStack {...sheetConfig} {...animationConfig}>
        {children}
      </YStack>
    </>
  );
};

// Export memoized component for performance
export const Sheet = memo(SheetComponent);
