import { FC, ReactNode } from "react";

import { QueryCacheProvider } from "./QueryCacheProvider";

import { DarkModeProvider } from "~/providers/DarkModeProvider";
import { IntlProvider } from "~/providers/IntlProvider";
import { LocaleProvider } from "~/providers/LocaleProvider";
import { ThemeProvider } from "~/providers/ThemeProvider";

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
