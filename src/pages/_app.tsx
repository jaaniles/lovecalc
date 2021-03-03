import { Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import { AppProps } from "next/app";
import React, { FC } from "react";
import { defineMessages, useIntl } from "react-intl";
import { Hydrate } from "react-query/hydration";

import { globalStyles } from "~/design";
import { HeaderTags } from "~/molecules/HeaderTags";
import { ErrorBoundary } from "~/organisms/ErrorBoundary";
import { Providers } from "~/providers/Providers";

const messages = defineMessages({
  headTitle: {
    id: "app.head.title",
    defaultMessage: "Next.js Boilerplate",
  },
  headDescription: {
    id: "app.head.description",
    defaultMessage: "Boilerplate with a simple reddit searcher",
  },
});

const Head = () => {
  const intl = useIntl();

  return (
    <HeaderTags
      hideFix
      title={intl.formatMessage(messages.headTitle)}
      description={intl.formatMessage(messages.headDescription)}
    />
  );
};

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <Providers>
      <Hydrate state={pageProps.dehydratedState}>
        <Head />
        <Global styles={emotionReset} />
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Hydrate>
    </Providers>
  </ErrorBoundary>
);

// eslint-disable-next-line no-restricted-syntax
export default App;
