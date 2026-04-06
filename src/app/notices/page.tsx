"use client";

import { useMemo } from "react";

import { notices } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { NoticeCard } from "@/components/notice-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSiteStore, type NoticeFilter } from "@/store/useSiteStore";
import { useLanguage } from "@/hooks/useLanguage";

const filters: NoticeFilter[] = ["all", "announcement", "exam", "holiday", "event"];

export default function NoticesPage() {
  const { pick } = useLanguage();
  const { noticeSearch, noticeFilter, setNoticeSearch, setNoticeFilter } = useSiteStore();

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesFilter = noticeFilter === "all" || notice.category === noticeFilter;
      const query = noticeSearch.toLowerCase();
      const matchesSearch =
        notice.title.toLowerCase().includes(query) ||
        notice.titleNp.toLowerCase().includes(query) ||
        notice.description.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [noticeFilter, noticeSearch]);

  return (
    <>
      <PageHeader
        badge={pick("Notices", "सूचना")}
        title={pick("School Notices & Announcements", "विद्यालय सूचना तथा घोषणाहरू")}
        subtitle={pick("Search and filter announcements, exam schedules, holidays, and events.", "घोषणा, परीक्षा तालिका, बिदा र कार्यक्रम खोज्न तथा छान्न सकिन्छ।")}
      />

      <section className="container py-12">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <Input
            value={noticeSearch}
            onChange={(event) => setNoticeSearch(event.target.value)}
            placeholder={pick("Search notices...", "सूचना खोज्नुहोस्...")}
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={noticeFilter === filter ? "secondary" : "outline"}
                size="sm"
                onClick={() => setNoticeFilter(filter)}
                className="capitalize"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} {...notice} />
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <p className="mt-8 text-center text-sm text-primary/70">{pick("No notices found for current filters.", "हालको फिल्टरमा सूचना भेटिएन।")}</p>
        )}
      </section>
    </>
  );
}
