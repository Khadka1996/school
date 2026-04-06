import { Badge } from "@/components/ui/badge";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  badge?: string;
};

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="hero-pattern border-b border-primary/10 py-14">
      <div className="container text-center">
        {badge ? <Badge className="mb-3">{badge}</Badge> : null}
        <h1 className="text-3xl font-extrabold text-primary md:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-primary/75">{subtitle}</p>
      </div>
    </section>
  );
}
