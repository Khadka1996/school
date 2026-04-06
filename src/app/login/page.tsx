"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export default function LoginPage() {
  const { pick } = useLanguage();

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>{pick("Login to School Portal", "विद्यालय पोर्टल लगइन")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{pick("Email", "इमेल")}</label>
              <Input type="email" placeholder="student@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{pick("Password", "पासवर्ड")}</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full" variant="secondary">{pick("Login", "लगइन")}</Button>
            <p className="text-center text-sm text-primary/70">
              {pick("New user?", "नयाँ प्रयोगकर्ता?")} {" "}
              <Link href="/register" className="font-semibold text-secondary hover:underline">
                {pick("Create account", "खाता दर्ता गर्नुहोस्")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
