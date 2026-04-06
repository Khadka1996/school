"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, School } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const links = [
  { href: "/", en: "Home", np: "गृह" },
  { href: "/about", en: "About", np: "हाम्रो बारेमा" },
  { href: "/academics", en: "Academics", np: "शैक्षिक" },
  { href: "/admissions", en: "Admissions", np: "भर्ना" },
  { href: "/notices", en: "Notices", np: "सूचना" },
  { href: "/gallery", en: "Gallery", np: "ग्यालेरी" },
  { href: "/contact", en: "Contact", np: "सम्पर्क" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isNepali, toggleLanguage, pick } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-bold text-primary">
          <Image
            src={siteConfig.wavingFlagUrl}
            alt="Nepal flag"
            width={48}
            height={34}
            className="flag-wave h-7 w-12 rounded-sm object-contain"
            unoptimized
          />
          <School className="h-5 w-5 text-secondary" />
        </Link>

        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.92rem] font-medium text-primary/80 transition-colors hover:text-secondary",
                pathname === link.href && "text-secondary",
              )}
            >
              {pick(link.en, link.np)}
            </Link>
          ))}
          <Button size="sm" variant="outline" onClick={toggleLanguage} aria-label="Toggle language">
            {isNepali ? "NP 🇳🇵" : "EN 🇬🇧"}
          </Button>
          <Button asChild size="sm" variant="secondary">
            <Link href="/login" aria-label="Login">{pick("Login", "लगइन")}</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href="/register" aria-label="Register">{pick("Register", "दर्ता")}</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </nav>

      {open && (
        <div className="border-t border-primary/10 bg-white md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium text-primary/80",
                  pathname === link.href && "text-secondary",
                )}
              >
                {pick(link.en, link.np)}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Button size="sm" variant="outline" onClick={toggleLanguage} aria-label="Toggle language">
                {isNepali ? "NP 🇳🇵" : "EN 🇬🇧"}
              </Button>
              <Button asChild size="sm" variant="secondary">
                <Link href="/login">{pick("Login", "लगइन")}</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/register">{pick("Register", "दर्ता")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
