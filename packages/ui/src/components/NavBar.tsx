'use client';

import { Github, Menu, Moon, MoreHorizontal, Sun } from '@tamagui/lucide-icons';
import { memo, useMemo } from 'react';
import { Text, XStack } from 'tamagui';
import { Button } from '../primitives';

export interface NavBarProps {
  isSmallScreen: boolean;
  onToggleSidebar: () => void;
  currentTheme?: 'light' | 'dark';
  onThemeToggle?: () => void;
}

// Memoized button styles to prevent recreation on each render
const buttonStyles = {
  size: 'sm' as const,
  backgroundColor: 'transparent' as const,
  color: '$foreground' as const,
};

const NavBarComponent = ({
  isSmallScreen,
  onToggleSidebar,
  currentTheme = 'dark',
  onThemeToggle,
}: NavBarProps) => {
  // No longer need to calculate margin for NavBar; handled by ContentLayout

  // Memoize left side content - hamburger menu now shown on all screen sizes
  const leftContent = useMemo(
    () => (
      <XStack alignItems='center' gap='$3'>
        <Button {...buttonStyles} onPress={onToggleSidebar}>
          <Menu size={16} />
        </Button>

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
        <Button {...buttonStyles} onPress={onThemeToggle}>
          {currentTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </Button>

        {/* GitHub Link */}
        <Button
          {...buttonStyles}
          onPress={() =>
            window.open(
              'https://github.com/bgaurav7/u3-stack',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          <Github size={16} />
        </Button>

        {isSmallScreen && (
          <Button {...buttonStyles}>
            <MoreHorizontal size={16} />
          </Button>
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
      zIndex={100}
    >
      {leftContent}
      {rightContent}
    </XStack>
  );
};

// Export memoized component - context handles optimization
export const NavBar = memo(NavBarComponent);
