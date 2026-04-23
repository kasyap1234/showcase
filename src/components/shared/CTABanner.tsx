interface CTABannerProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({ heading, description, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heading}
        </h2>
        {description && (
          <p className="text-base md:text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(191, 219, 254, 0.8)" }}>
            {description}
          </p>
        )}
        <a
          href={buttonHref}
          className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
          style={{ backgroundColor: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
