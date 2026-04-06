"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildAdmissionInquiryMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/hooks/useLanguage";

const steps = [
  "Submit inquiry or visit school office",
  "Collect and fill admission form",
  "Document verification and interaction",
  "Fee submission and enrollment confirmation",
];

const documents = [
  "Birth certificate copy",
  "Previous grade marksheet",
  "2 passport-size photographs",
  "Guardian citizenship copy",
];

const whatsappLink = createWhatsAppLink(buildAdmissionInquiryMessage());

export default function AdmissionsPage() {
  const { pick } = useLanguage();

  return (
    <>
      <PageHeader
        badge={pick("Admissions", "भर्ना")}
        title={pick("Admission Process", "भर्ना प्रक्रिया")}
        subtitle={pick("Simple, transparent and supportive admission process for all families.", "सबै परिवारका लागि सरल, पारदर्शी र सहयोगी भर्ना प्रक्रिया।")}
      />

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>{pick("Step-by-Step Process", "चरणबद्ध प्रक्रिया")}</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-primary/80">
              {steps.map((step, index) => (
                <p key={step} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" /> {index + 1}. {step}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>{pick("Eligibility & Documents", "योग्यता तथा कागजात")}</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-primary/80">
              {documents.map((doc) => (
                <p key={doc}>• {doc}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader><CardTitle>{pick("Sample Fee Structure", "नमूना शुल्क संरचना")}</CardTitle></CardHeader>
          <CardContent className="text-sm text-primary/80">
            Admission Fee: NPR 1,500 | Monthly Tuition: NPR 1,200 - 2,500 (by grade) | Exam Fee: NPR 500 per term.
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={whatsappLink} target="_blank"><Button size="lg" variant="secondary">{pick("Inquire via WhatsApp", "व्हाट्सएपमार्फत सोधपुछ")}</Button></Link>
          <Link href="/contact"><Button size="lg" variant="outline">{pick("Contact Office", "कार्यालय सम्पर्क")}</Button></Link>
        </div>
      </section>
    </>
  );
}
