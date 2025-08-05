'// This is a generic layout component. Do not add business or use-case-specific logic here.';
'use client';

import { styled } from '@tamagui/core';
import type { ReactNode } from 'react';
import { memo } from 'react';
import { H1, YStack } from 'tamagui';

export interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
  isSmallScreen: boolean;
  sidebarWidth: number;
  isVisible: boolean;
}

const StyledContent = styled(YStack, {
  flex: 1,
  minWidth: 0,
  height: '100%',
  overflow: 'scroll',
  position: 'relative',
  backgroundColor: '$color1',
  padding: '$4',
});

const ContentLayoutComponent = ({
  children,
  title,
  isSmallScreen,
  sidebarWidth,
  isVisible,
}: ContentLayoutProps) => {
  const marginLeft = isVisible && !isSmallScreen ? sidebarWidth : 0;

  return (
    <StyledContent style={{ marginLeft }}>
      {title && (
        <H1 size='$8' fontWeight='600' color='$color12' marginBottom='$2'>
          {title}
        </H1>
      )}
      {children}
    </StyledContent>
  );
};

// Export memoized component - context handles optimization
export const ContentLayout = memo(ContentLayoutComponent);
