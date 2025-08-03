'use client';

import type { SidebarMode } from '@u3/types/ui';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { AnimatePresence, useMedia, YStack } from 'tamagui';
import { NavBar } from '../components/NavBar';
import { SideBar, type SideBarUser } from '../components/SideBar';
import { getSheetConfig } from '../utils';
import { ContentLayout } from './ContentLayout';
import { SheetLayout } from './SheetLayout';

export interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  hideSidebar?: boolean;
  scrollable?: boolean;
  currentTheme?: 'light' | 'dark';
  onThemeToggle?: () => void;
  onNavigate?: (href: string) => void; // Add navigation callback
  user?: SideBarUser | null; // User data for sidebar profile
  onSignOut?: () => void; // Sign out handler
  // New sheet-related props
  currentPath?: string;
  onSheetClose?: () => void;
}

export function MainLayout({
  children,
  title,
  hideSidebar = false,
  scrollable = true,
  currentTheme = 'dark',
  onThemeToggle,
  onNavigate,
  user,
  onSignOut,
  currentPath,
  onSheetClose,
}: MainLayoutProps) {
  // Initialize sidebar mode with SSR-safe default
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>(() => {
    if (hideSidebar) return 'hidden';
    // Default to expanded for SSR to prevent layout shifts
    return 'expanded';
  });
  // No need to store previous sidebar mode since we don't restore it

  // Use Tamagui's useMedia hook for responsive behavior
  const media = useMedia();
  const isSmallScreen = !media.gtSm; // gtSm is minWidth: 769px, so !gtSm means <= 768px

  // Adjust sidebar mode when screen size changes
  useEffect(() => {
    if (hideSidebar) {
      setSidebarMode('hidden');
      return;
    }

    // Handle screen size changes - respect user's current sidebar state
    setSidebarMode(prev => {
      if (isSmallScreen) {
        // On small screens, hide sidebar if it's currently expanded
        if (prev === 'expanded') {
          console.log('Switching to small screen: hiding sidebar');
          return 'hidden';
        }
        // Keep collapsed as collapsed, hidden as hidden
      } else {
        // On large screens, only expand if it's hidden (not if it's collapsed)
        if (prev === 'hidden') {
          console.log('Switching to large screen: expanding sidebar');
          return 'expanded';
        }
        // Keep collapsed as collapsed (don't auto-expand)
      }
      return prev; // No change needed
    });
  }, [isSmallScreen, hideSidebar]);

  // Handle platform-specific behavior
  useEffect(() => {
    if (isSmallScreen && Platform.OS !== 'web') {
      // Handle small screen status bar behavior
      // StatusBar from expo-status-bar doesn't have setHidden method
      // It's controlled via the StatusBar component props
    }
  }, [isSmallScreen]);

  // Memoize callback functions
  const toggleSidebar = useCallback(() => {
    setSidebarMode(prev => {
      if (isSmallScreen) {
        // Mobile: toggle between hidden and expanded (close completely for screen space)
        return prev === 'hidden' ? 'expanded' : 'hidden';
      } else {
        // Desktop: toggle between collapsed and expanded (always visible)
        return prev === 'collapsed' ? 'expanded' : 'collapsed';
      }
    });
  }, [isSmallScreen]);

  const hideSidebarFn = useCallback(() => {
    setSidebarMode('hidden');
  }, []);

  // Sheet close handler - no sidebar restoration
  const handleSheetClose = useCallback(() => {
    // Call the original onSheetClose callback
    if (onSheetClose) {
      onSheetClose();
    }
  }, [onSheetClose]);

  // Memoize derived state based on screen size
  const sidebarWidth = useMemo(() => {
    let width: number;
    switch (sidebarMode) {
      case 'hidden':
        width = 0;
        break;
      case 'collapsed':
        width = isSmallScreen ? 0 : 40; // Collapsed not available on small screens
        break;
      case 'expanded':
        width = 240;
        break;
      default:
        width = 0;
    }
    console.log(
      `Sidebar width calculation: mode=${sidebarMode}, isSmallScreen=${isSmallScreen}, width=${width}`
    );
    return width;
  }, [sidebarMode, isSmallScreen]);

  const isVisible = useMemo(() => {
    const visible =
      sidebarMode !== 'hidden' &&
      (!isSmallScreen || sidebarMode === 'expanded');
    return visible;
  }, [sidebarMode, isSmallScreen]);

  // Detect if current route should show a sheet using utility function
  const sheetConfig = useMemo(() => {
    if (!currentPath) {
      console.log('MainLayout: No currentPath provided');
      return null;
    }
    const config = getSheetConfig(currentPath);
    console.log('MainLayout: Sheet detection', { currentPath, config });
    return config;
  }, [currentPath]);

  // Simple sidebar behavior: hide when sheet is open
  useEffect(() => {
    if (sheetConfig && !hideSidebar) {
      // When sheet opens, hide sidebar completely (both mobile and desktop)
      setSidebarMode('hidden');
    }
    // When sheet closes, sidebar stays hidden (user must manually toggle)
  }, [sheetConfig, hideSidebar]);

  // Calculate if sheet should be rendered as side panel (web) or overlay (mobile)
  const isSheetSidePanel = useMemo(() => {
    return sheetConfig && !isSmallScreen;
  }, [sheetConfig, isSmallScreen]);

  // Calculate main content width adjustment for split-screen sheet (web only)
  const mainContentStyle = useMemo(() => {
    if (isSheetSidePanel) {
      // On web, the sheet takes up space on the right side
      // Content layout needs to be narrower to accommodate the sheet
      const sheetWidth = 'clamp(400px, 40vw, 600px)';
      return {
        width: `calc(100% - ${sheetWidth})`,
        minWidth: '300px', // Ensure content doesn't get too narrow
        marginRight: 0, // No right margin since sheet is on the right
      };
    }
    return {};
  }, [isSheetSidePanel]);

  // Memoize layout configuration
  const layoutConfig = useMemo(
    () => ({
      statusBarProps: {
        style: 'auto' as const,
        hidden: false,
        backgroundColor: '$color1',
        translucent: Platform.OS === 'android',
      },
      overlayProps:
        isSmallScreen && sidebarMode === 'expanded'
          ? {
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '$color8',
              opacity: 0.5,
              zIndex: 150, // Below sidebar (200) but above navbar (100)
              pointerEvents: 'auto' as const,
            }
          : null,
    }),
    [isSmallScreen, sidebarMode]
  );

  return (
    <YStack flex={1} backgroundColor='$color1' position='relative'>
      <StatusBar {...layoutConfig.statusBarProps} />

      <NavBar
        isSmallScreen={isSmallScreen}
        sidebarWidth={sidebarWidth}
        onToggleSidebar={toggleSidebar}
        currentTheme={currentTheme}
        onThemeToggle={onThemeToggle}
      />

      {/* Fixed Sidebar with AnimatePresence for smooth mount/unmount */}
      <AnimatePresence>
        {isVisible && (
          <SideBar
            key='sidebar'
            sidebarMode={sidebarMode}
            isSmallScreen={isSmallScreen}
            sidebarWidth={sidebarWidth}
            onHideSidebar={hideSidebarFn}
            onNavigate={onNavigate}
            user={user}
            onSignOut={onSignOut}
          />
        )}
      </AnimatePresence>

      {/* Main Content Area - with margin for sidebar and sheet */}
      <YStack flex={1} paddingTop={60} {...mainContentStyle}>
        <ContentLayout
          title={title}
          scrollable={scrollable}
          isSmallScreen={isSmallScreen}
          sidebarWidth={sidebarWidth}
          isVisible={isVisible}
        >
          {children}
        </ContentLayout>
      </YStack>

      {/* Mobile overlay with AnimatePresence */}
      <AnimatePresence>
        {layoutConfig.overlayProps && (
          <YStack
            key='overlay'
            {...layoutConfig.overlayProps}
            onPress={hideSidebarFn}
            animation='quick'
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Sheet overlay system */}
      <AnimatePresence>
        {sheetConfig && (
          <SheetLayout
            key={`sheet-${sheetConfig.type}-${sheetConfig.id}`}
            type={sheetConfig.type}
            id={sheetConfig.id}
            basePath={sheetConfig.basePath}
            sidebarWidth={sidebarWidth}
            onClose={handleSheetClose}
          />
        )}
      </AnimatePresence>
    </YStack>
  );
}
