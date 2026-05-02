"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

const whatWeBuild = [
  {
    title: "Application Monitoring",
    description:
      "24/7 uptime monitoring, error tracking, performance dashboards, and automated alerting so issues are caught before users notice.",
  },
  {
    title: "Bug Fixes & Patches",
    description:
      "Rapid response to bugs with root-cause analysis, thorough testing, and deployment within agreed SLA windows.",
  },
  {
    title: "Performance Optimization",
    description:
      "Database query optimization, caching strategies, CDN setup, and code profiling to keep your application fast under load.",
  },
  {
    title: "Security Updates",
    description:
      "Regular dependency updates, vulnerability scanning, penetration testing, and compliance audits to keep your application secure.",
  },
  {
    title: "Feature Enhancements",
    description:
      "New features and improvements planned and delivered in regular cycles, aligned with your business roadmap.",
  },
  {
    title: "Legacy Modernization",
    description:
      "Incremental migration from outdated tech stacks to modern frameworks — without disrupting your operations.",
  },
];

const steps = [
  {
    number: "01",
    title: "Application Audit",
    description:
      "We perform a thorough review of your codebase, infrastructure, security posture, and performance to understand the current state.",
  },
  {
    number: "02",
    title: "Stabilization",
    description:
      "We address critical issues first — fixing bugs, patching vulnerabilities, and setting up monitoring so you have visibility immediately.",
  },
  {
    number: "03",
    title: "Maintenance Plan",
    description:
      "We establish a defined maintenance schedule with clear SLAs for response times, patch cycles, and planned improvement work.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Ongoing review cycles ensure your application stays current, performant, and aligned with evolving business requirements.",
  },
];

const technologies = [
  "Datadog",
  "Sentry",
  "New Relic",
  "GitHub Actions",
  "Automated Testing",
  "Docker",
  "Terraform",
  "Security Scanning",
];

export default function SupportMaintenancePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)" }}>
      <Navbar />

      <PageHero
        title="Support & Maintenance"
        subtitle="Keeping your applications running smoothly"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Support & Maintenance" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              OVERVIEW
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Your Software Deserves Ongoing Care
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              "Building software is only half the job. Applications need ongoing attention — security patches, performance monitoring, bug fixes, and feature updates. Without proper maintenance, even the best-built software degrades over time.",
              "We provide dedicated support and maintenance for applications we've built and for existing systems you need help with. Our team monitors your applications 24/7, responds to issues quickly, and proactively identifies problems before they affect your users.",
              "Whether you need ongoing maintenance for a business-critical application, help stabilizing a system built by another team, or a modernization plan for legacy software, we bring the same quality and commitment we put into new builds.",
            ].map((paragraph, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <p
                  className="text-base md:text-lg leading-relaxed mb-5"
                  style={{ color: "var(--color-gray-600)" }}
                >
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              WHAT WE BUILD
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Support Services We Deliver
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatWeBuild.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: "var(--color-gray-200)" }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-gray-500)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              OUR APPROACH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Proactive, Not Reactive
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-lg font-extrabold"
                  style={{
                    backgroundColor: idx === 3 ? "var(--color-orange)" : "var(--color-navy)",
                    color: idx === 3 ? "#ffffff" : "var(--color-orange)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-gray-500)" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              TECHNOLOGIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Tech We Use
            </motion.h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-5 py-2.5 rounded-lg border text-sm font-semibold bg-white"
                style={{ borderColor: "var(--color-gray-200)", color: "var(--color-navy)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              CASE STUDY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Real Results for Real Businesses
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border p-8"
            style={{
              backgroundColor: "var(--color-gray-50)",
              borderColor: "var(--color-gray-200)",
              borderLeft: "4px solid var(--color-blue)",
            }}
          >
            <p
              className="text-lg font-bold mb-6"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
            >
              ShopEasy — E-Commerce
            </p>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Challenge:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                An e-commerce platform with 50K monthly users experienced a major crash during Black Friday,
                losing an estimated $200K in sales. Page load times averaged 8 seconds, bugs were reported
                weekly, and the previous development team had moved on.
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Solution:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                We performed a full application audit, implemented CDN and caching (reducing load times to
                2.5s), set up error monitoring with Sentry, established automated testing, and created a
                monthly maintenance cycle with defined SLAs.
              </span>
            </div>
            <div>
              <span className="font-semibold block mb-3" style={{ color: "var(--color-orange)" }}>
                Results:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "3x faster page loads (8s → 2.5s)",
                  "99.9% uptime during next peak sales",
                  "Zero critical incidents in 12 months",
                  "$50K+ saved in prevented downtime",
                ].map((result, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg text-sm font-bold"
                    style={{ backgroundColor: "#eff6ff", color: "var(--color-navy)" }}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        heading="Need Application Support?"
        description="Let's keep your software running at its best."
        buttonText="Get Free Consultation"
        buttonHref="mailto:Support@cloudwinitsolutions.com"
      />

      <Footer />
    </main>
  );
}
