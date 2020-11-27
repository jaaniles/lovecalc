import { get, set } from "local-storage";
import { useState, FC, useContext, useEffect, createContext } from "react";

import { LocalStorage } from "~/@types/localStorage";
import { isServerSide } from "~/paths";

export const isBrowserSchemeDark = () =>
  !isServerSide() && window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialValues =
  get<boolean>(LocalStorage.DARKMODE) || isBrowserSchemeDark();

/**
 * Contexts
 */
const DarkModeContext = createContext<boolean>(initialValues);

type ContextStates = React.Dispatch<React.SetStateAction<boolean>> | null;
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
    set<boolean>(LocalStorage.DARKMODE, isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <UpdateDarkModeContext.Provider value={setIsDarkMode}>
        {children}
      </UpdateDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};
