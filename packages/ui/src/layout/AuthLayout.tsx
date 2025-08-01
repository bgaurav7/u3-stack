import type React from 'react';
import { ScrollView, View, YStack } from 'tamagui';

export interface AuthLayoutProps {
  children: React.ReactNode;
  /**
   * Optional background color override
   */
  backgroundColor?: string;
}

/**
 * Minimal centered layout for authentication pages
 * Provides a clean, distraction-free environment
 */
export function AuthLayout({
  children,
  backgroundColor = '$background',
}: AuthLayoutProps) {
  return (
    <View flex={1} backgroundColor={backgroundColor}>
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 24,
          paddingVertical: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <YStack
          flex={1}
          justifyContent='center'
          alignItems='center'
          maxWidth={400}
          width='100%'
          alignSelf='center'
          gap='$6'
        >
          {children}
        </YStack>
      </ScrollView>
    </View>
  );
}
