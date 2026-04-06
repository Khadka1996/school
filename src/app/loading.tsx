import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container py-10">
      <Skeleton className="h-12 w-1/2" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    </section>
  );
}
