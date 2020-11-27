import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { FC } from "react";

import { globalStyles } from "~/design";
import { emotionReset } from "~/emotionReset";
import { ErrorBoundary } from "~/organisms/ErrorBoundary";
import { Providers } from "~/providers/Providers";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <Providers>
      <Global styles={emotionReset} />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Providers>
  </ErrorBoundary>
);

export default App;
