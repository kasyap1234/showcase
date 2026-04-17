"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Bot, Wrench, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    body: "We build scalable, secure web applications tailored to your business — from e-commerce platforms and inventory management systems to HR portals, booking engines, and internal business tools. Built with modern technologies for speed and reliability.",
    color: "var(--color-blue)",
    bg: "#eff6ff",
    href: "/services/web-applications",
  },
  {
    icon: Smartphone,
    title: "Hybrid Mobile Apps",
    body: "Cross-platform iOS and Android apps built with a single codebase. Whether it's a healthcare app, logistics tracker, fintech solution, or customer-facing mobile tool — we deliver native-quality experiences on both platforms.",
    color: "var(--color-orange)",
    bg: "#fff7ed",
    href: "/services/mobile-apps",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    body: "Cloud migration, serverless architecture, and auto-scaling infrastructure on AWS, Azure, or GCP. We help you move to the cloud or optimize what you already have — so your infrastructure grows quietly with your business.",
    color: "#16a34a",
    bg: "#f0fdf4",
    href: "/services/cloud-solutions",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    body: "Intelligent chatbots, document processing, workflow automation, and AI-powered features integrated into your existing systems. Practical AI that saves time and reduces manual work — not just hype.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    href: "/services/ai-automation",
  },
  {
    icon: Wrench,
    title: "CRM & Business Tools",
    body: "Custom CRM systems and internal business tools built around how your team actually works. Sales pipelines, reporting dashboards, client management, and integrations with your existing software — no bloat, just what you need.",
    color: "#0d9488",
    bg: "#f0fdfa",
    href: "/services/crm-business-tools",
  },
  {
    icon: Shield,
    title: "Support & Maintenance",
    body: "Ongoing application monitoring, bug fixes, performance optimization, security patches, and feature updates. We keep your existing applications running smoothly and evolving with your business needs. Dedicated engineers who know your system inside out.",
    color: "#dc2626",
    bg: "#fef2f2",
    href: "/services/support-maintenance",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 relative"
      style={{ backgroundColor: "var(--color-gray-50)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
          >
            What We Build & Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-gray-500)" }}
          >
            End-to-end software solutions designed to help your business operate smarter, serve customers better, and grow faster.
          </motion.p>
        </div>

        {/* Service Cards — 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (idx % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-xl border p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-gray-200)",
                borderTop: `3px solid ${s.color}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: s.bg }}
              >
                <s.icon size={24} style={{ color: s.color }} />
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-gray-500)" }}>
                {s.body}
              </p>
              <Link href={s.href} className="text-sm font-semibold inline-block" style={{ color: "var(--color-orange)" }}>
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
