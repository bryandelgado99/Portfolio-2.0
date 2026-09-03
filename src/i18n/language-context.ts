import { createContext } from "react";
import type { Content, Lang } from "../data/content";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Content;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
