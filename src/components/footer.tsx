"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { pick } = useLanguage();

  return (
    <footer className="mt-16 border-t border-primary/10 bg-primary text-white">
      <div className="container grid gap-8 py-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-bold">{siteConfig.name}</h3>
          <p className="mt-2 text-sm text-white/80">{siteConfig.nameNp}</p>
          <p className="mt-3 text-sm text-white/80">{pick("Quality public education for every learner.", "हरेक विद्यार्थीका लागि गुणस्तरीय सार्वजनिक शिक्षा।")}</p>
        </div>
        <div className="space-y-2 text-sm text-white/90">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {siteConfig.address}</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {siteConfig.phone}</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {siteConfig.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/80">
        Developed & Designed by <Link href="https://khadka-manish.com.np" target="_blank" className="font-bold text-accent">MNZ</Link>
      </div>
    </footer>
  );
}
