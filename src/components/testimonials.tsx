"use client";

import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function Testimonials() {
  const { pick } = useLanguage();

  return (
    <section className="container py-14">
      <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">{pick("What Parents & Students Say", "अभिभावक र विद्यार्थीहरूको भनाइ")}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <CardContent className="pt-6">
              <p className="text-sm text-primary/75">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-secondary">{item.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
