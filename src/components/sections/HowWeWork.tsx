"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, PenTool, Code2, CheckCircle2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Discovery",
    description: "We understand your business, goals, and challenges before writing a single line of code.",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "Strategy",
    description: "We define the roadmap, tech stack, and project milestones to ensure a smooth execution.",
  },
  {
    icon: PenTool,
    number: "3",
    title: "Design",
    description: "We create wireframes and high-fidelity prototypes to validate the UX before development.",
  },
  {
    icon: Code2,
    number: "4",
    title: "Development",
    description: "Agile development with regular demos, ensuring the product evolves based on your feedback.",
  },
  {
    icon: CheckCircle2,
    number: "5",
    title: "QA & Testing",
    description: "Rigorous testing across devices and browsers to ensure a bug-free and high-performance launch.",
  },
  {
    icon: Rocket,
    number: "6",
    title: "Deploy & Support",
    description: "We launch, monitor, and provide ongoing support to keep your application evolving.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28 relative" id="process" style={{ backgroundColor: "var(--color-gray-50)" }}>
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
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-gray-500)" }}
          >
            A proven process that turns your ideas into production-ready digital products.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative">

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 shadow-md"
                style={{
                  backgroundColor: idx === steps.length - 1 ? "var(--color-orange)" : "var(--color-navy)",
                }}
              >
                <span
                  className="text-xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-gray-500)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
