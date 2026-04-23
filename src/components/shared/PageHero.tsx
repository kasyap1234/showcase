import { Breadcrumb } from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Breadcrumb items={breadcrumbs} />
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-6 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg mt-4 max-w-2xl" style={{ color: "rgba(191, 219, 254, 0.8)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
