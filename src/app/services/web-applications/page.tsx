"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

const whatWeBuild = [
  {
    title: "E-Commerce Platforms",
    description:
      "Custom online stores with product management, secure payments, inventory tracking, and analytics dashboards.",
  },
  {
    title: "Inventory Management Systems",
    description:
      "Real-time stock tracking, automated reorder alerts, barcode scanning, and multi-warehouse support.",
  },
  {
    title: "HR Portals",
    description:
      "Employee onboarding, leave management, performance reviews, and payroll integration — all in one place.",
  },
  {
    title: "Booking Engines",
    description:
      "Appointment scheduling, resource management, automated reminders, and calendar integrations for service-based businesses.",
  },
  {
    title: "Business Dashboards",
    description:
      "Real-time data visualization, KPI tracking, and reporting tools that help you make better decisions faster.",
  },
  {
    title: "Customer Portals",
    description:
      "Self-service portals where your clients can track orders, submit requests, view invoices, and communicate with your team.",
  },
];

const steps = [
  {
    number: "01",
    title: "Requirements & Planning",
    description:
      "We work closely with you to map out your business goals, user flows, and technical requirements before writing a single line of code.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers create wireframes and high-fidelity mockups, ensuring the application is intuitive, accessible, and on-brand.",
  },
  {
    number: "03",
    title: "Agile Development",
    description:
      "We build in iterative sprints, delivering working software every two weeks so you can see progress and provide feedback continuously.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, post-launch monitoring, and ongoing support — ensuring your application performs reliably from day one.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
];

export default function WebApplicationsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)" }}>
      <Navbar />

      <PageHero
        title="Custom Web Applications"
        subtitle="Scalable web solutions built for your business"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Custom Web Applications" },
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
              Web Applications Built to Scale
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              "In today's digital-first world, your web application is often the primary way customers interact with your business. Whether you need an e-commerce platform, an internal management system, or a customer-facing portal, we build web applications that are fast, secure, and designed to scale.",
              "We work with you from initial requirements through deployment and beyond — ensuring your application not only meets today's needs but is architected to grow with your business. Every application we build is mobile-responsive, accessible, and optimized for performance.",
              "Our team specializes in modern JavaScript frameworks and cloud-native architectures, allowing us to deliver applications that load fast, handle traffic spikes, and integrate seamlessly with your existing tools and services.",
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
              Types of Web Applications We Deliver
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
              How We Deliver Your Project
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
              MediTrack — Healthcare Supply Chain
            </p>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Challenge:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                A regional hospital network was tracking medical supplies across 12 locations using spreadsheets.
                Errors were frequent, stockouts caused delays in patient care, and monthly audits took weeks.
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Solution:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                We built a real-time inventory management platform with barcode scanning, automated reorder
                thresholds, expiration date tracking, and a centralized dashboard for all locations.
              </span>
            </div>
            <div>
              <span className="font-semibold block mb-3" style={{ color: "var(--color-orange)" }}>
                Results:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "60% reduction in inventory errors",
                  "3x faster stock audits",
                  "Zero stockouts in critical supplies after 6 months",
                ].map((result, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg text-sm font-bold"
                    style={{
                      backgroundColor: "#eff6ff",
                      color: "var(--color-navy)",
                    }}
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
        heading="Need a Custom Web Application?"
        description="Let's discuss your project and find the right solution for your business."
        buttonText="Get Free Consultation"
        buttonHref="mailto:hello@cloudwinitsolutions.com"
      />

      <Footer />
    </main>
  );
}
