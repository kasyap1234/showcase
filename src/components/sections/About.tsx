"use client";

import { motion } from "framer-motion";
import { Target, Zap, Handshake, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "We listen first, then build. Every solution is tailored to your specific business needs and goals.",
    color: "var(--color-orange)",
    bg: "#fff7ed",
  },
  {
    icon: Zap,
    title: "Agile & Transparent",
    description: "Regular updates, clear timelines, and direct communication. You always know where your project stands.",
    color: "var(--color-blue)",
    bg: "#eff6ff",
  },
  {
    icon: Handshake,
    title: "Long-Term Partners",
    description: "We don't build and disappear. Ongoing support, maintenance, and evolution of your software is part of who we are.",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: ShieldCheck,
    title: "Proven & Reliable",
    description: "50+ projects delivered with 99.9% uptime. We use battle-tested technologies to build software that lasts.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
];

export function About() {
  return (
    <section className="py-20 md:py-28 relative" id="about" style={{ backgroundColor: "var(--color-white)" }}>
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
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
          >
            Who We Are
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Company Story */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: "var(--color-gray-600)" }}
            >
              <strong style={{ color: "var(--color-navy)" }}>Cloud Winit Solutions</strong> is a dedicated software development company that helps businesses leverage technology to achieve their goals. We specialize in building custom web applications, hybrid mobile apps, cloud infrastructure, and AI-powered solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: "var(--color-gray-600)" }}
            >
              As a small, agile team of experienced engineers, we work closely with every client — no account managers, no outsourcing, no layers of bureaucracy. You talk directly to the people building your product.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-gray-600)" }}
            >
              We believe in long-term partnerships, not one-off projects. From initial discovery through deployment and ongoing maintenance, we stay with you at every stage — because great software needs ongoing care.
            </motion.p>
          </div>

          {/* Right: Differentiator Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-gray-200)",
                  backgroundColor: "var(--color-gray-50)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-gray-500)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
