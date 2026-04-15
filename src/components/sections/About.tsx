"use client";

import { motion } from "framer-motion";
import { Users, Heart, Cpu, MessageCircle } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Senior Engineering Team",
    description: "No juniors, no outsourcing. Every project is handled by experienced engineers who have shipped at scale.",
  },
  {
    icon: Heart,
    title: "Full Lifecycle Partner",
    description: "We don't just build and leave. From day one through ongoing support, we grow alongside your business.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "We use the latest proven technologies — React, Next.js, React Native, cloud-native, AI — to keep you ahead.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Talk to the engineers building your product, not account managers. No layers, no lost context.",
  },
];

export function About() {
  return (
    <section className="py-24 md:py-32 relative" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
            >
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
            >
              Engineered for{" "}
              <span className="text-gradient">Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-4"
            >
              We are a team of developers, designers, and problem-solvers committed to building software that makes a real difference. No unnecessary bloat, no over-engineering — just fast, reliable, and beautifully crafted digital products.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-400 leading-relaxed"
            >
              Whether you need to build from scratch, modernize existing systems, or add AI-powered intelligence to your workflows — we are your long-term technology partner.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:bg-cyan-500/[0.03] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5 flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
