import { createContext, useContext, useState, useEffect } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [docs, setDocs] = useState(null);
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [supported, setSupported] = useState(false);
  const [isContrast, setIsContrast] = useState(false);
  
  const { speak } = useSpeechSynthesis();

  function speaktext(text) {
    if (!supported) return;

    const voice = window?.speechSynthesis?.getVoices().find(item => item.name === "Google português do Brasil");

    speak({
      text: text,
      voice,
    });
  }

  useEffect(() => {
    const theme = isThemeDark ? "dark" : "light";
    window.document.documentElement.setAttribute('data-theme', theme)
  }, [isThemeDark])

  useEffect(() => {
    window.document.documentElement.setAttribute('data-theme', isContrast ? "alto-contraste" : "")
  }, [isContrast]);


  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{
      docs,
      setDocs,
      isThemeDark, 
      setIsThemeDark,
      speaktext,
      supported,
      setSupported,
      isContrast,
      setIsContrast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const useAppContext = useContext(AppContext);

  return useAppContext;
}
