'use client';

import type { Todo, UpdateTodoInput } from '@u3/types';
import { memo, useCallback, useEffect, useState } from 'react';
import {
  Button,
  Input,
  Label,
  Spinner,
  Switch,
  Text,
  TextArea,
  XStack,
  YStack,
} from 'tamagui';

export interface TaskEditorProps {
  taskId?: string;
  // Optional props for providing task data and handlers
  task?: Todo | null;
  isLoading?: boolean;
  error?: string | null;
  onSave?: (data: UpdateTodoInput) => Promise<void>;
  onDelete?: (taskId: string) => Promise<void>;
  onCancel?: () => void;
  // For cases where we need to fetch the task
  onLoadTask?: (taskId: string) => Promise<Todo | null>;
}

const TaskEditorComponent = ({
  taskId,
  task: providedTask,
  isLoading: providedIsLoading = false,
  error: providedError = null,
  onSave,
  onDelete,
  onCancel,
  onLoadTask,
}: TaskEditorProps) => {
  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTask, setIsLoadingTask] = useState(false);
  const [taskNotFound, setTaskNotFound] = useState(false);
  const [loadedTask, setLoadedTask] = useState<Todo | null>(null);

  // Determine the current task (either provided or loaded)
  const currentTask = providedTask || loadedTask;

  // Load task data when taskId changes (only if task is not provided)
  useEffect(() => {
    const loadTask = async () => {
      // If task is provided via props, use it
      if (providedTask) {
        setTitle(providedTask.title || '');
        setDescription(providedTask.description || '');
        setCompleted(providedTask.completed || false);
        setTaskNotFound(false);
        setLoadedTask(providedTask);
        return;
      }

      // If no taskId, we're creating a new task
      if (!taskId) {
        setIsLoadingTask(false);
        setTaskNotFound(false);
        return;
      }

      // If we have onLoadTask handler, use it
      if (onLoadTask) {
        try {
          setIsLoadingTask(true);
          setTaskNotFound(false);

          const task = await onLoadTask(taskId);

          if (task) {
            setTitle(task.title || '');
            setDescription(task.description || '');
            setCompleted(task.completed || false);
            setLoadedTask(task);
          } else {
            setTaskNotFound(true);
          }
        } catch (error) {
          console.error('Failed to load task:', error);
          setErrorMessage('Failed to load task data');
          setTaskNotFound(true);
        } finally {
          setIsLoadingTask(false);
        }
      } else {
        // No way to load task, assume it doesn't exist
        setTaskNotFound(true);
        setIsLoadingTask(false);
      }
    };

    loadTask();
  }, [taskId, providedTask, onLoadTask]);

  // Handle save operation
  const handleSave = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');

      // Basic validation
      if (!title.trim()) {
        throw new Error('Task title is required');
      }

      // If onSave handler is provided, use it
      if (onSave && taskId) {
        const updateData: UpdateTodoInput = {
          id: taskId,
          title: title.trim(),
          description: description.trim() || undefined,
          completed,
        };

        await onSave(updateData);
      } else {
        // Fallback - just log for now
        console.log('Saving task:', { taskId, title, description, completed });
      }
    } catch (error) {
      console.error('Failed to save task:', error);
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to save task'
      );
    } finally {
      setIsLoading(false);
    }
  }, [taskId, title, description, completed, onSave]);

  // Handle delete operation
  const handleDelete = useCallback(async () => {
    if (!taskId) return;

    const taskTitle = currentTask?.title || 'this task';
    const confirmed = confirm(
      `Are you sure you want to delete "${taskTitle}"?\n\nThis action cannot be undone.`
    );
    if (!confirmed) return;

    try {
      setIsLoading(true);
      setErrorMessage('');

      // If onDelete handler is provided, use it
      if (onDelete) {
        await onDelete(taskId);
      } else {
        // Fallback - just log for now
        console.log('Deleting task:', taskId);
      }
    } catch (error) {
      console.error('Failed to delete task:', error);
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to delete task'
      );
    } finally {
      setIsLoading(false);
    }
  }, [taskId, currentTask?.title, onDelete]);

  // Handle cancel operation
  const handleCancel = useCallback(() => {
    try {
      // Reset any error state
      setErrorMessage('');

      // If onCancel handler is provided, use it
      if (onCancel) {
        onCancel();
      } else {
        // Fallback - just log for now
        console.log('Cancelling task edit');
      }
    } catch (error) {
      console.error('Error during cancel:', error);
    }
  }, [onCancel]);

  // Show loading state while fetching task or from props
  if (isLoadingTask || providedIsLoading) {
    return (
      <YStack
        gap='$4'
        padding='$4'
        alignItems='center'
        justifyContent='center'
        minHeight={300}
      >
        <Spinner size='large' color='$color11' />
        <Text fontSize='$4' color='$color10' textAlign='center'>
          Loading task...
        </Text>
      </YStack>
    );
  }

  // Show error state if provided via props
  if (providedError) {
    return (
      <YStack
        gap='$4'
        padding='$4'
        alignItems='center'
        justifyContent='center'
        minHeight={300}
      >
        <YStack alignItems='center' gap='$3'>
          <Text fontSize='$6' fontWeight='600' color='$red10'>
            Error Loading Task
          </Text>
          <Text
            fontSize='$4'
            color='$color10'
            textAlign='center'
            maxWidth={300}
          >
            {providedError}
          </Text>
          <Button
            size='$4'
            backgroundColor='$blue9'
            color='white'
            onPress={handleCancel}
          >
            Go Back
          </Button>
        </YStack>
      </YStack>
    );
  }

  // Show not found state
  if (
    taskNotFound ||
    (taskId && !currentTask && !isLoadingTask && !providedIsLoading)
  ) {
    return (
      <YStack
        gap='$4'
        padding='$4'
        alignItems='center'
        justifyContent='center'
        minHeight={300}
      >
        <YStack alignItems='center' gap='$3'>
          <Text fontSize='$6' fontWeight='600' color='$red10'>
            Task Not Found
          </Text>
          <Text
            fontSize='$4'
            color='$color10'
            textAlign='center'
            maxWidth={300}
          >
            The task you're looking for doesn't exist or may have been deleted.
          </Text>
          <Button
            size='$4'
            backgroundColor='$blue9'
            color='white'
            onPress={handleCancel}
          >
            Go Back to Tasks
          </Button>
        </YStack>
      </YStack>
    );
  }

  return (
    <YStack gap='$4' padding='$4'>
      {/* Task ID Display */}
      {taskId && (
        <YStack gap='$2'>
          <Label
            htmlFor='taskId'
            fontSize='$3'
            fontWeight='500'
            color='$color11'
          >
            Task ID
          </Label>
          <Text id='taskId' fontSize='$3' color='$color10'>
            {taskId}
          </Text>
        </YStack>
      )}

      {/* Title Field */}
      <YStack gap='$2'>
        <Label htmlFor='title' fontSize='$3' fontWeight='500' color='$color11'>
          Title *
        </Label>
        <Input
          id='title'
          value={title}
          onChangeText={setTitle}
          placeholder='Enter task title'
          size='$4'
          borderColor={errorMessage && !title.trim() ? '$red7' : '$color6'}
          focusStyle={{
            borderColor: errorMessage && !title.trim() ? '$red8' : '$blue8',
          }}
          disabled={isLoading}
        />
        {errorMessage && !title.trim() && (
          <Text color='$red11' fontSize='$2'>
            Task title is required
          </Text>
        )}
      </YStack>

      {/* Description Field */}
      <YStack gap='$2'>
        <Label
          htmlFor='description'
          fontSize='$3'
          fontWeight='500'
          color='$color11'
        >
          Description
        </Label>
        <TextArea
          id='description'
          value={description}
          onChangeText={setDescription}
          placeholder='Enter task description (optional)'
          size='$4'
          minHeight={100}
          maxHeight={200}
          borderColor='$color6'
          focusStyle={{ borderColor: '$blue8' }}
          disabled={isLoading}
          textAlignVertical='top'
          multiline
        />
      </YStack>

      {/* Completion Status */}
      <XStack
        alignItems='center'
        justifyContent='space-between'
        paddingVertical='$2'
        gap='$3'
      >
        <YStack flex={1}>
          <Label
            htmlFor='completed'
            fontSize='$3'
            fontWeight='500'
            color='$color11'
          >
            Mark as completed
          </Label>
          <Text fontSize='$2' color='$color10' marginTop='$1'>
            {completed
              ? 'This task is marked as completed'
              : 'This task is pending completion'}
          </Text>
        </YStack>
        <Switch
          id='completed'
          checked={completed}
          onCheckedChange={setCompleted}
          size='$3'
          disabled={isLoading}
        />
      </XStack>

      {/* Task Metadata (if editing existing task) */}
      {taskId && currentTask && (
        <YStack gap='$2' marginTop='$2'>
          <Text fontSize='$2' color='$color9' fontWeight='500'>
            Task Information
          </Text>
          <YStack gap='$1'>
            <Text fontSize='$2' color='$color10'>
              Created:{' '}
              {currentTask.createdAt
                ? new Date(currentTask.createdAt).toLocaleString()
                : 'Unknown'}
            </Text>
            {currentTask.updatedAt &&
              new Date(currentTask.updatedAt).getTime() !==
                new Date(currentTask.createdAt).getTime() && (
                <Text fontSize='$2' color='$color10'>
                  Last updated:{' '}
                  {new Date(currentTask.updatedAt).toLocaleString()}
                </Text>
              )}
          </YStack>
        </YStack>
      )}

      {/* Error Message */}
      {errorMessage && (
        <YStack
          padding='$3'
          backgroundColor='$red2'
          borderRadius='$4'
          borderColor='$red6'
          borderWidth={1}
        >
          <Text color='$red11' fontSize='$3'>
            {errorMessage}
          </Text>
        </YStack>
      )}

      {/* Action Buttons */}
      <XStack gap='$3' justifyContent='flex-end' marginTop='$4'>
        <Button
          variant='outlined'
          size='$4'
          onPress={handleCancel}
          borderColor='$color6'
          color='$color11'
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          size='$4'
          onPress={handleSave}
          backgroundColor='$blue9'
          color='white'
          hoverStyle={{ backgroundColor: '$blue10' }}
          pressStyle={{ backgroundColor: '$blue8' }}
          disabled={isLoading || !title.trim()}
        >
          {isLoading ? 'Saving...' : 'Save Task'}
        </Button>
      </XStack>

      {/* Delete Button - Only show for existing tasks */}
      {taskId && (
        <XStack justifyContent='center' marginTop='$2'>
          <Button
            variant='outlined'
            size='$3'
            backgroundColor='$red2'
            borderColor='$red7'
            color='$red11'
            hoverStyle={{
              backgroundColor: '$red3',
              borderColor: '$red8',
            }}
            pressStyle={{
              backgroundColor: '$red4',
              borderColor: '$red9',
            }}
            disabled={isLoading}
            onPress={handleDelete}
          >
            Delete Task
          </Button>
        </XStack>
      )}
    </YStack>
  );
};

// Export memoized component for performance
export const TaskEditor = memo(TaskEditorComponent);
