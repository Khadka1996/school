"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export default function RegisterPage() {
  const { pick } = useLanguage();

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>{pick("Student Registration", "विद्यार्थी दर्ता")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{pick("Full Name", "पूरा नाम")}</label>
              <Input type="text" placeholder={pick("Student name", "विद्यार्थीको नाम")} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{pick("Phone Number", "फोन नम्बर")}</label>
              <Input type="tel" placeholder="98XXXXXXXX" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{pick("Email", "इमेल")}</label>
              <Input type="email" placeholder="student@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{pick("Password", "पासवर्ड")}</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full" variant="secondary">{pick("Register", "दर्ता गर्नुहोस्")}</Button>
            <p className="text-center text-sm text-primary/70">
              {pick("Already have an account?", "पहिले नै खाता छ?")} {" "}
              <Link href="/login" className="font-semibold text-secondary hover:underline">
                {pick("Login here", "यहाँ लगइन गर्नुहोस्")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
