/**
 * EditTaskSheet Component - Task editing overlay with platform-specific behavior
 *
 * This component provides a sheet overlay for editing tasks with platform-specific
 * presentation (modal on web, sliding panel on mobile). It includes proper backdrop
 * handling, focus management, and z-index layering.
 *
 * Requirements addressed:
 * - 3.1: Sheet layout (modal or sliding panel) for editing
 * - 4.1: Render properly using Tamagui components with responsive design
 * - 4.2: Cross-platform touch targets and accessibility
 * - 4.3: Platform-specific presentation behavior
 */

import type { Todo, UpdateTodoInput } from '@u3/types';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Input,
  Label,
  ScrollView,
  Switch,
  Text,
  TextArea,
  useMedia,
  XStack,
  YStack,
} from 'tamagui';
import { Sheet } from './Sheet';
import { SheetHeader } from './SheetHeader';

/**
 * Props for the EditTaskSheet component
 */
export interface EditTaskSheetProps {
  /**
   * Task data to edit (null when no task is selected)
   */
  task: Todo | null;
  /**
   * Whether the sheet is currently open
   */
  isOpen: boolean;
  /**
   * Callback when the sheet should be closed
   */
  onClose: () => void;
  /**
   * Callback when task should be saved with updated data
   */
  onSave: (updatedTask: UpdateTodoInput) => Promise<void>;
  /**
   * Callback when task should be deleted
   */
  onDelete: (taskId: string) => Promise<void>;
  /**
   * Whether any async operation is in progress
   */
  isLoading?: boolean;
}

/**
 * Internal state interface for the edit form
 */
export interface EditTaskFormState {
  /**
   * Task title field value
   */
  title: string;
  /**
   * Task description field value
   */
  description: string;
  /**
   * Task completion status
   */
  completed: boolean;
  /**
   * Whether form is currently submitting
   */
  isSubmitting: boolean;
  /**
   * Form validation error message
   */
  error: string | null;
}

/**
 * EditTaskSheet component - Platform-aware task editing overlay
 */
