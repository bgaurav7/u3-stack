'use client';

import {
  Bell,
  Menu,
  Moon,
  MoreHorizontal,
  Sun,
  User,
} from '@tamagui/lucide-icons';
import { memo, useMemo } from 'react';
import { Button, Text, XStack } from 'tamagui';

export interface NavBarProps {
  isSmallScreen: boolean;
  sidebarWidth: number;
  onToggleSidebar: () => void;
  currentTheme?: 'light' | 'dark';
  onThemeToggle?: () => void;
}

// Memoized button styles to prevent recreation on each render
const buttonStyles = {
  size: '$3' as const,
  circular: true,
  backgroundColor: 'transparent',
  hoverStyle: { backgroundColor: '$color4' },
  pressStyle: { backgroundColor: '$color5' },
};

const NavBarComponent = ({
  isSmallScreen,
  sidebarWidth,
  onToggleSidebar,
  currentTheme = 'dark',
  onThemeToggle,
}: NavBarProps) => {
  // Calculate navbar margin based on sidebar state
  const navBarMargin = useMemo(() => {
    const margin = isSmallScreen ? 0 : sidebarWidth;
    return margin;
  }, [isSmallScreen, sidebarWidth]);

  // Memoize left side content - hamburger menu now shown on all screen sizes
  const leftContent = useMemo(
    () => (
      <XStack alignItems='center' gap='$3'>
        <Button {...buttonStyles} icon={Menu} onPress={onToggleSidebar} />

        <Text
          fontSize='$6'
          fontWeight='bold'
          color='$color12'
          userSelect='none'
        >
          U³
        </Text>
      </XStack>
    ),
    [onToggleSidebar]
  );

  // Memoize right side content based on screen size
  const rightContent = useMemo(
    () => (
      <XStack alignItems='center' gap='$2'>
        {/* Theme Toggle */}
        <Button
          {...buttonStyles}
          icon={currentTheme === 'dark' ? Sun : Moon}
          onPress={onThemeToggle}
        />

        {isSmallScreen ? (
          <Button {...buttonStyles} icon={MoreHorizontal} />
        ) : (
          <>
            <Button {...buttonStyles} icon={Bell} />
            <Button {...buttonStyles} icon={User} />
          </>
        )}
      </XStack>
    ),
    [isSmallScreen, currentTheme, onThemeToggle]
  );

  return (
    <XStack
      height={60}
      backgroundColor='$color1'
      borderBottomWidth={1}
      borderBottomColor='$color6'
      alignItems='center'
      justifyContent='space-between'
      paddingHorizontal='$4'
      marginLeft={navBarMargin}
      zIndex={1000}
      animation='quick'
      animateOnly={['marginLeft']}
    >
      {leftContent}
      {rightContent}
    </XStack>
  );
};

// Export memoized component - context handles optimization
export const NavBar = memo(NavBarComponent);
