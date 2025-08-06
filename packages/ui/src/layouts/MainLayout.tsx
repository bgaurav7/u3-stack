'// This is a generic layout component. Do not add business or use-case-specific logic here.';
'use client';

import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { Platform } from 'react-native';
import { useMedia, XStack, YStack } from 'tamagui';
import { Sheet } from '../components/Sheet';
// import { NavBar } from '../components/NavBar';
import { SideBar, type SideBarUser } from '../components/SideBar';
import { useSidebarBehavior } from '../hooks/useSidebarBehavior';
import { getSheetConfig } from '../utils';
import { ContentLayout } from './ContentLayout';
import { SheetLayout } from './SheetLayout';

export interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  hideSidebar?: boolean;
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

  // Sidebar width using Tamagui tokens and responsive logic
  const sidebarWidth = useMemo(() => {
    switch (sidebarMode) {
      case 'hidden':
        return 0;
      case 'collapsed':
        return isSmallScreen ? 0 : 40; // 40px for desktop, 0 for mobile
      case 'expanded':
        return 240; // $12 ~ 240px, but Tamagui tokens can be used in SideBar
      default:
        return 0;
    }
  }, [sidebarMode, isSmallScreen]);

  const isVisible =
    sidebarMode !== 'hidden' && (!isSmallScreen || sidebarMode === 'expanded');

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
    <YStack flex={1} backgroundColor='$color1'>
      <StatusBar {...layoutConfig.statusBarProps} />
      <XStack flex={1} width='100%' height='100%'>
        {/* Sidebar */}
        {isVisible && (
          <YStack
            width={sidebarWidth}
            minWidth={0}
            height='100%'
            backgroundColor='$color2'
          >
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
          </YStack>
        )}

        {/* Main Content */}
        <YStack flex={1} height='100%'>
          <ContentLayout
            title={title}
            navBarProps={{
              isSmallScreen,
              onToggleSidebar: toggleSidebar,
            }}
          >
            {children}
          </ContentLayout>
        </YStack>

        {/* Sheet (web side panel) - move before main content */}
        {sheetConfig && !isSmallScreen && (
          <>
            {console.log('Rendering web side panel')}
            <YStack
              width={400}
              minWidth={300}
              height='100%'
              backgroundColor='$color3'
            >
              <SheetLayout
                key={`sheet-${sheetConfig.type}-${sheetConfig.id}`}
                onClose={handleSheetClose}
                content={sheetContent}
                headerTitle={sheetHeaderTitle}
              />
            </YStack>
          </>
        )}
      </XStack>

      {/* Sheet (mobile modal) */}
      {sheetConfig && isSmallScreen && (
        <>
          {console.log('Rendering mobile modal')}
          <Sheet isOpen={true} onClose={handleSheetClose}>
            <SheetLayout
              key={`sheet-${sheetConfig.type}-${sheetConfig.id}`}
              onClose={handleSheetClose}
              content={sheetContent}
              headerTitle={sheetHeaderTitle}
            />
          </Sheet>
        </>
      )}

      {/* Mobile overlay - no animations */}
      {layoutConfig.overlayProps && (
        <YStack
          key='overlay'
          {...layoutConfig.overlayProps}
          onPress={hideSidebarFn}
        />
      )}
    </YStack>
  );
}
