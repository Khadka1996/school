"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

type NoticeCardProps = {
  title: string;
  titleNp: string;
  description: string;
  date: string;
  category: string;
  pdfUrl?: string;
};

export function NoticeCard({ title, titleNp, description, date, category, pdfUrl }: NoticeCardProps) {
  const { isNepali, pick } = useLanguage();

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge className="capitalize">{category}</Badge>
          <p className="flex items-center gap-1 text-xs text-primary/60"><Calendar className="h-3 w-3" /> {date}</p>
        </div>
        <CardTitle className="mt-1 text-lg">{isNepali ? titleNp : title}</CardTitle>
        <p className="text-sm text-primary/70">{isNepali ? title : titleNp}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-primary/80">{description}</p>
        {pdfUrl ? (
          <Link
            href={pdfUrl}
            download
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
          >
            <Download className="h-4 w-4" /> {pick("Download PDF", "PDF डाउनलोड")}
          </Link>
        ) : null}
      </CardContent>
    </Card>
  );
}
