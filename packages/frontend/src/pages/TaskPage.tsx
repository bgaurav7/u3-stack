'use client';

import {
  type AuthProvider,
  type Todo,
  todoFromApi,
  type UpdateTodoInput,
} from '@u3/types';
import {
  AddTaskForm,
  EditTaskSheet,
  LoadingLayout,
  MainLayout,
  TaskList,
  YStack,
} from '@u3/ui';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { handleTRPCError, trpc } from '../api';
import { useCurrentUser } from '../hooks/useAuthState';

/**
 * Props for the TaskPage business logic component
 */
export interface TaskPageProps {
  /**
   * Authentication provider for the current platform
   */
  authProvider: AuthProvider;
  /**
   * Current path/route for sheet detection and navigation
   */
  currentPath: string;
  /**
   * Callback when user signs out
   */
  onSignOut?: () => void;
  /**
   * Custom styling passed to UI component
   */
  style?: Record<string, unknown>;
  /**
   * Custom loading component passed to UI component
   */
  loadingComponent?: React.ReactNode;
}

/**
 * Internal state interface for TaskPage component
 */
export interface TaskPageState {
  /**
   * Currently selected task for editing (null when no task is selected)
   */
  selectedTask: Todo | null;
  /**
   * Whether the edit sheet overlay is currently open
   */
  isEditSheetOpen: boolean;
  /**
   * Loading state for async operations
   */
  isLoading: boolean;
  /**
   * Error message for display to user (null when no error)
   */
  error: string | null;
}

/**
 * API response types for task operations
 */
export interface TasksApiResponse {
  /**
   * Array of tasks fetched from the API
   */
  tasks: Todo[] | undefined;
  /**
   * Loading state for tasks fetch operation
   */
  isLoading: boolean;
  /**
   * Error state for tasks fetch operation
   */
  error: unknown;
  /**
   * Function to refetch tasks
   */
  refetch: () => void;
}

/**
 * Error state types for better error handling
 */
export interface TasksErrorState {
  /**
   * User-friendly error message
   */
  message: string;
  /**
   * Whether the error is retryable
   */
  isRetryable: boolean;
  /**
   * Function to retry the failed operation
   */
  retry?: () => void;
}

/**
 * Cross-platform task page business logic component
 * Handles authentication state and delegates UI rendering to @u3/ui
 * This is the main protected task management content
 *
 * Requirements addressed:
 * - 1.1: Fetch and display all tasks using todoRouter.getAll API
 * - 4.1: Render properly using Tamagui components with responsive design
 * - 5.1: Use tRPC hooks for all API interactions with full type safety
 */
