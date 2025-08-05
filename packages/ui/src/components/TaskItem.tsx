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
import { memo } from 'react';
import { Text, XStack, YStack } from 'tamagui';

/**
 * Props for the TaskItem component
 */
export interface TaskItemProps {
  task: Todo;
  onClick: () => void;
  isSelected?: boolean;
}

/**
 * TaskItem component - Reusable component for displaying individual tasks
 */

const TaskItemComponent: React.FC<TaskItemProps> = ({
  task,
  onClick,
  isSelected,
}) => {
  if (!task || !task.id || !task.title) return null;
  return (
    <YStack
      padding='$3'
      backgroundColor={isSelected ? '$color3' : '$color1'}
      borderBottomWidth={1}
      borderBottomColor='$color6'
      onPress={onClick}
      cursor='pointer'
    >
      <Text fontSize='$5' fontWeight='600' color='$color12'>
        {task.title}
      </Text>
      {task.description && (
        <Text fontSize='$3' color='$color10' marginTop='$1'>
          {task.description}
        </Text>
      )}
      <XStack gap='$2' marginTop='$1'>
        <Text fontSize='$2' color='$color9'>
          {task.completed ? 'Completed' : 'Pending'}
        </Text>
        <Text fontSize='$2' color='$color9'>
          {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : ''}
        </Text>
      </XStack>
    </YStack>
  );
};

// Export memoized component for performance optimization
export const TaskItem = memo(TaskItemComponent);
TaskItem.displayName = 'TaskItem';
