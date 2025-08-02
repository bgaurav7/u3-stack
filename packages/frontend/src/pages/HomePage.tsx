import { HomeLayout, type HomeLayoutProps } from '@u3/ui';
import type React from 'react';

/**
 * Props for the HomePage component
 * Extends HomeLayoutProps for UI consistency
 */
export interface HomePageProps extends HomeLayoutProps {
  // No additional props needed - all UI props come from HomeLayoutProps
}

/**
 * Cross-platform home page business logic component
 * Delegates UI rendering to HomeLayout from @u3/ui
 * Handles any business logic and state management for the landing page
 */
export function HomePage({
  title = 'Welcome to U3-Stack',
  subtitle = 'A modern, type-safe, scalable monorepo stack for Android, iOS, and Web applications.',
  buttonText = 'Get Started - Sign In',
  onSignInClick,
  style,
}: HomePageProps): React.ReactElement {
  return (
    <HomeLayout
      title={title}
      subtitle={subtitle}
      buttonText={buttonText}
      onSignInClick={onSignInClick}
      style={style}
    />
  );
}
