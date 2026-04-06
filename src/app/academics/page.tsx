"use client";

import { BookOpen, FlaskConical, Monitor, Library, Trophy } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const facilities = [
  { icon: Library, title: "Library", text: "Updated reference books, journals and reading space." },
  { icon: FlaskConical, title: "Science Lab", text: "Practical lab sessions for Physics, Chemistry and Biology." },
  { icon: Monitor, title: "Computer Lab", text: "Digital literacy and IT classes with internet-enabled systems." },
  { icon: Trophy, title: "Playground", text: "Sports activities for physical and leadership development." },
];

export default function AcademicsPage() {
  const { pick } = useLanguage();

  return (
    <>
      <PageHeader
        badge={pick("Academics", "शैक्षिक")}
        title={pick("Academic Programs", "शैक्षिक कार्यक्रम")}
        subtitle={pick("Structured, inclusive and future-focused education from Nursery to Class 12.", "नर्सरीदेखि कक्षा १२ सम्म संरचित, समावेशी र भविष्यकेन्द्रित शिक्षा।")}
      />

      <section className="container py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>{pick("Classes Offered", "उपलब्ध कक्षाहरू")}</CardTitle></CardHeader>
            <CardContent className="text-sm text-primary/80">
              {pick("Nursery, LKG, UKG, and Grades 1 through 12 with Science, Management, and Humanities streams in higher secondary level.", "नर्सरी, एलकेजी, यूकेजी र कक्षा १ देखि १२ सम्म; उच्च माध्यमिक तहमा विज्ञान, व्यवस्थापन र मानविकी संकाय।")}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>{pick("Curriculum", "पाठ्यक्रम")}</CardTitle></CardHeader>
            <CardContent className="text-sm text-primary/80">
              {pick("We follow the national curriculum of Nepal, integrating practical learning, project work, and values-based education.", "हामी नेपालको राष्ट्रिय पाठ्यक्रमअनुसार व्यवहारिक सिकाइ, परियोजना कार्य र मूल्यमा आधारित शिक्षालाई समेट्छौं।")}
            </CardContent>
          </Card>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-primary">{pick("Facilities", "सुविधाहरू")}</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <Card key={facility.title}>
              <CardHeader>
                <facility.icon className="h-6 w-6 text-secondary" />
                <CardTitle className="mt-2">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-primary/80">{facility.text}</CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-secondary" /> {pick("Learning Approach", "सिकाइ दृष्टिकोण")}</CardTitle></CardHeader>
          <CardContent className="text-sm text-primary/80">
            {pick("Continuous assessment, remedial support, mentorship, and activity-based learning ensure each learner progresses confidently.", "निरन्तर मूल्यांकन, सहयोगात्मक सहायता, मार्गदर्शन र गतिविधिमा आधारित सिकाइले हरेक विद्यार्थीलाई आत्मविश्वाससाथ अघि बढाउँछ।")}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
