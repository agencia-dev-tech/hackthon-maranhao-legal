import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [docs, setDocs] = useState(null);

  return (
    <AppContext.Provider value={{
      docs,
      setDocs
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const useAppContext = useContext(AppContext);

  return useAppContext;
}