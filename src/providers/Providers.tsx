import { FC, ReactNode } from "react";

import {
  QueryCacheProvider,
  DarkModeProvider,
  IntlProvider,
  LocaleProvider,
  ThemeProvider,
} from "~/providers";

// Top to bottom
const providers = [
  QueryCacheProvider,
  LocaleProvider,
  DarkModeProvider,
  IntlProvider,
  ThemeProvider,
].reverse();

export const Providers: FC = ({ children }) => (
  <>
    {providers.reduce<ReactNode>(
      (acc, Curr) => (
        <Curr>{acc}</Curr>
      ),
      children,
    )}
  </>
);
