import type { SidebarMode } from '@u3/types/ui';
import { useCallback, useEffect, useState } from 'react';

interface UseSidebarBehaviorProps {
  hideSidebar: boolean;
  isSmallScreen: boolean;
}

export function useSidebarBehavior({
  hideSidebar,
  isSmallScreen,
}: UseSidebarBehaviorProps) {
  // Initialize sidebar mode with SSR-safe default
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>(() => {
    if (hideSidebar) return 'hidden';
    // Default to expanded for SSR to prevent layout shifts
    return 'expanded';
  });

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
          return 'hidden';
        }
        // Keep collapsed as collapsed, hidden as hidden
      } else {
        // On large screens, only expand if it's hidden (not if it's collapsed)
        if (prev === 'hidden') {
          return 'expanded';
        }
        // Keep collapsed as collapsed (don't auto-expand)
      }
      return prev; // No change needed
    });
  }, [isSmallScreen, hideSidebar]);

  // Toggle sidebar mode
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

  // Hide sidebar
  const hideSidebarFn = useCallback(() => {
    setSidebarMode('hidden');
  }, []);

  return {
    sidebarMode,
    setSidebarMode,
    toggleSidebar,
    hideSidebarFn,
  };
}
