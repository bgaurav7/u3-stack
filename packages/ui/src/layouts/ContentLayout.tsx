'// This is a generic layout component. Do not add business or use-case-specific logic here.';
'use client';

import { styled } from '@tamagui/core';
import type { ReactNode } from 'react';
import { memo } from 'react';
import { H1, YStack } from 'tamagui';
import { NavBar, type NavBarProps } from '../components/NavBar';

export interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
  navBarProps: NavBarProps;
}

const StyledContent = styled(YStack, {
  flex: 1,
  minWidth: 0,
  height: '100%',
  overflow: 'scroll',
  position: 'relative',
  backgroundColor: '$color1',
});

const ContentLayoutComponent = ({
  children,
  title,
  navBarProps,
}: ContentLayoutProps) => {
  return (
    <StyledContent>
      <NavBar {...navBarProps} />
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
