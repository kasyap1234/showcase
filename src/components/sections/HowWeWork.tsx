"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and technical requirements to understand exactly what you need.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "We architect the solution, plan the tech stack, and design the user experience before writing a line of code.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description: "We build iteratively with regular demos and feedback loops, so you see progress every step of the way.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Support",
    description: "We launch, monitor, maintain, and scale your product as your business grows. We never just build and leave.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 md:py-32 relative" id="process">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6"
          >
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            A proven process that turns your ideas into production-ready digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-blue-500/30" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-blue-500/20">
                <step.icon size={20} className="text-white" />
              </div>
              <span className="text-xs font-mono text-blue-400 mb-2 block">{step.number}</span>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