export const EditTaskSheet: React.FC<EditTaskSheetProps> = ({
  task,
  isOpen,
  onClose,
  onSave,
  onDelete,
  isLoading: _isLoading = false,
}) => {
  // Use Tamagui's useMedia hook for responsive behavior
  const media = useMedia();
  const isSmallScreen = !media.gtSm; // gtSm is minWidth: 769px

  // Form state management
  const [formState, setFormState] = useState<EditTaskFormState>({
    title: '',
    description: '',
    completed: false,
    isSubmitting: false,
    error: null,
  });

  // Initialize form state when task changes
  useEffect(() => {
    if (task) {
      setFormState({
        title: task.title,
        description: task.description || '',
        completed: task.completed,
        isSubmitting: false,
        error: null,
      });
    } else {
      // Reset form when no task is selected
      setFormState({
        title: '',
        description: '',
        completed: false,
        isSubmitting: false,
        error: null,
      });
    }
  }, [task]);

  // Handle form field changes
  const handleTitleChange = useCallback((title: string) => {
    setFormState(prev => ({ ...prev, title, error: null }));
  }, []);

  const handleDescriptionChange = useCallback((description: string) => {
    setFormState(prev => ({ ...prev, description, error: null }));
  }, []);

  const handleCompletedChange = useCallback((completed: boolean) => {
    setFormState(prev => ({ ...prev, completed, error: null }));
  }, []);

  // Handle save operation
  const handleSave = useCallback(async () => {
    if (!task) return;

    // Validate form
    if (!formState.title.trim()) {
      setFormState(prev => ({ ...prev, error: 'Task title is required' }));
      return;
    }

    try {
      setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

      // Prepare update data
      const updateData: UpdateTodoInput = {
        id: task.id,
        title: formState.title.trim(),
        description: formState.description.trim() || undefined,
        completed: formState.completed,
      };

      // Call the save handler
      await onSave(updateData);

      // Close the sheet on successful save
      onClose();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to save task';
      setFormState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [task, formState, onSave, onClose]);

  // Handle delete operation with confirmation
  const handleDelete = useCallback(async () => {
    if (!task) return;

    // Show confirmation dialog
    const confirmed = window.confirm(
      `Are you sure you want to delete the task "${task.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

      // Call the delete handler
      await onDelete(task.id);

      // Close the sheet on successful delete
      onClose();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to delete task';
      setFormState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [task, onDelete, onClose]);

  // Handle close with unsaved changes check
  const handleClose = useCallback(() => {
    // Clear any error state when closing
    setFormState(prev => ({ ...prev, error: null }));
    onClose();
  }, [onClose]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key to close
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }

      // Cmd/Ctrl + S to save
      if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault();
        handleSave();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose, handleSave]);

  // Focus management - focus first input when sheet opens
  useEffect(() => {
    if (isOpen && task) {
      // Small delay to ensure sheet animation completes
      const timer = setTimeout(() => {
        const titleInput = document.getElementById('edit-task-title');
        if (titleInput) {
          titleInput.focus();
        }
      }, 150);

      return () => clearTimeout(timer);
    }
    // No cleanup needed if conditions aren't met
    return undefined;
  }, [isOpen, task]);

  // Don't render if no task is provided
  if (!task) {
    return null;
  }

  // Calculate content height for mobile
  const contentHeight = isSmallScreen ? 500 : undefined;

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} contentHeight={contentHeight}>
      {/* Sheet Header */}
      <SheetHeader
        title='Edit Task'
        onClose={handleClose}
        isSmallScreen={isSmallScreen}
      />

      {/* Sheet Content - Edit Task Form */}
      <ScrollView flex={1} padding='$4' showsVerticalScrollIndicator={false}>
        <YStack gap='$4'>
          {/* Task ID Display (read-only) */}
          <YStack gap='$2'>
            <Label
              htmlFor='edit-task-id'
              fontSize='$3'
              fontWeight='500'
              color='$color11'
            >
              Task ID
            </Label>
            <Text id='edit-task-id' fontSize='$3' color='$color10'>
              {task.id}
            </Text>
          </YStack>

          {/* Title Field */}
          <YStack gap='$2'>
            <Label
              htmlFor='edit-task-title'
              fontSize='$3'
              fontWeight='500'
              color='$color11'
            >
              Title *
            </Label>
            <Input
              id='edit-task-title'
              value={formState.title}
              onChangeText={handleTitleChange}
              placeholder='Enter task title'
              size='$4'
              borderColor={
                formState.error && !formState.title.trim() ? '$red7' : '$color6'
              }
              focusStyle={{
                borderColor:
                  formState.error && !formState.title.trim()
                    ? '$red8'
                    : '$blue8',
              }}
              // Accessibility
              accessibilityLabel='Task title'
              accessibilityHint='Enter the title for this task'
              // Auto-focus on mobile
              autoFocus={isSmallScreen}
            />
            {formState.error && !formState.title.trim() && (
              <Text color='$red11' fontSize='$2'>
                Task title is required
              </Text>
            )}
          </YStack>

          {/* Description Field */}
          <YStack gap='$2'>
            <Label
              htmlFor='edit-task-description'
              fontSize='$3'
              fontWeight='500'
              color='$color11'
            >
              Description
            </Label>
            <TextArea
              id='edit-task-description'
              value={formState.description}
              onChangeText={handleDescriptionChange}
              placeholder='Enter task description (optional)'
              size='$4'
              minHeight={100}
              maxHeight={200}
              borderColor='$color6'
              focusStyle={{ borderColor: '$blue8' }}
              // Accessibility
              accessibilityLabel='Task description'
              accessibilityHint='Enter an optional description for this task'
              // Text area specific props
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
                htmlFor='edit-task-completed'
                fontSize='$3'
                fontWeight='500'
                color='$color11'
              >
                Mark as completed
              </Label>
              <Text fontSize='$2' color='$color10' marginTop='$1'>
                {formState.completed
                  ? 'This task is marked as completed'
                  : 'This task is pending completion'}
              </Text>
            </YStack>
            <Switch
              id='edit-task-completed'
              checked={formState.completed}
              onCheckedChange={handleCompletedChange}
              size='$3'
              // Accessibility
              accessibilityLabel={`Mark task as ${formState.completed ? 'pending' : 'completed'}`}
              accessibilityHint='Toggle the completion status of this task'
            />
          </XStack>

          {/* Task Metadata (read-only) */}
          <YStack gap='$2' marginTop='$2'>
            <Text fontSize='$2' color='$color9' fontWeight='500'>
              Task Information
            </Text>
            <YStack gap='$1'>
              <Text fontSize='$2' color='$color10'>
                Created: {new Date(task.createdAt).toLocaleString()}
              </Text>
              {task.updatedAt &&
                new Date(task.updatedAt).getTime() !==
                  new Date(task.createdAt).getTime() && (
                  <Text fontSize='$2' color='$color10'>
                    Last updated: {new Date(task.updatedAt).toLocaleString()}
                  </Text>
                )}
            </YStack>
          </YStack>

          {/* Error Message */}
          {formState.error && (
            <YStack
              padding='$3'
              backgroundColor='$red2'
              borderRadius='$4'
              borderColor='$red6'
              borderWidth={1}
            >
              <Text color='$red11' fontSize='$3'>
                {formState.error}
              </Text>
            </YStack>
          )}

          {/* Action Buttons */}
          <XStack gap='$3' justifyContent='flex-end' marginTop='$4'>
            <Button
              variant='outlined'
              size='$4'
              onPress={handleClose}
              borderColor='$color6'
              color='$color11'
              disabled={formState.isSubmitting}
              // Accessibility
              accessibilityLabel='Cancel editing'
              accessibilityHint='Close the edit form without saving changes'
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
              disabled={formState.isSubmitting || !formState.title.trim()}
              // Accessibility
              accessibilityLabel='Save task changes'
              accessibilityHint='Save the changes made to this task'
            >
              {formState.isSubmitting ? 'Saving...' : 'Save Task'}
            </Button>
          </XStack>

          {/* Delete Button - Separate and prominent */}
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
              disabled={formState.isSubmitting}
              onPress={handleDelete}
              // Accessibility
              accessibilityLabel='Delete task'
              accessibilityHint='Permanently delete this task'
            >
              Delete Task
            </Button>
          </XStack>

          {/* Bottom padding for mobile keyboards */}
          {isSmallScreen && <YStack height='$8' />}
        </YStack>
      </ScrollView>
    </Sheet>
  );
};
