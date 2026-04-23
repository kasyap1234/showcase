import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)", color: "var(--color-gray-700)" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <HowWeWork />
      <Testimonials />

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Build Something Great?
          </h2>
          <p
            className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(191, 219, 254, 0.8)" }}
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation and proposal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@cloudwinitsolutions.com"
              className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              Get Free Consultation
            </a>
            <a
              href="mailto:hello@cloudwinitsolutions.com"
              className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-medium text-white transition-all border border-white/30 hover:bg-white/10"
            >
              hello@cloudwinitsolutions.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
