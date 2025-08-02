'use client';

import { config } from '@u3/ui';

export function TamaguiStyleTag() {
  // Ensure config is properly loaded before getting CSS
  if (!config) {
    console.warn('Tamagui config not loaded - ensure @u3/ui package is properly imported and configured');
    return null;
  }

  return (
    <style
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Tamagui requires this for CSS injection
      dangerouslySetInnerHTML={{
        __html: config.getNewCSS(),
      }}
    />
  );
}
