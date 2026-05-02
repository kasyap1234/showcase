"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Target,
  Eye,
  Lightbulb,
  Award,
  Users,
  Zap,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)", color: "var(--color-gray-700)" }}>
      <Navbar />

      {/* 1. Page Hero */}
      <PageHero
        title="About Cloud Winit Solutions"
        subtitle="A dedicated team of engineers building custom software solutions that help businesses grow."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Our Story */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Story Text */}
            <motion.div {...fadeUp} className="space-y-6">
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-gray-600)" }}
              >
                Cloud Winit Solutions was founded with a simple belief: every business deserves access to high-quality, custom software. We saw too many companies stuck with off-the-shelf tools that didn&apos;t fit their workflows, or stuck with agencies that built and disappeared. We decided to do things differently.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-gray-600)" }}
              >
                As a small, agile team of experienced engineers, we work closely with every client — no account managers, no outsourcing, no layers of bureaucracy. When you work with us, you talk directly to the people building your product. That means faster decisions, fewer misunderstandings, and better software.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-gray-600)" }}
              >
                Today, we&apos;ve delivered over 50 projects across healthcare, fintech, logistics, e-commerce, and more. But what we&apos;re most proud of isn&apos;t the number — it&apos;s the fact that most of our clients have stayed with us for ongoing support and new projects. That&apos;s the kind of partnership we believe in.
              </p>
            </motion.div>

            {/* Right: Illustration Box */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl p-8 flex flex-col gap-6"
              style={{
                background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)",
              }}
            >
              {/* Icons Row */}
              <div className="grid grid-cols-4 gap-3">
                {[Globe, Smartphone, Cloud, Bot].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-xl p-4 aspect-square backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>

              {/* Service Labels */}
              <p
                className="text-center text-sm font-semibold tracking-widest text-white/80 uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Web · Mobile · Cloud · AI
              </p>

              {/* Stats Strip */}
              <div className="flex justify-between border-t border-white/20 pt-5">
                {["5+ Years", "50+ Projects", "30+ Clients"].map((stat) => (
                  <div key={stat} className="text-center">
                    <p
                      className="text-xs font-semibold text-white/70 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div {...fadeUp} className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              OUR PURPOSE
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
            >
              Mission &amp; Vision
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              {...fadeUp}
              className="rounded-xl p-7 border hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: "var(--color-white)",
                borderColor: "var(--color-gray-200)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5"
                style={{ backgroundColor: "#fff7ed" }}
              >
                <Target className="w-6 h-6" style={{ color: "var(--color-orange)" }} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-gray-600)" }}
              >
                To deliver reliable, custom software solutions that help businesses operate smarter, serve customers better, and grow faster — with technology that works as hard as they do.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl p-7 border hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: "var(--color-white)",
                borderColor: "var(--color-gray-200)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5"
                style={{ backgroundColor: "#eff6ff" }}
              >
                <Eye className="w-6 h-6" style={{ color: "var(--color-blue)" }} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
              >
                Our Vision
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-gray-600)" }}
              >
                To be the most trusted technology partner for businesses seeking digital transformation — known for honest communication, quality engineering, and long-term commitment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Values */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div {...fadeUp} className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              WHAT WE STAND FOR
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
            >
              Our Values
            </h2>
          </motion.div>

          {/* 4 Value Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                color: "var(--color-orange)",
                bg: "#fff7ed",
                title: "Innovation",
                text: "We stay current with the latest technologies and approaches, always looking for better ways to solve problems.",
              },
              {
                icon: Eye,
                color: "var(--color-blue)",
                bg: "#eff6ff",
                title: "Transparency",
                text: "No surprises. Clear timelines, honest communication, and regular updates at every stage of your project.",
              },
              {
                icon: Award,
                color: "#16a34a",
                bg: "#f0fdf4",
                title: "Quality",
                text: "We don't cut corners. Every line of code is written with care, tested thoroughly, and built to last.",
              },
              {
                icon: Users,
                color: "#7c3aed",
                bg: "#f5f3ff",
                title: "Partnership",
                text: "Your success is our success. We invest in understanding your business because great software starts with great relationships.",
              },
            ].map(({ icon: Icon, color, bg, title, text }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl p-6 border text-center hover:shadow-lg transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--color-gray-50)",
                  borderColor: "var(--color-gray-200)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-gray-600)" }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div {...fadeUp} className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              WHY CLOUD WINIT
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
            >
              Why Choose Us
            </h2>
          </motion.div>

          {/* 4 Why Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                color: "var(--color-orange)",
                title: "Client-First",
                text: "Every project starts with listening. We take the time to understand your business, your users, and your challenges before proposing any solution. This isn't just a process — it's how we've maintained a 95% client satisfaction rate across 50+ projects.",
              },
              {
                icon: Zap,
                color: "var(--color-blue)",
                title: "Agile & Transparent",
                text: "You'll never wonder where your project stands. We work in 2-week sprints with regular demos, and you have direct access to your development team at all times. No middlemen, no status reports that hide the truth.",
              },
              {
                icon: Handshake,
                color: "#16a34a",
                title: "Long-Term Partners",
                text: "Over 70% of our clients continue working with us after their initial project. We don't just build and leave — we provide ongoing support, maintenance, and feature development as your business evolves.",
              },
              {
                icon: ShieldCheck,
                color: "#7c3aed",
                title: "Proven & Reliable",
                text: "With 99.9% uptime across all client applications and zero critical incidents in our support portfolio, we deliver software you can depend on. Our engineering practices — code reviews, automated testing, monitoring — ensure quality at every level.",
              },
            ].map(({ icon: Icon, color, title, text }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl p-7 border hover:shadow-lg transition-shadow duration-300 flex gap-5"
                style={{
                  backgroundColor: "var(--color-white)",
                  borderColor: "var(--color-gray-200)",
                  borderLeftWidth: "3px",
                  borderLeftColor: color,
                }}
              >
                <div
                  className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-lg mt-0.5"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-gray-600)" }}
                  >
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CTABanner
        heading="Ready to Work With Us?"
        description="Let's discuss how we can help your business grow with custom software solutions."
        buttonText="Get Free Consultation"
        buttonHref="mailto:Support@cloudwinitsolutions.com"
      />

      <Footer />
    </main>
  );
}
