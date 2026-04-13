import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <Navbar />
      
      <Hero />
      <Services />
      <About />
      
      {/* Contact Section placeholder matching layout for quick scrolling */}
      <section id="contact" className="py-32 border-t border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 tracking-tight">Ready to build?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Start a conversation with our engineering team today.</p>
          <a href="mailto:hello@nextgen.com" className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
