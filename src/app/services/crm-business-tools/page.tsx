"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

const whatWeBuild = [
  {
    title: "Custom CRM Systems",
    description:
      "Sales pipeline management, contact tracking, deal forecasting, and automated follow-ups — designed for how your sales team actually sells.",
  },
  {
    title: "Sales Pipeline Tools",
    description:
      "Visual deal tracking, stage automation, win/loss analysis, and team performance dashboards.",
  },
  {
    title: "Reporting Dashboards",
    description:
      "Real-time business intelligence with custom KPIs, automated report generation, and data export.",
  },
  {
    title: "Client Management Portals",
    description:
      "Self-service portals where clients can view projects, approve deliverables, track invoices, and communicate with your team.",
  },
  {
    title: "Invoice & Billing Systems",
    description:
      "Automated invoicing, recurring billing, payment tracking, and integration with accounting software.",
  },
  {
    title: "Internal Workflow Tools",
    description:
      "Approval chains, task routing, document management, and process automation for your back-office operations.",
  },
];

const steps = [
  {
    number: "01",
    title: "Workflow Mapping",
    description:
      "We embed with your team to understand exactly how you work today — what's working, what's broken, and where software can remove friction.",
  },
  {
    number: "02",
    title: "Prototype & Validate",
    description:
      "Before full development, we build a clickable prototype and validate it with real users from your team to catch issues early.",
  },
  {
    number: "03",
    title: "Iterative Development",
    description:
      "We build in short cycles, shipping usable features frequently so your team can start seeing value before the full product is complete.",
  },
  {
    number: "04",
    title: "Training & Adoption",
    description:
      "We run onboarding sessions, create documentation, and stay available post-launch to ensure your team actually adopts the new tool.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "Chart.js",
  "PDF Generation",
  "Stripe",
  "OAuth",
];

export default function CRMBusinessToolsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)" }}>
      <Navbar />

      <PageHero
        title="CRM & Business Tools"
        subtitle="Tools built around how your team actually works"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "CRM & Business Tools" },
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
              Software That Fits Your Business
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              "Off-the-shelf CRM systems force your team to adapt to the software. We build the opposite — custom CRM and business tools designed around your specific workflows, terminology, and processes. The result is software your team actually wants to use.",
              "Whether you need a sales pipeline tracker, a client management portal, or an internal tool that automates your unique business processes, we build solutions that fit like a glove. No unnecessary features, no bloated interfaces — just the tools your team needs to work efficiently.",
              "Our custom business tools integrate with the systems you already use — email, calendars, accounting software, payment processors — so your team doesn't have to switch between a dozen tabs to get their work done.",
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
              Business Tools We Deliver
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
              Built for Adoption, Not Just Delivery
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
              PropManager — Real Estate
            </p>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Challenge:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                A property management company managing 500+ rental units across 3 cities was tracking
                everything in spreadsheets. Lease renewals were missed, maintenance requests fell through
                cracks, and generating monthly reports took 2 full days.
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Solution:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                We built a custom property management CRM with tenant profiles, automated lease renewal
                reminders, a maintenance request portal for tenants, and one-click monthly reporting.
                Integrated with their accounting software for automated invoicing.
              </span>
            </div>
            <div>
              <span className="font-semibold block mb-3" style={{ color: "var(--color-orange)" }}>
                Results:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "80% reduction in admin time",
                  "Zero missed lease renewals",
                  "Tenant satisfaction up 35%",
                  "Monthly reports in 5 minutes instead of 2 days",
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
        heading="Need a Custom Business Tool?"
        description="Let's build software that works the way your team works."
        buttonText="Get Free Consultation"
        buttonHref="mailto:Support@cloudwinitsolutions.com"
      />

      <Footer />
    </main>
  );
}