export function TaskPage({
  authProvider,
  currentPath,
  onSignOut,
  style,
  loadingComponent,
}: TaskPageProps) {
  const { user, isLoading, isAuthenticated } = useCurrentUser(authProvider);

  // tRPC API hooks for task operations
  const {
    data: tasksApiResponse,
    isLoading: isTasksLoading,
    error: tasksError,
    refetch: refetchTasks,
  } = trpc.todo.list.useQuery(undefined, {
    enabled: isAuthenticated, // Only fetch when authenticated
  });

  // Transform API response (string dates) to internal format (Date objects)
  const tasks = tasksApiResponse?.map(todoFromApi);

  const createTaskMutation = trpc.todo.create.useMutation({
    onSuccess: () => {
      // Invalidate and refetch tasks after successful creation
      refetchTasks();
    },
  });

  const updateTaskMutation = trpc.todo.update.useMutation({
    onSuccess: () => {
      // Invalidate and refetch tasks after successful update
      refetchTasks();
      handleEditSheetClose();
    },
  });

  const deleteTaskMutation = trpc.todo.delete.useMutation({
    onSuccess: () => {
      // Invalidate and refetch tasks after successful deletion
      refetchTasks();
      handleEditSheetClose();
    },
  });

  // Component state management for task operations
  const [taskState, setTaskState] = useState<TaskPageState>({
    selectedTask: null,
    isEditSheetOpen: false,
    isLoading: false,
    error: null,
  });

  // Handle sheet close navigation
  const handleSheetClose = useCallback(() => {
    authProvider.navigate('/t');
  }, [authProvider]);

  // Handle navigation updates
  const handleNavigate = useCallback(
    (href: string) => {
      authProvider.navigate(href);
    },
    [authProvider]
  );

  // Task selection handler - opens edit sheet
  const handleTaskSelect = useCallback((task: Todo) => {
    setTaskState(prev => ({
      ...prev,
      selectedTask: task,
      isEditSheetOpen: true,
      error: null,
    }));
  }, []);

  // Add task handler using tRPC mutation
  const handleAddTask = useCallback(
    async (title: string) => {
      if (!title.trim()) {
        throw new Error('Task title is required');
      }

      try {
        await createTaskMutation.mutateAsync({
          title: title.trim(),
          description: '',
        });
      } catch (error) {
        console.error('Failed to create task:', error);
        throw new Error('Failed to create task. Please try again.');
      }
    },
    [createTaskMutation]
  );

  // Edit sheet handlers
  const handleEditSheetClose = useCallback(() => {
    setTaskState(prev => ({
      ...prev,
      selectedTask: null,
      isEditSheetOpen: false,
      error: null,
    }));
  }, []);

  // Task save handler using tRPC mutation
  const handleTaskSave = useCallback(
    async (updatedTask: UpdateTodoInput) => {
      try {
        await updateTaskMutation.mutateAsync(updatedTask);
      } catch (error) {
        console.error('Failed to update task:', error);
        throw new Error('Failed to update task. Please try again.');
      }
    },
    [updateTaskMutation]
  );

  // Task delete handler using tRPC mutation
  const handleTaskDelete = useCallback(
    async (taskId: string) => {
      try {
        await deleteTaskMutation.mutateAsync({ id: taskId });
      } catch (error) {
        console.error('Failed to delete task:', error);
        throw new Error('Failed to delete task. Please try again.');
      }
    },
    [deleteTaskMutation]
  );

  // Handle sign out
  const handleSignOut = useCallback(async () => {
    try {
      await authProvider.signOut();
      onSignOut?.();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }, [authProvider, onSignOut]);

  // Redirect to auth if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      authProvider.navigate('/auth');
    }
  }, [isLoading, isAuthenticated, authProvider]);

  // Show loading state
  if (isLoading) {
    return <LoadingLayout loadingComponent={loadingComponent} style={style} />;
  }

  // If not authenticated, return null (redirect will handle navigation)
  if (!isAuthenticated) {
    return null;
  }

  // Transform user data for sidebar
  const sidebarUser = user
    ? {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    : null;

  // Show task management interface using MainLayout
  return (
    <MainLayout
      title='Tasks'
      scrollable={true}
      user={sidebarUser}
      onSignOut={handleSignOut}
      // Enhanced with sheet support
      currentPath={currentPath}
      onSheetClose={handleSheetClose}
      onNavigate={handleNavigate}
    >
      <YStack flex={1} backgroundColor='$background' {...style}>
        {/* Main container with responsive design */}
        <YStack
          flex={1}
          maxWidth='100%'
          width='100%'
          paddingHorizontal='$4'
          paddingTop='$4'
          paddingBottom='$6'
          gap='$4'
          // Safe area handling for mobile platforms
          $gtSm={{
            maxWidth: 1200,
            alignSelf: 'center',
            paddingHorizontal: '$6',
          }}
          $gtMd={{
            paddingHorizontal: '$8',
          }}
        >
          {/* Task List Container - Scrollable content area */}
          <YStack
            flex={1}
            gap='$3'
            paddingBottom='$20' // Space for sticky form
          >
            <TaskList
              tasks={tasks}
              isLoading={isTasksLoading}
              error={tasksError ? handleTRPCError(tasksError) : null}
              isRetryable={!!tasksError}
              onRetry={tasksError ? refetchTasks : undefined}
              onTaskClick={handleTaskSelect}
            />
          </YStack>

          {/* Sticky Add Task Form Container - Fixed at bottom */}
          <YStack
            position='absolute'
            bottom='$4'
            left='$4'
            right='$4'
            // Responsive positioning
            $gtSm={{
              left: '$6',
              right: '$6',
              maxWidth: 1200,
              alignSelf: 'center',
            }}
            $gtMd={{
              left: '$8',
              right: '$8',
            }}
          >
            <AddTaskForm
              onSubmit={handleAddTask}
              isLoading={createTaskMutation.isLoading}
              placeholder='Enter task title...'
              buttonText='Add Task'
              showValidation={true}
            />
          </YStack>

          {/* Edit Task Sheet Overlay - Modal/sliding panel */}
          <EditTaskSheet
            task={taskState.selectedTask}
            isOpen={taskState.isEditSheetOpen}
            onClose={handleEditSheetClose}
            onSave={handleTaskSave}
            onDelete={handleTaskDelete}
            isLoading={
              updateTaskMutation.isLoading || deleteTaskMutation.isLoading
            }
          />
        </YStack>
      </YStack>
    </MainLayout>
  );
}
