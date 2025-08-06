/**
 * TaskItem Component - Individual task display component
 *
 * This component renders a single task with proper styling, accessibility,
 * and cross-platform touch targets. It uses Tamagui components for consistent
 * design and includes visual feedback for user interactions.
 *
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
  if (!task || !task.id || !task.title || !task.title.trim()) return null;

  const children = [];

  // Title (always present)
  children.push(
    <Text key='title' fontSize='$5' fontWeight='600' color='$color12'>
      {task.title}
    </Text>
  );

  // Description (conditional)
  if (task.description && task.description.trim()) {
    children.push(
      <Text key='description' fontSize='$3' color='$color10' marginTop='$1'>
        {task.description}
      </Text>
    );
  }

  // Status and date row
  children.push(
    <XStack key='status' gap='$2' marginTop='$1'>
      <Text fontSize='$2' color='$color9'>
        {task.completed ? 'Completed' : 'Pending'}
      </Text>
      {task.createdAt && (
        <Text fontSize='$2' color='$color9'>
          {new Date(task.createdAt).toLocaleDateString()}
        </Text>
      )}
    </XStack>
  );

  return (
    <YStack
      padding='$3'
      backgroundColor={isSelected ? '$color3' : '$color1'}
      borderBottomWidth={1}
      borderBottomColor='$color6'
      onPress={onClick}
      cursor='pointer'
    >
      {children}
    </YStack>
  );
};

// Export memoized component for performance optimization
export const TaskItem = memo(TaskItemComponent);
TaskItem.displayName = 'TaskItem';
