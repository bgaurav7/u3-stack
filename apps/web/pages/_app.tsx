import { config } from '@u3/ui';
import type { AppProps } from 'next/app';
import { TamaguiProvider } from 'tamagui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={config}>
      <Component {...pageProps} />
    </TamaguiProvider>
  );
}
