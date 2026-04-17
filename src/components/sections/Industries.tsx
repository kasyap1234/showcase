"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Healthcare", emoji: "🏥" },
  { name: "Fintech", emoji: "💰" },
  { name: "E-Commerce", emoji: "🛒" },
  { name: "Logistics", emoji: "🚚" },
  { name: "Education", emoji: "🎓" },
  { name: "Real Estate", emoji: "🏢" },
  { name: "Manufacturing", emoji: "🏭" },
  { name: "Hospitality", emoji: "🍽️" },
  { name: "Legal", emoji: "⚖️" },
  { name: "Banking", emoji: "🏦" },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 relative" style={{ backgroundColor: "var(--color-white)" }}>
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
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
          >
            Solutions Across Sectors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-gray-500)" }}
          >
            We bring deep technical expertise to a wide range of industries, building software that solves real business problems in every sector.
          </motion.p>
        </div>

        {/* Industry Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default"
              style={{
                borderColor: "var(--color-gray-200)",
                backgroundColor: "var(--color-gray-50)",
                color: "var(--color-navy)",
                fontFamily: "var(--font-heading)",
              }}
            >
              <span className="text-lg">{industry.emoji}</span>
              {industry.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
