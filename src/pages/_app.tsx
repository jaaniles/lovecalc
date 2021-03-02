import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import emotionReset from 'emotion-reset';

import { globalStyles } from "~/design";
import { ErrorBoundary } from "~/organisms/ErrorBoundary";
import { Providers } from "~/providers/Providers";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <Head>
      <title>Next.js Boilerplate</title>
    </Head>
    <Providers>
      <Global styles={emotionReset} />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Providers>
  </ErrorBoundary>
);

// eslint-disable-next-line no-restricted-syntax
export default App;
