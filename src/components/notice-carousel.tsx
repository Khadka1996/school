"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { notices } from "@/lib/data";
import { NoticeCard } from "@/components/notice-card";
import { useLanguage } from "@/hooks/useLanguage";

export function NoticeCarousel() {
  const [index, setIndex] = useState(0);
  const { pick } = useLanguage();

  useEffect(() => {
    if (notices.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  if (notices.length === 0) {
    return null;
  }

  const notice = notices[index];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={notice.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
        >
          <NoticeCard {...notice} />
        </motion.div>
      </AnimatePresence>
      <div className="mt-3 flex justify-center gap-2">
        {notices.map((item, dotIndex) => (
          <button
            key={item.id}
            onClick={() => setIndex(dotIndex)}
            className={`h-2 w-2 rounded-full ${dotIndex === index ? "bg-secondary" : "bg-primary/20"}`}
            aria-label={`${pick("Go to notice", "सूचनामा जानुहोस्")} ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
