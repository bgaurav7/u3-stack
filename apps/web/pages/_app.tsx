import { config } from '@u3/ui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { TamaguiProvider } from 'tamagui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Tamagui requires this for CSS injection
          dangerouslySetInnerHTML={{
            __html: config.getNewCSS(),
          }}
        />
      </Head>
      <TamaguiProvider config={config}>
        <Component {...pageProps} />
      </TamaguiProvider>
    </>
  );
}
