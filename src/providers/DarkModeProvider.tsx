import { get, set } from "local-storage";
import {
  useState,
  FC,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

import { LocalStorage } from "~/@types/localStorage";
import { isServerSide } from "~/paths";

export const isBrowserSchemeDark = () =>
  !isServerSide() && window.matchMedia("(prefers-color-scheme: dark)").matches;

const getCurrentLocale = () => {
  const isDarkMode = get<boolean>(LocalStorage.DARKMODE);

  if (isDarkMode === true) {
    return true;
  }

  return isBrowserSchemeDark();
};

const initialValues = false;

/**
 * Contexts
 */
const DarkModeContext = createContext<boolean>(initialValues);

type ContextStates = ((newDarkMode: boolean) => void) | null;
const UpdateDarkModeContext = createContext<ContextStates>(null);

/**
 * Hooks
 */
export const useDarkMode = () => useContext(DarkModeContext);
export const useUpdateDarkMode = () => {
  const context = useContext(UpdateDarkModeContext);

  if (context === null) {
    throw new Error("useUpdateDarkMode used outside Provider");
  }

  return context;
};

/**
 * Provider / Wrapper
 */
export const DarkModeProvider: FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialValues);

  useEffect(() => {
    setIsDarkMode(getCurrentLocale());
  }, []);

  useEffect(() => {
    set<boolean>(LocalStorage.DARKMODE, isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeChange = useCallback((newDarkMode: boolean) => {
    set<boolean>(LocalStorage.LANG, newDarkMode);
    setIsDarkMode(newDarkMode);
  }, []);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <UpdateDarkModeContext.Provider value={handleDarkModeChange}>
        {children}
      </UpdateDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};
