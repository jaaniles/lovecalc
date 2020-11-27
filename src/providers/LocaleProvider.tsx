import { getUserLocale } from "get-user-locale";
import { set, get } from "local-storage";
import React, {
  useState,
  FC,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

import { LocalStorage } from "~/@types/localStorage";
import { Locale } from "~/@types/locale";

export const getDefaultLocale = () => {
  const locale = get<Locale>(LocalStorage.LANG);

  if (Object.values(Locale).includes(locale)) {
    return locale;
  }

  switch (getUserLocale()) {
    case "fi":
      return Locale.FI;

    case "en":
    case "en-US":
    case "en-GB":
    default:
      return Locale.EN;
  }
};

const defaultLocale = Locale.EN;

/**
 * Contexts
 */
const LocaleContext = createContext<Locale>(defaultLocale);

type ContextStates = ((newLanguage: Locale) => void) | null;
const UpdateLocaleContext = createContext<ContextStates>(null);

/**
 * Hooks
 */
export const useLocale = () => useContext(LocaleContext);
export const useUpdateLocale = () => {
  const context = useContext(UpdateLocaleContext);

  if (context === null) {
    throw new Error("useUpdateLocale used outside Provider");
  }

  return context;
};

/**
 * Provider / Wrapper
 */
export const LocaleProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLanguage(getDefaultLocale());
  }, []);

  const handleLanguageChange = useCallback((newLanguage: Locale) => {
    set<Locale>(LocalStorage.LANG, newLanguage);
    setLanguage(newLanguage);
  }, []);

  return (
    <LocaleContext.Provider value={language}>
      <UpdateLocaleContext.Provider value={handleLanguageChange}>
        {children}
      </UpdateLocaleContext.Provider>
    </LocaleContext.Provider>
  );
};
