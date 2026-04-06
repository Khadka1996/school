"use client";

import { useSiteStore } from "@/store/useSiteStore";

export function useLanguage() {
  const language = useSiteStore((state) => state.language);
  const setLanguage = useSiteStore((state) => state.setLanguage);
  const toggleLanguage = useSiteStore((state) => state.toggleLanguage);

  const isNepali = language === "np";

  const pick = (english: string, nepali: string) => (isNepali ? nepali : english);

  return {
    language,
    isNepali,
    setLanguage,
    toggleLanguage,
    pick,
  };
}
