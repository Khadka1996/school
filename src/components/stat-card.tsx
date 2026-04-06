"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

type StatCardProps = {
  title: string;
  titleNp: string;
  value: number;
  suffix?: string;
};

export function StatCard({ title, titleNp, value, suffix = "" }: StatCardProps) {
  const [count, setCount] = useState(0);
  const { isNepali } = useLanguage();

  useEffect(() => {
    let current = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card>
        <CardHeader>
          <CardTitle className="text-base text-primary/75">{isNepali ? titleNp : title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-extrabold text-secondary">{count}{suffix}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
