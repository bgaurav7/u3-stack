import { TamaguiProvider } from '@tamagui/core';
import type { AppProps } from 'next/app';
import tamaguiConfig from '../tamagui.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Component {...pageProps} />
    </TamaguiProvider>
  );
}
