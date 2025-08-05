'use client';

// Import and ensure Tamagui config is loaded
import './config';

export * from '@tamagui/toast';

// Re-export Tamagui core and configuration
export * from 'tamagui';
// Task components
export { AddTaskForm, type AddTaskFormProps } from './components/AddTaskForm';
// Auth components
export { AuthForm, type AuthFormProps } from './components/AuthForm';
export {
  type AuthMode,
  AuthTabs,
  type AuthTabsProps,
} from './components/AuthTabs';
export { LogoHeader, type LogoHeaderProps } from './components/LogoHeader';
// Navigation components
export { NavBar, type NavBarProps } from './components/NavBar';
export { SideBar, type SideBarProps } from './components/SideBar';
export {
  SignOutButton,
  type SignOutButtonProps,
} from './components/SignOutButton';
export { TaskEditor, type TaskEditorProps } from './components/TaskEditor';
export { TaskItem, type TaskItemProps } from './components/TaskItem';
export { TaskList, type TaskListProps } from './components/TaskList';
export {
  UserProfile,
  type UserProfileProps,
  type UserProfileUser,
} from './components/UserProfile';
export { config } from './config';

// Hooks
export { useSidebarBehavior } from './hooks/useSidebarBehavior';

// Layout (updated exports)
export * from './layouts';
// Provider
export type { UIProviderProps } from './provider/UIProvider';
export { UIProvider } from './provider/UIProvider';
// Utilities
export * from './utils';

// Layout Context removed - state is now managed directly in MainLayout
