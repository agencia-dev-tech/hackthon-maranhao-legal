import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const themesOptions = {
  light: 'light',
  dark: 'dark',
}

export function AppProvider({ children }) {
  const [docs, setDocs] = useState(null);

  const [theme, setTheme] = useState(themesOptions.light)

  useEffect(() => {
    window.document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <AppContext.Provider value={{
      docs,
      setDocs,
      theme, 
      setTheme
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const useAppContext = useContext(AppContext);

  return useAppContext;
}
