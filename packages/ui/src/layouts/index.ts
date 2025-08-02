// Layout components for different page types

// Authentication layout
export {
  AuthLayout,
  type AuthLayoutProps,
} from './AuthLayout';

// Home/Landing layout
export {
  HomeLayout,
  type HomeLayoutProps,
} from './HomeLayout';

// Other layouts
export {
  LoadingLayout,
  type LoadingLayoutProps,
} from './LoadingLayout';

export type { PageNotFoundProps } from './PageNotFound';
export { PageNotFound } from './PageNotFound';

export {
  type ProfileUser,
  UserProfileLayout,
  type UserProfileLayoutProps,
} from './UserProfileLayout';
