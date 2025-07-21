import type { AppProps } from 'next/app';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Component {...pageProps} />
    </TamaguiProvider>
  );
}
