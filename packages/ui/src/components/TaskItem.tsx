/**
 * TaskItem Component - Individual task display component
 *
 * This component renders a single task with proper styling, accessibility,
 * and cross-platform touch targets. It uses Tamagui components for consistent
 * design and includes visual feedback for user interactions.
 *
 * Requirements addressed:
 * - 1.2: Display task with title, description, and status
 * - 1.4: Clickable task items that open edit sheet
 * - 4.2: Cross-platform touch targets and accessibility
 * - 4.4: Proper styling with Tamagui components
 */

import type { Todo } from '@u3/types';
import type React from 'react';
import { useCallback } from 'react';
import { Card, Text, XStack, YStack } from 'tamagui';

/**
 * Props for the TaskItem component
 */
export interface TaskItemProps {
  /**
   * Task data to display
   */
  task: Todo;
  /**
   * Callback when the task item is pressed/clicked
   */
  onPress: () => void;
  /**
   * Optional variant for different styling
   */
  variant?: 'default' | 'completed';
  /**
   * Whether the item is currently pressed (for visual feedback)
   */
  isPressed?: boolean;
}

/**
 * Status badge component for displaying task completion status
 */
interface StatusBadgeProps {
  completed: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ completed }) => (
  <Card
    size='$2'
    backgroundColor={completed ? '$green4' : '$yellow4'}
    borderColor={completed ? '$green7' : '$yellow7'}
    paddingHorizontal='$3'
    paddingVertical='$1'
  >
    <Text
      fontSize='$2'
      fontWeight='600'
      color={completed ? '$green11' : '$yellow11'}
    >
      {completed ? 'Completed' : 'Pending'}
    </Text>
  </Card>
);

/**
 * TaskItem component - Reusable component for displaying individual tasks
 */
export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onPress,
  variant = 'default',
  isPressed = false,
}) => {
  // Handle press with proper callback
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  // Format creation date for display
  const formatDate = useCallback((date: Date) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, []);

  return (
    <Card
      elevate
      size='$4'
      bordered
      animation='bouncy'
      onPress={handlePress}
      cursor='pointer'
      backgroundColor='$background'
      borderColor='$borderColor'
      // Cross-platform touch targets - minimum 44px height for accessibility
      minHeight={60}
      padding='$4'
      // Visual feedback for interactions
      hoverStyle={{
        scale: 0.98,
        borderColor: '$color8',
        backgroundColor: '$color2',
      }}
      pressStyle={{
        scale: 0.95,
        backgroundColor: '$color3',
      }}
      focusStyle={{
        borderColor: '$blue8',
        borderWidth: 2,
      }}
      // Apply pressed state styling if needed
      {...(isPressed && {
        backgroundColor: '$color3',
        scale: 0.95,
      })}
      // Apply variant-specific styling
      {...(variant === 'completed' && {
        opacity: 0.8,
        backgroundColor: '$green2',
      })}
    >
      <YStack gap='$2'>
        {/* Task Title and Status Row */}
        <XStack alignItems='center' justifyContent='space-between' gap='$3'>
          <Text
            fontSize='$5'
            fontWeight='600'
            color='$color12'
            flex={1}
            numberOfLines={2}
          >
            {task.title}
          </Text>

          <StatusBadge completed={task.completed} />
        </XStack>

        {/* Task Description (if available) */}
        {task.description && (
          <Text
            fontSize='$3'
            color='$color10'
            numberOfLines={3}
            lineHeight='$1'
          >
            {task.description}
          </Text>
        )}

        {/* Task Metadata Row */}
        <XStack
          alignItems='center'
          justifyContent='space-between'
          marginTop='$1'
        >
          <Text fontSize='$2' color='$color9'>
            Created {formatDate(task.createdAt)}
          </Text>

          {/* Show updated date if different from created date */}
          {task.updatedAt &&
            new Date(task.updatedAt).getTime() !==
              new Date(task.createdAt).getTime() && (
              <Text fontSize='$2' color='$color9'>
                Updated {formatDate(task.updatedAt)}
              </Text>
            )}
        </XStack>
      </YStack>
    </Card>
  );
};
