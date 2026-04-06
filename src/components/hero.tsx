"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site-config";
import { buildAdmissionInquiryMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const inquiryLink = createWhatsAppLink(buildAdmissionInquiryMessage());

export function Hero() {
  const { pick } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const heroImages = siteConfig.heroImages;

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (heroImages.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-b border-primary/10">
      <div className="relative h-[72vh] min-h-[420px] w-full md:h-[78vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[activeIndex]}
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.35 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[activeIndex]}
              alt="Shree Panchthar Secondary School campus"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-secondary/60" />

        <div className="container relative z-10 flex h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <p className="text-sm font-semibold tracking-wide text-accent">
              {pick("Panchthar, Nepal • Quality Public Education", "पाँचथर, नेपाल • गुणस्तरीय सार्वजनिक शिक्षा")}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              {pick(siteConfig.name, siteConfig.nameNp)}
            </h1>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              {pick(siteConfig.slogan, siteConfig.sloganNp)}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link href="/admissions">{pick("Apply Now", "अहिल्यै आवेदन")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href={inquiryLink} target="_blank" rel="noreferrer">
                  {pick("Contact via WhatsApp", "व्हाट्सएपमा सम्पर्क")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-white" : "w-2.5 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
