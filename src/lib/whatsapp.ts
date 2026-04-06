import { siteConfig } from "@/lib/site-config";

export function createWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildAdmissionInquiryMessage(locationUrl?: string) {
  const location = locationUrl ?? "https://maps.google.com/?q=LAT,LNG";
  return `Hello, I would like to inquire about admission.\n\nStudent Name:\nClass:\nMy Location: ${location}`;
}

export function buildInquiryMessage(extra?: string) {
  const base = `Hello, I would like to inquire about ${siteConfig.name}.`;
  return extra ? `${base}\n\n${extra}` : base;
}
