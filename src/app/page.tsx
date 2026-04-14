import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <HowWeWork />
      <About />
      <TechStack />
      <Testimonials />

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 md:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@cloudwinitsolutions.com"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 px-8 text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/25"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
