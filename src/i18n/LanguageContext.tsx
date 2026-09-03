import { useCallback, useEffect, useMemo, useState } from "react";
import { content, type Lang } from "../data/content";
import { LanguageContext, type LanguageContextValue } from "./language-context";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("lang");
  if (stored === "es" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem("lang", next);
    } catch {
      // localStorage puede no estar disponible (SSR/privado); ignorar.
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "es" ? "en" : "es";
      try {
        window.localStorage.setItem("lang", next);
      } catch {
        // ignorar
      }
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: content[lang] }),
    [lang, setLang, toggleLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
