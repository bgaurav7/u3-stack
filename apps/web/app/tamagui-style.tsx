'use client';

import { config } from '@u3/ui';
import React from 'react';

export function TamaguiStyleTag() {
  return (
    <style
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Tamagui requires this for CSS injection
      dangerouslySetInnerHTML={{
        __html: config.getNewCSS(),
      }}
    />
  );
}
