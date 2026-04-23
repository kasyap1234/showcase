"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cloud Winit transformed our outdated inventory system into a modern, efficient platform. Their team was responsive, professional, and delivered beyond our expectations.",
    name: "Rajesh Kumar",
    initials: "RK",
    role: "CEO",
    company: "TechVista Solutions",
    color: "var(--color-navy)",
  },
  {
    quote: "Their hybrid mobile app for our logistics operations has been a game-changer. Real-time tracking, offline support, and a smooth user experience our drivers love.",
    name: "Sarah Patel",
    initials: "SP",
    role: "COO",
    company: "SwiftLogistics",
    color: "var(--color-blue)",
  },
  {
    quote: "What sets Cloud Winit apart is their commitment to long-term support. They didn't just build our platform and leave — they've been our technology partner for over two years now.",
    name: "Anita Mehta",
    initials: "AM",
    role: "Founder",
    company: "HealthBridge",
    color: "var(--color-orange)",
  },
];

export function Testimonials() {
  return (
    <section className="relative" id="testimonials" style={{ backgroundColor: "var(--color-white)", paddingBlock: "var(--section-py)" }}>
      <div className="max-w-7xl mx-auto px-[var(--container-px)]">
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ 
              fontFamily: "var(--font-heading)", 
              color: "var(--color-navy)",
              fontSize: "clamp(1.875rem, 6vw, 2.25rem)"
            }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-gray-200)",
                backgroundColor: "var(--color-gray-50)",
              }}
            >
              <div className="text-3xl mb-4" style={{ color: "var(--color-orange)" }}>&ldquo;</div>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-gray-600)" }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: t.color, fontFamily: "var(--font-heading)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--color-navy)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-gray-500)" }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
