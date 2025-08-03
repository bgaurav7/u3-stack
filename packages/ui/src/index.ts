'use client';

// Import and ensure Tamagui config is loaded
import './config';

export * from '@tamagui/toast';

// Re-export Tamagui core and configuration
export * from 'tamagui';
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
export {
  UserProfile,
  type UserProfileProps,
  type UserProfileUser,
} from './components/UserProfile';
export { config } from './config';

// Layout (updated exports)
export * from './layouts';

// Provider
export type { UIProviderProps } from './provider/UIProvider';
export { UIProvider } from './provider/UIProvider';

// Layout Context removed - state is now managed directly in MainLayout
