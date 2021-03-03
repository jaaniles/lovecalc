import { Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC } from "react";
import { Hydrate } from "react-query/hydration";

import { globalStyles } from "~/design";
import { ErrorBoundary } from "~/organisms/ErrorBoundary";
import { Providers } from "~/providers/Providers";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <Head>
      <title>Next.js Boilerplate</title>
    </Head>
    <Providers>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={emotionReset} />
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Hydrate>
    </Providers>
  </ErrorBoundary>
);

// eslint-disable-next-line no-restricted-syntax
export default App;
