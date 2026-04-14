"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Brain,
  Zap,
  Wrench,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Custom web apps, SaaS platforms, dashboards, and portals built with React, Next.js, and modern backends.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform iOS & Android apps with React Native — from MVP to production with App Store deployment.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud-native architecture on AWS, Azure, and GCP. Migration, serverless, auto-scaling, and cost optimization.",
  },
  {
    icon: Users,
    title: "CRM Development",
    description: "Custom CRM systems for lead management, sales pipelines, and customer tracking with third-party integrations.",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    description: "Chatbots, intelligent document processing, AI analytics, recommendation engines, and generative AI features.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Business process automation, scheduled tasks, workflow orchestration, and data syncing between systems.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "24/7 monitoring, bug fixes, performance tuning, security patches, and SLA-backed dedicated support.",
  },
  {
    icon: RefreshCw,
    title: "Modernization",
    description: "Legacy to modern stack migration, monolith to microservices, database optimization, and UI/UX redesign.",
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 relative" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
          >
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
          >
            Full-Spectrum Digital Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            From building your first product to scaling enterprise systems — we cover every stage of your digital journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/5 flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all">
                <service.icon size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
