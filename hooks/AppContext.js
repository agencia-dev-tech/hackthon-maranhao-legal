import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [docs, setDocs] = useState(null);

  const [isThemeDark, setIsThemeDark] = useState(false)

  useEffect(() => {
    const theme = isThemeDark ? "dark" : "light";
    window.document.documentElement.setAttribute('data-theme', theme)
  }, [isThemeDark])

  return (
    <AppContext.Provider value={{
      docs,
      setDocs,
      isThemeDark, 
      setIsThemeDark
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const useAppContext = useContext(AppContext);

  return useAppContext;
}
