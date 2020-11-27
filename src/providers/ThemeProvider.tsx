import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react";
import { FC, useMemo } from "react";

import { lightTheme, darkTheme } from "~/design";
import { useDarkMode } from "~/providers/DarkModeProvider";

export const ThemeProvider: FC = ({ children }) => {
  const isDarkMode = useDarkMode();

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [
    isDarkMode,
  ]);

  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>;
};
