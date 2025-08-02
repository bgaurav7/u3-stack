import type React from 'react';
import { Spinner, Text, View, YStack } from 'tamagui';

/**
 * Props for loading state layout
 */
export interface LoadingLayoutProps {
  /**
   * Custom loading component
   */
  loadingComponent?: React.ReactNode;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
}

/**
 * Layout component for loading states
 */
export function LoadingLayout({ loadingComponent, style }: LoadingLayoutProps) {
  return (
    <View
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='$background'
      {...style}
    >
      {loadingComponent || (
        <YStack alignItems='center' gap='$4'>
          <Spinner size='large' color='$color' />
          <Text color='$color11' fontSize='$4'>
            Loading...
          </Text>
        </YStack>
      )}
    </View>
  );
}
