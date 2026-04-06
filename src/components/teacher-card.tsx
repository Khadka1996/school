"use client";

import { UserRound } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

type TeacherCardProps = {
  name: string;
  subject: string;
  experience: string;
};

export function TeacherCard({ name, subject, experience }: TeacherCardProps) {
  const { pick } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UserRound className="h-5 w-5" />
        </div>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-primary/70">{pick("Subject", "विषय")}: {subject}</p>
        <p className="text-sm text-primary/70">{pick("Experience", "अनुभव")}: {experience}</p>
      </CardContent>
    </Card>
  );
}
