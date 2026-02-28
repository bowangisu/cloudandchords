import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "en" | "zh";

export interface BilingualText {
  en: string;
  zh: string;
}

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("bc2c-lang");
    return saved === "zh" || saved === "en" ? saved : "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("bc2c-lang", newLang);
  };

  const t = (en: string, zh: string) => (lang === "en" ? en : zh);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
