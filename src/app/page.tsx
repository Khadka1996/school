"use client";

import Link from "next/link";

import { Hero } from "@/components/hero";
import { NoticeCarousel } from "@/components/notice-carousel";
import { RecentNoticePopup } from "@/components/recent-notice-popup";
import { StatCard } from "@/components/stat-card";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { stats } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";

export default function HomePage() {
  const { pick } = useLanguage();

  return (
    <>
      <Hero />
      <RecentNoticePopup />

      <section className="container py-14">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">{pick("Our Impact", "हाम्रो उपलब्धि")}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </section>

      <section className="container py-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-primary">{pick("Latest Notices", "ताजा सूचना")}</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/notices">{pick("View all", "सबै हेर्नुहोस्")}</Link>
          </Button>
        </div>
        <div className="mt-5 max-w-3xl md:mx-auto">
          <NoticeCarousel />
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">{pick("Quick Access", "छिटो पहुँच")}</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>{pick("Academics", "शैक्षिक")}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-primary/75">{pick("Explore curriculum, classes and learning approach.", "पाठ्यक्रम, कक्षाहरू र सिकाइ दृष्टिकोण हेर्नुहोस्।")}</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/academics">{pick("View Academics", "शैक्षिक हेर्नुहोस्")}</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>{pick("Admissions", "भर्ना")}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-primary/75">{pick("Start admission inquiry and review requirements.", "भर्ना सम्बन्धी जानकारी लिनुहोस् र आवश्यक कागजात हेर्नुहोस्।")}</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/admissions">{pick("Apply Now", "अहिल्यै आवेदन")}</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>{pick("Gallery", "ग्यालेरी")}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-primary/75">{pick("See events, classrooms, sports and student life.", "कार्यक्रम, कक्षा, खेलकुद र विद्यार्थी जीवन हेर्नुहोस्।")}</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/gallery">{pick("Open Gallery", "ग्यालेरी खोल्नुहोस्")}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
