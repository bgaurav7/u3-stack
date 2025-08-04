/**
 * TaskList Component - Displays a scrollable list of tasks
 *
 * This component handles the display of tasks with proper loading and error states.
 * It uses Tamagui components for consistent styling and cross-platform compatibility.
 *
 * Requirements addressed:
 * - 1.2: Display tasks with title, description, and status
 * - 1.3: Scrollable container for any number of tasks
 * - 1.5: Handle loading and error states with appropriate UI feedback
 */

import type { Todo } from '@u3/types';
import type React from 'react';
import { useCallback } from 'react';
import { Button, ScrollView, Spinner, Text, YStack } from 'tamagui';
import { TaskItem } from './TaskItem';

/**
 * Props for the TaskList component
 */
export interface TaskListProps {
  /**
   * Array of tasks to display
   */
  tasks: Todo[] | undefined;
  /**
   * Loading state for the task list
   */
  isLoading: boolean;
  /**
   * Error message to display (null when no error)
   */
  error: string | null;
  /**
   * Whether the error is retryable
   */
  isRetryable?: boolean;
  /**
   * Function to retry loading tasks
   */
  onRetry?: () => void;
  /**
   * Callback when a task is clicked/pressed
   */
  onTaskClick: (task: Todo) => void;
}

/**
 * Empty state component when no tasks are available
 */
const EmptyState: React.FC = () => (
  <YStack
    flex={1}
    alignItems='center'
    justifyContent='center'
    paddingVertical='$8'
    gap='$4'
  >
    <Text fontSize='$6' fontWeight='600' color='$color11' textAlign='center'>
      No tasks yet
    </Text>
    <Text fontSize='$4' color='$color10' textAlign='center' maxWidth={300}>
      Create your first task using the form below to get started with your task
      management.
    </Text>
  </YStack>
);

/**
 * Loading state component
 */
const LoadingState: React.FC = () => (
  <YStack
    flex={1}
    alignItems='center'
    justifyContent='center'
    paddingVertical='$8'
    gap='$4'
  >
    <Spinner size='large' color='$color11' />
    <Text fontSize='$4' color='$color10' textAlign='center'>
      Loading your tasks...
    </Text>
  </YStack>
);

/**
 * Error state component with retry functionality
 */
interface ErrorStateProps {
  message: string;
  isRetryable: boolean;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  message,
  isRetryable,
  onRetry,
}) => (
  <YStack
    flex={1}
    alignItems='center'
    justifyContent='center'
    paddingVertical='$8'
    gap='$4'
  >
    <Text fontSize='$5' fontWeight='600' color='$red10' textAlign='center'>
      Unable to load tasks
    </Text>
    <Text fontSize='$4' color='$color10' textAlign='center' maxWidth={300}>
      {message}
    </Text>
    {isRetryable && onRetry && (
      <Button
        size='$3'
        backgroundColor='$blue9'
        color='$white1'
        onPress={onRetry}
        marginTop='$2'
      >
        Try Again
      </Button>
    )}
  </YStack>
);

/**
 * TaskList component - Main component for displaying tasks
 */
export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  isLoading,
  error,
  isRetryable = true,
  onRetry,
  onTaskClick,
}) => {
  // Handle task click with proper callback
  const handleTaskClick = useCallback(
    (task: Todo) => {
      onTaskClick(task);
    },
    [onTaskClick]
  );

  // Show loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Show error state
  if (error) {
    return (
      <ErrorState message={error} isRetryable={isRetryable} onRetry={onRetry} />
    );
  }

  // Show empty state when no tasks
  if (!tasks || tasks.length === 0) {
    return <EmptyState />;
  }

  // Render scrollable task list
  return (
    <ScrollView
      flex={1}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: '$4',
      }}
    >
      <YStack gap='$3'>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onPress={() => handleTaskClick(task)}
            variant={task.completed ? 'completed' : 'default'}
          />
        ))}
      </YStack>
    </ScrollView>
  );
};
