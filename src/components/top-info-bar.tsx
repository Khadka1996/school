"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Clock3, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.492 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8zm8.85 1.35a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.12C19.55 4.6 12 4.6 12 4.6s-7.55 0-9.4.48A3 3 0 0 0 .5 7.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.12c1.85.48 9.4.48 9.4.48s7.55 0 9.4-.48a3 3 0 0 0 2.1-2.12A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-4.8zM9.6 15.2V8.8l6.2 3.2-6.2 3.2z" />
    </svg>
  );
}

function getSchoolStatus() {
  const dayFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kathmandu",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kathmandu",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  });

  const now = new Date();
  const parts = dayFormatter.formatToParts(now);
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");

  const openDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const isAfterOpen = hour > 10 || (hour === 10 && minute >= 0);
  const isBeforeClose = hour < 17;
  const isOpenNow = openDays.includes(weekday) && isAfterOpen && isBeforeClose;

  return {
    isOpenNow,
    time12h: timeFormatter.format(now),
  };
}

export function TopInfoBar() {
  const [now, setNow] = useState(() => getSchoolStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(getSchoolStatus());
    }, 30_000);
    return () => clearInterval(timer);
  }, []);

  const statusText = useMemo(() => {
    return now.isOpenNow ? "Open now" : "Closed now";
  }, [now.isOpenNow]);

  return (
    <div className="border-b border-primary/10 bg-primary text-white">
      <div className="container flex min-h-9 flex-col items-start justify-between gap-1 py-1 text-xs sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-1 sm:text-sm">
        <div className="flex w-full flex-col gap-1 sm:w-auto sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {siteConfig.phone}</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {siteConfig.email}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-accent"><Clock3 className="h-4 w-4" />
            {statusText} · Sun–Fri 10:00 AM–5:00 PM · {now.time12h}
          </span>
        </div>

        <div className="hidden items-center gap-3 text-white/90 sm:flex">
          <Link
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-sm p-1 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <FacebookIcon />
          </Link>
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-sm p-1 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="rounded-sm p-1 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
