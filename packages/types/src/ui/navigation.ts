import type { ComponentType } from 'react';

export interface NavigationItem {
  id: string;
  label: string;
  icon: ComponentType;
  href: string;
  badge?: string | number;
  isActive?: boolean;
  children?: NavigationItem[];
}

export interface NavigationSection {
  id: string;
  title?: string;
  items: NavigationItem[];
}
