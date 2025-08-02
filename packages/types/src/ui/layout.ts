// Simplified sidebar state enum
export type SidebarMode = 'hidden' | 'collapsed' | 'expanded';

export interface LayoutState {
  sidebarMode: SidebarMode;
  isMobile: boolean;
  currentRoute: string;
  theme: 'light' | 'dark';
}

export interface LayoutConfig {
  sidebarWidth: number;
  navBarHeight: number;
  contentPadding: {
    mobile: string;
    desktop: string;
  };
  maxContentWidth: string;
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
  };
}
