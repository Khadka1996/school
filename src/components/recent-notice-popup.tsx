"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Bell, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { notices } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export function RecentNoticePopup() {
  const [open, setOpen] = useState(false);
  const { pick } = useLanguage();

  const latestNotice = useMemo(() => {
    return [...notices].sort(
      (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime(),
    )[0];
  }, []);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("recent-notice-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setOpen(false);
    sessionStorage.setItem("recent-notice-dismissed", "1");
  };

  if (!latestNotice) {
    return null;
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/35 p-3 sm:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="w-full max-w-lg rounded-xl border border-primary/10 bg-white p-5 shadow-soft"
            role="dialog"
            aria-modal="true"
            aria-label="Recent Notice"
          >
            <div className="mb-3 flex items-start justify-between">
              <div>
                <p className="inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                  <Bell className="h-4 w-4" /> {pick("Recent Notice", "हालको सूचना")}
                </p>
                <h3 className="mt-1 text-lg font-bold text-primary">{pick(latestNotice.title, latestNotice.titleNp)}</h3>
              </div>
              <button
                onClick={closePopup}
                className="rounded-md p-1 text-primary/60 hover:bg-primary/10"
                aria-label="Close notice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm text-primary/80">{latestNotice.description}</p>
            <p className="mt-2 text-xs font-medium text-primary/60">{latestNotice.date}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild size="sm" variant="secondary">
                <Link href="/notices">{pick("View All Notices", "सबै सूचना हेर्नुहोस्")}</Link>
              </Button>
              <Button size="sm" variant="outline" onClick={closePopup}>{pick("Dismiss", "बन्द गर्नुहोस्")}</Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
