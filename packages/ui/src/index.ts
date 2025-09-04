'use client';

// Import and ensure Tamagui config is loaded
import './config';

// Export Tamagui toast (this is a utility, not a primitive)
export * from '@tamagui/toast';

// Export our themed primitives (NO raw Tamagui exports)
export * from './primitives';

// Export configuration
export { config } from './config';

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

// Hooks
export { useSidebarBehavior } from './hooks/useSidebarBehavior';

// Layout (updated exports)
export * from './layouts';
// Provider
export type { UIProviderProps } from './provider/UIProvider';
export { UIProvider } from './provider/UIProvider';

// Theme components
export { ThemeProvider, useTheme } from './components/ThemeProvider';
export { ThemeToggle, type ThemeToggleProps } from './components/ThemeToggle';
// Utilities
export * from './utils';
