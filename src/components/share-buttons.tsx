"use client";

import { useMemo } from "react";
import { Share2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

type ShareButtonsProps = {
  title: string;
};

export function ShareButtons({ title }: ShareButtonsProps) {
  const { pick } = useLanguage();

  const currentUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "https://example.com";
    }
    return window.location.href;
  }, []);

  const whatsappShareLink = `https://wa.me/?text=${encodeURIComponent(`${title} - ${currentUrl}`)}`;
  const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary/80">
        <Share2 className="h-4 w-4" />
        {pick("Share", "साझा गर्नुहोस्")}
      </span>
      <Link href={whatsappShareLink} target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="outline">WhatsApp Share</Button>
      </Link>
      <Link href={facebookShareLink} target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="outline">Facebook Share</Button>
      </Link>
    </div>
  );
}
