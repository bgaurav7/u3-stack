'use client';

import type { ReactNode } from 'react';
import { memo, useMemo } from 'react';
import { H1, ScrollView, YStack } from 'tamagui';

export interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
  scrollable?: boolean;
  isSmallScreen: boolean;
  sidebarWidth: number;
  isVisible: boolean;
}

const ContentLayoutComponent = ({
  children,
  title,
  scrollable = true,
  isSmallScreen,
  sidebarWidth,
  isVisible,
}: ContentLayoutProps) => {
  // Enhanced memoization with viewport-based values
  const layoutConfig = useMemo(() => {
    const marginLeft = isVisible && !isSmallScreen ? sidebarWidth : 0;

    return {
      marginLeft,
      padding: isSmallScreen ? '$4' : '$6',
      width: '100%',
      flex: 1,
      backgroundColor: '$color1',
      animation: 'quick',
      animateOnly: ['marginLeft'],
    };
  }, [isSmallScreen, sidebarWidth, isVisible]);

  // Calculate transform to center content accounting for sidebar
  const contentTransform = useMemo(() => {
    if (isVisible && !isSmallScreen && sidebarWidth > 0) {
      // Shift content left by half the sidebar width to center it in the viewport
      return {
        transform: `translateX(-${sidebarWidth / 2}px)`,
      };
    }
    return {};
  }, [isVisible, isSmallScreen, sidebarWidth]);

  // Memoize ContentWrapper selection to prevent component recreation
  const ContentWrapper = useMemo(
    () => (scrollable ? ScrollView : YStack),
    [scrollable]
  );

  // Memoize title component to prevent recreation when title doesn't change
  const titleComponent = useMemo(
    () =>
      title ? (
        <H1 size='$8' fontWeight='600' color='$color12' marginBottom='$2'>
          {title}
        </H1>
      ) : null,
    [title]
  );

  return (
    <ContentWrapper {...layoutConfig}>
      <YStack gap='$4' flex={1} {...contentTransform}>
        {titleComponent}
        {children}
      </YStack>
    </ContentWrapper>
  );
};

// Export memoized component - context handles optimization
export const ContentLayout = memo(ContentLayoutComponent);
