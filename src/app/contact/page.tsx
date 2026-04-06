"use client";

import Link from "next/link";
import { LocateFixed, MapPin, MessageCircle, Phone, Mail } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { buildAdmissionInquiryMessage, buildInquiryMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { useLocation } from "@/hooks/useLocation";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactPage() {
  const { pick } = useLanguage();
  const { requestLocation, loading, error, mapsLink } = useLocation();

  const standardMessage = createWhatsAppLink(buildInquiryMessage("I would like to contact the school office."));
  const admissionMessage = createWhatsAppLink(buildAdmissionInquiryMessage());
  const locationMessage = createWhatsAppLink(buildAdmissionInquiryMessage(mapsLink ?? undefined));

  return (
    <>
      <PageHeader
        badge={pick("Contact", "सम्पर्क")}
        title={pick("Contact Us", "हामीलाई सम्पर्क गर्नुहोस्")}
        subtitle={pick("Reach our office directly for admissions, academics, and notices.", "भर्ना, शैक्षिक र सूचनाका लागि सिधै कार्यालयमा सम्पर्क गर्नुहोस्।")}
      />

      <section className="container py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>{pick("School Contact Details", "विद्यालय सम्पर्क विवरण")}</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-primary/80">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-secondary" /> {siteConfig.address}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> {siteConfig.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> {siteConfig.email}</p>

              <div className="pt-3">
                <p className="mb-2 font-semibold">{pick("WhatsApp Options", "व्हाट्सएप विकल्प")}</p>
                <div className="flex flex-wrap gap-2">
                  <Link href={standardMessage} target="_blank"><Button variant="secondary"><MessageCircle className="h-4 w-4" /> {pick("General Inquiry", "सामान्य सोधपुछ")}</Button></Link>
                  <Link href={admissionMessage} target="_blank"><Button variant="outline">{pick("Admission Inquiry", "भर्ना सोधपुछ")}</Button></Link>
                </div>
              </div>

              <div className="rounded-xl border border-primary/10 p-4">
                <p className="text-sm font-semibold text-primary">{pick("Share live location (optional)", "लाइभ लोकेशन साझेदारी (वैकल्पिक)")}</p>
                <p className="mt-1 text-xs text-primary/70">{pick("Click below to grant location permission and append map link in your WhatsApp message.", "लोकेशन अनुमति दिएर व्हाट्सएप सन्देशमा म्याप लिंक थप्नुहोस्।")}</p>
                <Button onClick={requestLocation} className="mt-3" variant="outline">
                  <LocateFixed className="h-4 w-4" />
                  {loading ? pick("Requesting...", "अनुरोध हुँदैछ...") : pick("Use My Location", "मेरो लोकेशन प्रयोग गर्नुहोस्")}
                </Button>
                {mapsLink ? <p className="mt-2 text-xs text-green-700">{pick("Location ready. Send with map link.", "लोकेशन तयार भयो। म्याप लिंकसहित पठाउनुहोस्।")}</p> : null}
                {error ? <p className="mt-2 text-xs text-secondary">{error}</p> : null}
                <div className="mt-3">
                  <Link href={locationMessage} target="_blank"><Button variant="secondary">{pick("Send via WhatsApp with Location", "लोकेशन सहित व्हाट्सएप पठाउनुहोस्")}</Button></Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>{pick("Find Us on Map", "म्यापमा हेर्नुहोस्")}</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-xl border border-primary/10">
                <iframe
                  title="School location"
                  src={siteConfig.mapEmbedUrl}
                  className="h-[380px] w-full"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
