'use client';

import {
  type AuthProvider,
  type Todo,
  todoFromApi,
  type UpdateTodoInput,
} from '@u3/types';
import {
  AddTaskForm,
  LoadingLayout,
  MainLayout,
  TaskEditor,
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

  // State for the currently edited task (for the sheet)
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  // Fetch a single task by ID for editing
  const {
    data: editingTaskData,
    isLoading: isEditingTaskLoading,
    error: editingTaskError,
    refetch: refetchEditingTask,
  } = trpc.todo.getById.useQuery(
    { id: editingTaskId! },
    {
      enabled: !!editingTaskId,
      retry: (failureCount, error) => {
        if (error?.data?.code === 'NOT_FOUND') return false;
        return failureCount < 1;
      },
      onError: error => {
        // If task is not found, navigate back to task list
        if (error?.data?.code === 'NOT_FOUND') {
          console.warn(
            `Task ${editingTaskId} not found, navigating back to task list`
          );
          authProvider.navigate('/t');
          setEditingTaskId(null);
        }
      },
    }
  );

  // Mutations for update and delete
  const updateTaskMutation = trpc.todo.update.useMutation({
    onSuccess: () => {
      refetchTasks();
      refetchEditingTask();
      setEditingTaskId(null);
    },
  });
  const deleteTaskMutation = trpc.todo.delete.useMutation({
    onSuccess: () => {
      refetchTasks();
      setEditingTaskId(null);
    },
  });

  // Handlers for TaskEditor
  const handleTaskSave = useCallback(
    async (data: UpdateTodoInput) => {
      try {
        await updateTaskMutation.mutateAsync(data);
      } catch (error) {
        console.error('Failed to update task:', error);
        throw new Error('Failed to update task. Please try again.');
      }
    },
    [updateTaskMutation]
  );

  const handleTaskDelete = useCallback(
    async (id: string) => {
      try {
        await deleteTaskMutation.mutateAsync({ id });
      } catch (error) {
        console.error('Failed to delete task:', error);
        throw new Error('Failed to delete task. Please try again.');
      }
    },
    [deleteTaskMutation]
  );

  const handleTaskCancel = useCallback(() => {
    setEditingTaskId(null);
  }, []);

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

  // Task selection handler - open the editor sheet
  const handleTaskSelect = useCallback(
    (task: Todo) => {
      setEditingTaskId(task.id);
      authProvider.navigate(`/t/${task.id}`);
    },
    [authProvider]
  );

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

  // Task save and delete handlers are now handled in the TaskEditor component via the sheet system

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
      title='Task List'
      user={sidebarUser}
      onSignOut={handleSignOut}
      currentPath={currentPath}
      onSheetClose={handleSheetClose}
      onNavigate={handleNavigate}
      sheetHeaderTitle={editingTaskId ? 'Edit Task' : undefined}
      sheetContent={
        editingTaskId ? (
          <TaskEditor
            taskId={editingTaskId}
            task={editingTaskData ? todoFromApi(editingTaskData) : undefined}
            isLoading={
              isEditingTaskLoading ||
              updateTaskMutation.isLoading ||
              deleteTaskMutation.isLoading
            }
            error={
              editingTaskError ? handleTRPCError(editingTaskError) : undefined
            }
            onSave={handleTaskSave}
            onDelete={handleTaskDelete}
            onCancel={handleTaskCancel}
          />
        ) : null
      }
    >
      <YStack flex={1} backgroundColor='$background' position='relative'>
        {/* Main container with responsive design */}
        <YStack
          flex={1}
          maxWidth='100%'
          width='100%'
          paddingHorizontal='$4'
          paddingTop='$4'
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
          {/* Task List Container - Scrollable content area with bottom padding for form */}
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
        </YStack>

        {/* Sticky Add Task Form Container - Fixed at bottom of ContentLayout */}
        <YStack
          position='absolute'
          bottom={0}
          left={0}
          right={0}
          backgroundColor='$background'
          borderTopWidth={1}
          borderTopColor='$borderColor'
          paddingHorizontal='$4'
          paddingVertical='$3'
          // Safe area handling for mobile platforms
          $gtSm={{
            paddingHorizontal: '$6',
          }}
          $gtMd={{
            paddingHorizontal: '$8',
          }}
          // Add shadow for better separation
          shadowColor='$shadowColor'
          shadowOffset={{ width: 0, height: -2 }}
          shadowOpacity={0.1}
          shadowRadius={4}
          elevation={4}
        >
          <YStack
            maxWidth='100%'
            width='100%'
            $gtSm={{
              maxWidth: 1200,
              alignSelf: 'center',
            }}
          >
            <AddTaskForm
              onSubmit={handleAddTask}
              isLoading={createTaskMutation.isLoading}
              placeholder='Enter task title...'
              buttonText='Add Task'
            />
          </YStack>
        </YStack>
      </YStack>
    </MainLayout>
  );
}
