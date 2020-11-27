import { getUserLocale } from "get-user-locale";
import { set, get } from "local-storage";
import React, {
  useState,
  FC,
  useContext,
  useEffect,
  createContext,
} from "react";

import { LocalStorage } from "~/@types/localStorage";
import { Locale } from "~/@types/locale";

export const getDefaultLocale = () => {
  const locale = get<Locale>(LocalStorage.LANG);

  if (locale in Locale) {
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

const defaultLocale = getDefaultLocale();

/**
 * Contexts
 */
const LocaleContext = createContext<Locale>(defaultLocale);

type ContextStates = React.Dispatch<React.SetStateAction<Locale>> | null;
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
    set<Locale>(LocalStorage.LANG, language);
  }, [language]);

  return (
    <LocaleContext.Provider value={language}>
      <UpdateLocaleContext.Provider value={setLanguage}>
        {children}
      </UpdateLocaleContext.Provider>
    </LocaleContext.Provider>
  );
};
