"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { buildAdmissionInquiryMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/hooks/useLanguage";

export function WhatsAppFloat() {
  const { pick } = useLanguage();
  const link = createWhatsAppLink(buildAdmissionInquiryMessage());

  return (
    <Link
      href={link}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-secondary/90 animate-pulseSoft"
    >
      <MessageCircle className="h-4 w-4" />
      {pick("WhatsApp", "व्हाट्सएप")}
    </Link>
  );
}
