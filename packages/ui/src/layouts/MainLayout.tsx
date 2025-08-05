'// This is a generic layout component. Do not add business or use-case-specific logic here.';
'use client';

import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { Platform } from 'react-native';
import { useMedia, YStack } from 'tamagui';
// import { NavBar } from '../components/NavBar';
import { SideBar, type SideBarUser } from '../components/SideBar';
import { useSidebarBehavior } from '../hooks/useSidebarBehavior';
import { getSheetConfig } from '../utils';
import { ContentLayout } from './ContentLayout';
import { SheetLayout } from './SheetLayout';

// Sheet sizing constants
const MAIN_CONTENT_MIN_WIDTH = '300px';

export interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  hideSidebar?: boolean;
  currentTheme?: 'light' | 'dark';
  onThemeToggle?: () => void;
  onNavigate?: (href: string) => void;
  user?: SideBarUser | null;
  onSignOut?: () => void;
  currentPath?: string;
  onSheetClose?: () => void;
  sheetContent?: React.ReactNode;
  sheetHeaderTitle?: string;
}

export function MainLayout({
  children,
  title,
  hideSidebar = false,
  currentTheme = 'dark',
  onThemeToggle,
  onNavigate,
  user,
  onSignOut,
  currentPath,
  onSheetClose,
  sheetContent,
  sheetHeaderTitle,
}: MainLayoutProps) {
  // Use Tamagui's useMedia hook for responsive behavior
  const media = useMedia();
  const isSmallScreen = !media.gtSm; // gtSm is minWidth: 769px, so !gtSm means <= 768px

  // Use custom hook for sidebar behavior
  const { sidebarMode, setSidebarMode, toggleSidebar, hideSidebarFn } =
    useSidebarBehavior({
      hideSidebar,
      isSmallScreen,
    });

  // Handle platform-specific behavior
  useEffect(() => {
    if (isSmallScreen && Platform.OS !== 'web') {
      // Handle small screen status bar behavior
      // StatusBar from expo-status-bar doesn't have setHidden method
      // It's controlled via the StatusBar component props
    }
  }, [isSmallScreen]);

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
        // On small screens, there is not enough space to show a collapsed sidebar,
        // so the sidebar is fully hidden (width = 0) instead of collapsed. On larger screens,
        // the collapsed sidebar is shown with a width of 40px.
        width = isSmallScreen ? 0 : 40;
        break;
      case 'expanded':
        width = 240;
        break;
      default:
        width = 0;
    }
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
      return null;
    }
    const config = getSheetConfig(currentPath);
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
      // Use a simple percentage instead of calc() to avoid animation issues
      return {
        width: '60%', // 100% - 40% (sheet width)
        minWidth: MAIN_CONTENT_MIN_WIDTH, // Ensure content doesn't get too narrow
        marginRight: 0, // No right margin since sheet is on the right
      };
    }
    return {
      width: '100%',
    };
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

      {/* Fixed Sidebar - no animations */}
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

      {/* Main Content Area - with margin for sidebar and sheet */}
      <YStack flex={1} style={mainContentStyle}>
        <ContentLayout
          title={title}
          isSmallScreen={isSmallScreen}
          sidebarWidth={sidebarWidth}
          isVisible={isVisible}
          navBarProps={{
            isSmallScreen,
            onToggleSidebar: toggleSidebar,
            currentTheme,
            onThemeToggle,
          }}
        >
          {children}
        </ContentLayout>
      </YStack>

      {/* Mobile overlay - no animations */}
      {layoutConfig.overlayProps && (
        <YStack
          key='overlay'
          {...layoutConfig.overlayProps}
          onPress={hideSidebarFn}
        />
      )}

      {/* Sheet overlay system - no animations */}
      {sheetConfig && (
        <SheetLayout
          key={`sheet-${sheetConfig.type}-${sheetConfig.id}`}
          onClose={handleSheetClose}
          content={sheetContent}
          headerTitle={sheetHeaderTitle}
        />
      )}
    </YStack>
  );
}
