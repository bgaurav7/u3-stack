'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import { Button, ScrollView, Text, useMedia, YStack } from 'tamagui';
import { Sheet } from '../components/Sheet';
import { SheetHeader } from '../components/SheetHeader';
import { TaskEditor } from '../components/TaskEditor';

export interface SheetLayoutProps {
  type: 'task';
  id: string;
  basePath: string;
  onClose?: () => void;
  sidebarWidth?: number; // Pass sidebar width for web positioning
}

const SheetLayoutComponent = ({
  type,
  id,
  onClose,
  sidebarWidth = 0,
}: SheetLayoutProps) => {
  // Use Tamagui's useMedia hook for responsive behavior
  const media = useMedia();
  const isSmallScreen = !media.gtSm; // gtSm is minWidth: 769px, so !gtSm means <= 768px

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Check for invalid sheet type and set error state
  useEffect(() => {
    if (type !== 'task') {
      setHasError(true);
      setErrorMessage(`Unknown sheet type: ${type}`);
    } else {
      setHasError(false);
      setErrorMessage('');
    }
  }, [type]);

  // Handle navigation errors with fallback to /app
  const handleNavigationError = (error: Error) => {
    console.error('Sheet navigation error:', error);
    setHasError(true);
    setErrorMessage('Failed to load sheet content');

    // Attempt to close sheet and navigate to /app
    if (onClose) {
      try {
        onClose();
      } catch (navError) {
        console.error('Failed to close sheet:', navError);
        // If onClose fails, try to navigate directly
        if (typeof window !== 'undefined') {
          window.location.href = '/app';
        }
      }
    }
  };

  // Safe close handler
  const handleSafeClose = () => {
    try {
      if (onClose) {
        onClose();
      }
    } catch (error) {
      handleNavigationError(error as Error);
    }
  };

  // Render sheet content based on type
  const renderSheetContent = useMemo(() => {
    // Show error state if there's an error
    if (hasError) {
      return (
        <YStack
          flex={1}
          backgroundColor='$color1'
          alignItems='center'
          justifyContent='center'
          padding='$4'
          gap='$4'
        >
          <YStack alignItems='center' gap='$3'>
            <YStack
              backgroundColor='$red2'
              padding='$3'
              borderRadius='$4'
              borderWidth={1}
              borderColor='$red6'
            >
              <YStack alignItems='center' gap='$2'>
                <Text fontSize='$6' color='$red10'>
                  ⚠️
                </Text>
                <Text fontSize='$5' fontWeight='600' color='$red11'>
                  Sheet Error
                </Text>
                <Text fontSize='$3' color='$red10' textAlign='center'>
                  {errorMessage || 'Something went wrong'}
                </Text>
              </YStack>
            </YStack>
            <YStack flexDirection='row' gap='$3'>
              <Button
                backgroundColor='$blue9'
                color='white'
                paddingHorizontal='$4'
                paddingVertical='$2'
                borderRadius='$3'
                pressStyle={{ backgroundColor: '$blue10' }}
                onPress={() => {
                  setHasError(false);
                  setErrorMessage('');
                }}
              >
                Try Again
              </Button>
              <Button
                backgroundColor='$gray6'
                color='$gray12'
                paddingHorizontal='$4'
                paddingVertical='$2'
                borderRadius='$3'
                pressStyle={{ backgroundColor: '$gray7' }}
                onPress={handleSafeClose}
              >
                Close
              </Button>
            </YStack>
          </YStack>
        </YStack>
      );
    }

    try {
      switch (type) {
        case 'task':
          return (
            <YStack flex={1} backgroundColor='$color1'>
              {/* Sheet Header */}
              <SheetHeader
                title='Edit Task'
                onClose={handleSafeClose}
                isSmallScreen={isSmallScreen}
              />

              {/* Sheet Content */}
              <ScrollView
                flex={1}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
              >
                <TaskEditor taskId={id} />
              </ScrollView>
            </YStack>
          );
        default:
          // Return error UI for unknown sheet type
          return (
            <YStack
              flex={1}
              backgroundColor='$color1'
              alignItems='center'
              justifyContent='center'
              padding='$4'
            >
              <Text color='$red11' fontSize='$4'>
                Unknown sheet type: {type}
              </Text>
            </YStack>
          );
      }
    } catch (error) {
      console.error('Error rendering sheet content:', error);
      return (
        <YStack
          flex={1}
          backgroundColor='$color1'
          alignItems='center'
          justifyContent='center'
          padding='$4'
        >
          <Text color='$red11' fontSize='$4'>
            Failed to load sheet content
          </Text>
        </YStack>
      );
    }
  }, [type, id, handleSafeClose, isSmallScreen, hasError, errorMessage]);

  return (
    <Sheet isOpen={true} onClose={onClose} sidebarWidth={sidebarWidth}>
      {renderSheetContent}
    </Sheet>
  );
};

// Export memoized component for performance
export const SheetLayout = memo(SheetLayoutComponent);
