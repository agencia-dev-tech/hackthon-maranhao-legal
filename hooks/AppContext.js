import { createContext, useContext, useState, useEffect } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [docs, setDocs] = useState(null);
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [supported, setSupported] = useState();

  const { speak } = useSpeechSynthesis();

  function speaktext(text) {
    if (!supported) return;

    const voice = window?.speechSynthesis?.getVoices().find(item => item.name === "Google português do Brasil");

    speak({
      text: text,
      voice,
    });
  }
  // speaktext("testa")

  useEffect(() => {
    const theme = isThemeDark ? "dark" : "light";
    window.document.documentElement.setAttribute('data-theme', theme)
  }, [isThemeDark])

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
      setSupported
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const useAppContext = useContext(AppContext);

  return useAppContext;
}
