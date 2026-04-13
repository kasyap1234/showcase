"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Workflow, ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section className="py-32 relative border-t border-white/5" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-display font-medium mb-6 text-white tracking-tight"
            >
              Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              End-to-end engineering from system architecture to pixel-perfect interfaces. 
              We build robust platforms designed to scale with your business.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          
          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black p-10 group relative transition-colors"
          >
            <div className="mb-6 flex justify-between items-start">
               <div className="w-10 h-10 border border-white/10 rounded-md flex items-center justify-center bg-zinc-950 text-zinc-300">
                 <Monitor size={18} />
               </div>
               <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Web Applications</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              High-performance web platforms using React, Next.js, and modern backends. Accessible, responsive, and secure by default.
            </p>
            <ul className="text-sm text-zinc-500 space-y-2 font-mono">
              <li>01. Front-end Architecture</li>
              <li>02. API Development</li>
              <li>03. Performance Tuning</li>
            </ul>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black p-10 group relative transition-colors"
          >
             <div className="mb-6 flex justify-between items-start">
               <div className="w-10 h-10 border border-white/10 rounded-md flex items-center justify-center bg-zinc-950 text-zinc-300">
                 <Smartphone size={18} />
               </div>
               <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Hybrid Mobile Apps</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Native-feeling mobile experiences for iOS and Android built from a single cohesive codebase.
            </p>
            <ul className="text-sm text-zinc-500 space-y-2 font-mono">
              <li>01. React Native / Expo</li>
              <li>02. Cross-platform UI</li>
              <li>03. App Store Deployment</li>
            </ul>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black p-10 group relative transition-colors"
          >
             <div className="mb-6 flex justify-between items-start">
               <div className="w-10 h-10 border border-white/10 rounded-md flex items-center justify-center bg-zinc-950 text-zinc-300">
                 <Workflow size={18} />
               </div>
               <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">System Architecture</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Scalable infrastructure, seamless deployments, and ongoing maintenance to ensure maximum uptime.
            </p>
            <ul className="text-sm text-zinc-500 space-y-2 font-mono">
              <li>01. Cloud Infrastructure</li>
              <li>02. CI/CD Pipelines</li>
              <li>03. 24/7 Ongoing Support</li>
            </ul>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
