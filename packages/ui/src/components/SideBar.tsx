'use client';

import {
  Bell,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Home,
  Settings,
  X,
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
  onToggleCollapse: () => void;
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

const closeButtonStyles = {
  size: '$3' as const,
  circular: true,
  backgroundColor: 'transparent',
  hoverStyle: { backgroundColor: '$color4' },
  pressStyle: { backgroundColor: '$color5' },
};

const SideBarComponent = ({
  sidebarMode,
  isSmallScreen,
  sidebarWidth,
  onHideSidebar,
  onToggleCollapse,
  onNavigate,
  user,
  onSignOut,
}: SideBarProps) => {
  // Memoize navigation item click handler
  const handleNavItemClick = useCallback(
    (itemId: string, href?: string) => {
      // Close sidebar on small screens first
      if (isSmallScreen) {
        onHideSidebar();
      }

      // Handle navigation if callback and href are provided
      if (onNavigate && href) {
        // Small delay to allow sidebar close animation to start
        if (isSmallScreen) {
          setTimeout(() => onNavigate(href), 100);
        } else {
          onNavigate(href);
        }
      } else {
        // Fallback: log navigation attempt for debugging
        console.log(
          `Navigation requested for ${itemId}${href ? ` to ${href}` : ''}`
        );
      }
    },
    [isSmallScreen, onHideSidebar, onNavigate]
  );

  // Determine if sidebar is in collapsed mode
  const isCollapsed = sidebarMode === 'collapsed';
  const isOpen = sidebarMode === 'expanded';

  // Memoize sidebar container styles with animations
  const sidebarStyles = useMemo(
    () => ({
      width: sidebarWidth,
      height: '100vh', // Full viewport height
      backgroundColor: '$color2',
      borderRightWidth: isSmallScreen ? 0 : 1,
      borderRightColor: '$color6',
      position: 'absolute' as const, // Use absolute for Tamagui compatibility
      left: 0,
      top: 0,
      zIndex: 1001,
      // Optimize shadow rendering for small screens
      shadowColor: isSmallScreen ? '$shadowColor' : undefined,
      shadowOffset: isSmallScreen ? { width: 2, height: 0 } : undefined,
      shadowOpacity: isSmallScreen ? 0.1 : undefined,
      shadowRadius: isSmallScreen ? 8 : undefined,
      // Animation properties
      animation: 'quick',
      animateOnly: isSmallScreen ? ['x'] : ['width'],
      // Small screen slide animation
      ...(isSmallScreen && {
        x: isOpen ? 0 : -sidebarWidth,
        enterStyle: { x: -sidebarWidth },
        exitStyle: { x: -sidebarWidth },
      }),
      // Large screen width animation - no enter/exit styles needed as width changes smoothly
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
      {/* Fixed Header */}
      <XStack
        height={60}
        alignItems='center'
        justifyContent={
          isCollapsed && !isSmallScreen ? 'center' : 'space-between'
        }
        paddingHorizontal={isCollapsed && !isSmallScreen ? '$2' : '$4'}
        borderBottomWidth={1}
        borderBottomColor='$color6'
        backgroundColor='$color2'
        zIndex={1}
      >
        {(!isCollapsed || isSmallScreen) && (
          <Text fontSize='$5' fontWeight='600' color='$color12'>
            Navigation
          </Text>
        )}

        {isSmallScreen && (
          <Button {...closeButtonStyles} icon={X} onPress={onHideSidebar} />
        )}

        {/* Collapse toggle for large screens */}
        {!isSmallScreen && (
          <Button
            {...closeButtonStyles}
            icon={isCollapsed ? ChevronRight : ChevronLeft}
            onPress={onToggleCollapse}
          />
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
