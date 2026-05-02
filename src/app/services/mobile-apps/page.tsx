"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

const whatWeBuild = [
  {
    title: "Healthcare Apps",
    description:
      "Patient portals, appointment booking, telehealth integration, medication reminders, and secure health data management.",
  },
  {
    title: "Logistics Trackers",
    description:
      "Real-time GPS tracking, route optimization, delivery confirmation, offline mode, and driver management dashboards.",
  },
  {
    title: "Fintech Solutions",
    description:
      "Secure payment apps, digital wallets, expense trackers, and investment portfolio management tools.",
  },
  {
    title: "Customer-Facing Apps",
    description:
      "Brand apps with loyalty programs, push notifications, in-app purchases, and personalized user experiences.",
  },
  {
    title: "Field Service Apps",
    description:
      "Job scheduling, on-site data collection, digital forms, photo capture, and real-time sync with back-office systems.",
  },
  {
    title: "Internal Team Tools",
    description:
      "Team communication, task management, time tracking, and approval workflows for distributed teams.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Prototyping",
    description:
      "We start by understanding your users' needs and building interactive prototypes to validate the concept before development begins.",
  },
  {
    number: "02",
    title: "Cross-Platform Development",
    description:
      "Using React Native, we build a single codebase that runs natively on both iOS and Android, reducing cost without compromising quality.",
  },
  {
    number: "03",
    title: "Testing & QA",
    description:
      "Rigorous testing on real devices across screen sizes and OS versions ensures a polished, bug-free experience for every user.",
  },
  {
    number: "04",
    title: "App Store Launch",
    description:
      "We handle App Store and Google Play submissions, optimise listings for discoverability, and support post-launch iterations.",
  },
];

const technologies = [
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase",
  "REST APIs",
  "Push Notifications",
  "SQLite",
  "Redux",
];

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)" }}>
      <Navbar />

      <PageHero
        title="Hybrid Mobile Apps"
        subtitle="Native-quality apps on both platforms"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hybrid Mobile Apps" },
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
              Mobile-First, Performance-Driven
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              "Mobile is where your customers are. Whether they're tracking deliveries, managing appointments, or accessing critical business data on the go, a well-built mobile app can transform how your business operates and how customers experience your brand.",
              "We build hybrid mobile apps using React Native — a single codebase that runs natively on both iOS and Android. This means faster development, lower costs, and a consistent experience across platforms without sacrificing performance or native feel.",
              "From healthcare apps that connect patients with providers to logistics trackers that give real-time visibility across your supply chain, we've built mobile solutions for businesses that need reliability, offline capability, and intuitive user experiences.",
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
              Types of Mobile Apps We Deliver
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
              From Idea to App Store
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
              SwiftDeliver — Logistics &amp; Delivery
            </p>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Challenge:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                A mid-size delivery company had no real-time visibility into their fleet of 200+ drivers.
                Dispatchers relied on phone calls, routes were planned manually, and customers couldn't track
                their packages.
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Solution:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                We built a cross-platform mobile app with live GPS tracking, intelligent route optimization,
                proof-of-delivery photo capture, and offline mode for areas with poor connectivity. A companion
                web dashboard gives dispatchers real-time fleet visibility.
              </span>
            </div>
            <div>
              <span className="font-semibold block mb-3" style={{ color: "var(--color-orange)" }}>
                Results:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "40% improvement in delivery times",
                  "95% driver adoption within 2 weeks",
                  "Customer complaints down 60%",
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
        heading="Need a Mobile App?"
        description="Let's build a mobile experience your customers and team will love."
        buttonText="Get Free Consultation"
        buttonHref="mailto:Support@cloudwinitsolutions.com"
      />

      <Footer />
    </main>
  );
}
