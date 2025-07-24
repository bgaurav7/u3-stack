'use client';

import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';
import '@tamagui/polyfill-dev';

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { config } from '@u3/config';
import Head from 'next/head';
import { useServerInsertedHTML } from 'next/navigation';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from './index';

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // React Native Web specific API
    const rnwStyle = StyleSheet as any;
    const sheet = rnwStyle.getSheet
      ? rnwStyle.getSheet()
      : { id: 'rnw-styles', textContent: '' };
    return (
      <>
        <Head>
          <link rel='stylesheet' href='/tamagui.css' />
          <style id={sheet.id}>{sheet.textContent}</style>
          <style id='tamagui-generated'>{config.getCSS()}</style>
          <style id='tamagui-exclude'>
            {config.getCSS({
              exclude:
                process.env.NODE_ENV === 'production' ? 'design-system' : null,
            })}
          </style>
        </Head>
        <Script id='tamagui-init' strategy='beforeInteractive'>
          {`document.documentElement.classList.add('t_unmounted')`}
        </Script>
      </>
    );
  });

  return (
    <NextThemeProvider
      skipNextHead
      defaultTheme='light'
      onChangeTheme={(next: string) => {
        // Use type assertion with the specific expected type
        setTheme(next as 'light' | 'dark');
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme || 'light'}>
        {children}
      </Provider>
    </NextThemeProvider>
  );
};
