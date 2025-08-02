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
 * Enhanced layout for authentication pages with card design and shadows
 * Provides a polished, professional environment
 */
export function AuthLayout({
  children,
  backgroundColor = '$color1',
}: AuthLayoutProps) {
  return (
    <View flex={1} backgroundColor={backgroundColor}>
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <YStack
          flex={1}
          justifyContent='center'
          alignItems='center'
          maxWidth={440}
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
