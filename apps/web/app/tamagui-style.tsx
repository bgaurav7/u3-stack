'use client';

import { config } from '@u3/ui';
import { useEffect, useRef } from 'react';

export function TamaguiStyleTag() {
  const hasInjected = useRef(false);

  useEffect(() => {
    // Only inject CSS once on client side
    if (!hasInjected.current && config) {
      const css = config.getNewCSS();
      if (css) {
        // Remove any existing tamagui styles
        const existingStyle = document.getElementById('tamagui-css');
        if (existingStyle) {
          existingStyle.remove();
        }

        // Create and inject new style element
        const style = document.createElement('style');
        style.id = 'tamagui-css';
        style.textContent = css;
        document.head.appendChild(style);

        hasInjected.current = true;
      }
    }
  }, []);

  // Return null to avoid any hydration mismatches
  return null;
}
