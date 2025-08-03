'use client';

import {
  Bell,
  CheckSquare,
  HelpCircle,
  Home,
  Settings,
} from '@tamagui/lucide-icons';
import { memo, useCallback, useMemo } from 'react';
import { Button, ScrollView, Separator, Text, XStack, YStack } from 'tamagui';
import { UserProfile, type UserProfileUser } from './UserProfile';

/**
 * User data interface for the sidebar profile section
 */
export interface SideBarUser extends UserProfileUser {}

export interface SideBarProps {
  sidebarMode: 'hidden' | 'collapsed' | 'expanded';
  isSmallScreen: boolean;
  sidebarWidth: number;
  onHideSidebar: () => void;
  onNavigate?: (href: string) => void; // Add navigation callback
  user?: SideBarUser | null; // User data for profile section
  onSignOut?: () => void; // Sign out handler
}

// Move navigation items outside component to prevent recreation
const navigationItems = [
  { id: 'home', label: 'Dashboard', icon: Home, href: '/app' },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare, href: '/app/tasks' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/app/settings' },
];

// Memoized button styles for expanded sidebar
const buttonStyles = {
  size: '$4' as const,
  justifyContent: 'flex-start' as const,
  backgroundColor: 'transparent',
  hoverStyle: { backgroundColor: '$color4' },
  pressStyle: { backgroundColor: '$color5' },
};

// Memoized button styles for collapsed sidebar (icon only)
const collapsedButtonStyles = {
  size: '$5' as const, // Larger size for better icon visibility
  justifyContent: 'center' as const,
  backgroundColor: 'transparent',
  hoverStyle: { backgroundColor: '$color4' },
  pressStyle: { backgroundColor: '$color5' },
  width: 48,
  height: 48,
  padding: 0, // Remove padding for centered icon
};

