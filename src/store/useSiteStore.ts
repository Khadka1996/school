import { create } from "zustand";
import { persist } from "zustand/middleware";

type NoticeFilter = "all" | "exam" | "holiday" | "event" | "announcement";
type Language = "en" | "np";

type SiteState = {
  noticeSearch: string;
  noticeFilter: NoticeFilter;
  language: Language;
  setNoticeSearch: (value: string) => void;
  setNoticeFilter: (value: NoticeFilter) => void;
  setLanguage: (value: Language) => void;
  toggleLanguage: () => void;
};

export const useSiteStore = create<SiteState>()(
  persist(
    (set) => ({
      noticeSearch: "",
      noticeFilter: "all",
      language: "en",
      setNoticeSearch: (value) => set({ noticeSearch: value }),
      setNoticeFilter: (value) => set({ noticeFilter: value }),
      setLanguage: (value) => set({ language: value }),
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "en" ? "np" : "en",
        })),
    }),
    {
      name: "school-ui-preferences",
      partialize: (state) => ({
        language: state.language,
      }),
    },
  ),
);

export type { Language, NoticeFilter };
