"use client";

import Image from "next/image";

import { PageHeader } from "@/components/page-header";
import { TeacherCard } from "@/components/teacher-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { teachers } from "@/lib/data";

export default function AboutPage() {
  const { pick } = useLanguage();

  return (
    <>
      <PageHeader
        badge={pick("About School", "विद्यालय बारे")}
        title={pick("About Shree Panchthar Secondary School", "श्री पाँचथर माध्यमिक विद्यालय परिचय")}
        subtitle={pick("A reputed government school committed to quality education, discipline, and holistic growth in Panchthar District.", "गुणस्तरीय शिक्षा, अनुशासन र समग्र विकासमा समर्पित प्रतिष्ठित सरकारी विद्यालय।")}
      />

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader><CardTitle>{pick("History & Introduction", "इतिहास र परिचय")}</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-primary/80">
              <p>{pick("Established with a vision to provide accessible education, our school has become a trusted institution for families across Panchthar.", "सुलभ शिक्षा प्रदान गर्ने लक्ष्यसहित स्थापित यो विद्यालय पाँचथरका परिवारहरूको भरोसाको केन्द्र बनेको छ।")}</p>
              <p>{pick("Over the years, we have produced academically strong, socially responsible, and culturally grounded graduates.", "वर्षौंदेखि हामीले शैक्षिक रूपमा सक्षम, सामाजिक रूपमा जिम्मेवार र सांस्कृतिक रूपमा जगेर्ना गर्ने विद्यार्थी उत्पादन गर्दै आएका छौं।")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>{pick("Principal's Message", "प्रधानाध्यापकको सन्देश")}</CardTitle></CardHeader>
            <CardContent>
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                alt="Principal"
                width={500}
                height={320}
                className="mb-4 h-52 w-full rounded-xl object-cover"
              />
              <p className="text-sm text-primary/80">{pick("\"We focus on academic excellence with moral values and inclusive opportunities for every child.\"", "\"हामी प्रत्येक बालबालिकाका लागि नैतिक मूल्यसहित शैक्षिक उत्कृष्टतामा केन्द्रित छौं।\"")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>{pick("Mission", "ध्येय")}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-primary/80">{pick("To nurture competent and compassionate learners through quality public education.", "गुणस्तरीय सार्वजनिक शिक्षामार्फत सक्षम र संवेदनशील विद्यार्थी निर्माण गर्नु।")}</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>{pick("Vision", "दृष्टि")}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-primary/80">{pick("To be a model government school in Nepal for academic and character excellence.", "शैक्षिक तथा चरित्र निर्माणमा नेपालको नमूना सरकारी विद्यालय बन्नु।")}</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>{pick("Values", "मूल्य")}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-primary/80">{pick("Discipline, Integrity, Respect, Inclusion, and Lifelong Learning.", "अनुशासन, इमान्दारिता, सम्मान, समावेशिता र आजीवन सिकाइ।")}</p></CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-6">
        <h2 className="mb-6 text-2xl font-bold text-primary">{pick("Our Teachers", "हाम्रा शिक्षक")}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </section>
    </>
  );
}
