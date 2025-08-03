'use client';

import type { SidebarMode } from '@u3/types/ui';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { AnimatePresence, YStack } from 'tamagui';
import { NavBar } from '../components/NavBar';
import { SideBar, type SideBarUser } from '../components/SideBar';
import { getSheetConfig } from '../utils';
import { PageLayout } from './PageLayout';
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
  // SSR-safe responsive behavior - avoid useMedia during SSR
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle responsive behavior after hydration
  useEffect(() => {
    setIsHydrated(true);

    // Check screen size after hydration
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

  // Adjust sidebar mode when screen size changes
  useEffect(() => {
    if (!isHydrated) return; // Wait for hydration

    if (hideSidebar) {
      setSidebarMode('hidden');
      return;
    }

    // Handle screen size changes
    setSidebarMode(prev => {
      if (isSmallScreen) {
        // On small screens, hide sidebar if it's currently expanded or collapsed
        if (prev === 'expanded' || prev === 'collapsed') {
          console.log('Switching to small screen: hiding sidebar');
          return 'hidden';
        }
      } else {
        // On large screens, expand sidebar if it's currently hidden
        if (prev === 'hidden') {
          console.log('Switching to large screen: expanding sidebar');
          return 'expanded';
        }
        // Collapsed mode is preserved when transitioning from small to large
      }
      return prev; // No change needed
    });
  }, [isHydrated, isSmallScreen, hideSidebar]);

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
        // Small screen: toggle between hidden and expanded
        return prev === 'hidden' ? 'expanded' : 'hidden';
      } else {
        // Large screen: toggle between collapsed and expanded
        return prev === 'expanded' ? 'collapsed' : 'expanded';
      }
    });
  }, [isSmallScreen]);

  const toggleCollapse = useCallback(() => {
    if (!isSmallScreen) {
      setSidebarMode(prev => (prev === 'collapsed' ? 'expanded' : 'collapsed'));
    }
  }, [isSmallScreen]);

  const hideSidebarFn = useCallback(() => {
    setSidebarMode('hidden');
  }, []);

  // Memoize derived state based on screen size
  const sidebarWidth = useMemo(() => {
    let width: number;
    switch (sidebarMode) {
      case 'hidden':
        width = 0;
        break;
      case 'collapsed':
        width = isSmallScreen ? 0 : 60; // Collapsed not available on small screens
        break;
      case 'expanded':
        width = 280;
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
    if (!currentPath) return null;
    return getSheetConfig(currentPath);
  }, [currentPath]);

  // Calculate if sheet should be rendered as side panel (web) or overlay (mobile)
  const isSheetSidePanel = useMemo(() => {
    return sheetConfig && !isSmallScreen;
  }, [sheetConfig, isSmallScreen]);

  // Calculate main content width adjustment for side panel
  const mainContentStyle = useMemo(() => {
    if (isSheetSidePanel) {
      return {
        marginRight: 480, // Side panel width
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
              zIndex: 1000, // Below sidebar but above content
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
            onToggleCollapse={toggleCollapse}
            onNavigate={onNavigate}
            user={user}
            onSignOut={onSignOut}
          />
        )}
      </AnimatePresence>

      {/* Main Content Area - with margin for sidebar and sheet */}
      <YStack flex={1} {...mainContentStyle}>
        <PageLayout
          title={title}
          scrollable={scrollable}
          isSmallScreen={isSmallScreen}
          sidebarWidth={sidebarWidth}
          isVisible={isVisible}
        >
          {children}
        </PageLayout>
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
            onClose={onSheetClose}
          />
        )}
      </AnimatePresence>
    </YStack>
  );
}
