"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cloud Winit Solutions transformed our idea into a fully functional platform in record time. Their team understood our vision and delivered beyond expectations.",
    name: "Rahul S.",
    role: "Founder & CEO",
    company: "TechStart Inc.",
  },
  {
    quote: "Their ongoing support and maintenance has been outstanding. Response times are fast, and they proactively suggest improvements we hadn't even considered.",
    name: "Priya M.",
    role: "CTO",
    company: "GrowthBox Solutions",
  },
  {
    quote: "The CRM system they built for us completely streamlined our sales process. We saw a 40% improvement in lead conversion within the first quarter.",
    name: "Amit K.",
    role: "Head of Sales",
    company: "ScaleUp Digital",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6"
          >
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/15 transition-all duration-300"
            >
              <Quote size={24} className="text-violet-400/40 mb-4" />
              <p className="text-zinc-300 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                <p className="text-zinc-500 text-xs">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