const SideBarComponent = ({
  sidebarMode,
  isSmallScreen,
  sidebarWidth,
  onHideSidebar,
  onNavigate,
  user,
  onSignOut,
}: SideBarProps) => {
  // Memoize navigation item click handler
  const handleNavItemClick = useCallback(
    (_itemId: string, href?: string) => {
      // Handle navigation immediately
      if (onNavigate && href) {
        onNavigate(href);
      }

      // Close sidebar only on small screens (mobile) after navigation
      if (isSmallScreen) {
        onHideSidebar();
      }
    },
    [isSmallScreen, onHideSidebar, onNavigate]
  );

  // Determine if sidebar is in collapsed or expanded mode
  const isOpen = sidebarMode === 'expanded';
  const isCollapsed = sidebarMode === 'collapsed';

  // Memoize sidebar container styles with simplified animations
  const sidebarStyles = useMemo(
    () => ({
      width: sidebarWidth,
      height: '100vh', // Full viewport height - extends to top
      backgroundColor: '$color2',
      borderRightWidth: isSmallScreen ? 0 : 1,
      borderRightColor: '$color6',
      position: 'absolute' as const,
      left: 0,
      top: 0, // Start from the very top
      zIndex: 200, // Above NavBar (100) but below Sheet (400)
      // Add fixed positioning for web
      ...(typeof window !== 'undefined' && { position: 'fixed' as any }),
      // Optimize shadow rendering for small screens
      shadowColor: isSmallScreen ? '$shadowColor' : undefined,
      shadowOffset: isSmallScreen ? { width: 2, height: 0 } : undefined,
      shadowOpacity: isSmallScreen ? 0.1 : undefined,
      shadowRadius: isSmallScreen ? 8 : undefined,
      // Simplified animation properties - no conflicting animations
      ...(isSmallScreen && {
        x: isOpen ? 0 : -sidebarWidth,
        // Remove enter/exit styles that might conflict
      }),
    }),
    [isSmallScreen, isOpen, sidebarWidth]
  );

  // Memoize navigation items to prevent recreation
  const navigationButtons = useMemo(
    () =>
      navigationItems.map(item => (
        <Button
          key={item.id}
          {...(isCollapsed && !isSmallScreen
            ? collapsedButtonStyles
            : buttonStyles)}
          icon={isCollapsed && !isSmallScreen ? item.icon : undefined}
          iconAfter={!isCollapsed || isSmallScreen ? item.icon : undefined}
          onPress={() => handleNavItemClick(item.id, item.href)}
        >
          {(!isCollapsed || isSmallScreen) && (
            <Text color='$color11' fontSize='$4'>
              {item.label}
            </Text>
          )}
        </Button>
      )),
    [handleNavItemClick, isCollapsed, isSmallScreen]
  );

  // Memoize user profile content
  const bottomSectionContent = useMemo(
    () => (
      <YStack
        padding={isCollapsed && !isSmallScreen ? '$2' : '$4'}
        alignItems={isCollapsed && !isSmallScreen ? 'center' : 'stretch'}
      >
        <Separator marginBottom='$4' backgroundColor='$color6' />

        {/* User Profile Section */}
        {user && (
          <YStack gap='$3'>
            <UserProfile
              user={user}
              onSignOut={onSignOut}
              isCollapsed={isCollapsed && !isSmallScreen}
              isSmallScreen={isSmallScreen}
            />
          </YStack>
        )}
      </YStack>
    ),
    [isCollapsed, isSmallScreen, user, onSignOut]
  );

  return (
    <YStack {...sidebarStyles}>
      {/* Header Section */}
      <XStack
        height={60}
        alignItems='center'
        justifyContent='center'
        paddingHorizontal={isCollapsed && !isSmallScreen ? '$2' : '$4'}
        borderBottomWidth={1}
        borderBottomColor='$color6'
        backgroundColor='$color2'
      >
        {isCollapsed && !isSmallScreen ? (
          // Collapsed state: show only icon
          <CheckSquare size='$1.5' color='$color12' />
        ) : (
          // Expanded state: show icon + text
          <XStack alignItems='center' gap='$2'>
            <CheckSquare size='$1.5' color='$color12' />
            <Text fontSize='$5' fontWeight='600' color='$color12'>
              ToDo
            </Text>
          </XStack>
        )}
      </XStack>

      {/* Scrollable Content Area */}
      <YStack flex={1}>
        <ScrollView
          flex={1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          {/* Navigation Items - Scrollable */}
          <YStack
            padding={isCollapsed && !isSmallScreen ? '$2' : '$4'}
            gap='$2'
            alignItems={isCollapsed && !isSmallScreen ? 'center' : 'stretch'}
          >
            {navigationButtons}

            {/* Additional navigation items */}
            <Button
              {...(isCollapsed && !isSmallScreen
                ? collapsedButtonStyles
                : buttonStyles)}
              icon={isCollapsed && !isSmallScreen ? Bell : undefined}
              iconAfter={!isCollapsed || isSmallScreen ? Bell : undefined}
              onPress={() =>
                handleNavItemClick('notifications', '/app/notifications')
              }
            >
              {(!isCollapsed || isSmallScreen) && (
                <Text color='$color11' fontSize='$4'>
                  Notifications
                </Text>
              )}
            </Button>
            <Button
              {...(isCollapsed && !isSmallScreen
                ? collapsedButtonStyles
                : buttonStyles)}
              icon={isCollapsed && !isSmallScreen ? HelpCircle : undefined}
              iconAfter={!isCollapsed || isSmallScreen ? HelpCircle : undefined}
              onPress={() => handleNavItemClick('help', '/app/help')}
            >
              {(!isCollapsed || isSmallScreen) && (
                <Text color='$color11' fontSize='$4'>
                  Help & Support
                </Text>
              )}
            </Button>
          </YStack>

          {/* Fixed Bottom Section - User Profile */}
          {bottomSectionContent}
        </ScrollView>
      </YStack>
    </YStack>
  );
};

// Export memoized component - context handles optimization
export const SideBar = memo(SideBarComponent);
