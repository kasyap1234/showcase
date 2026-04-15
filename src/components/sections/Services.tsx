"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Web Applications",
    body: "SaaS platforms, dashboards, portals, e-commerce. React, Next.js, and the modern stack, assembled with care.",
  },
  {
    n: "02",
    title: "Mobile Apps",
    body: "Cross-platform iOS and Android with React Native and Expo. From first MVP to App Store and beyond.",
  },
  {
    n: "03",
    title: "Cloud Solutions",
    body: "AWS, Azure, GCP. Migration, serverless, auto-scaling. Infrastructure that grows quietly with your business.",
  },
  {
    n: "04",
    title: "CRM Systems",
    body: "Custom CRMs built around how your team actually works. Pipelines, reporting, integrations — no bloat.",
  },
  {
    n: "05",
    title: "AI Integrations",
    body: "Chatbots, document intelligence, recommendation engines, generative features. Practical AI, not hype.",
  },
  {
    n: "06",
    title: "Automation",
    body: "Workflow orchestration, scheduled jobs, cross-system syncing. The invisible plumbing your team will stop worrying about.",
  },
  {
    n: "07",
    title: "Support & Maintenance",
    body: "Monitoring, bug fixes, performance tuning, security patches. Dedicated engineers who know your system.",
  },
  {
    n: "08",
    title: "Modernization",
    body: "Legacy to modern stack. Monolith to services. The careful, unglamorous work of making old software new.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative px-6 sm:px-10 lg:px-16 py-32 md:py-40"
    >
      {/* Section header */}
      <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
        <div className="col-span-12 md:col-span-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="label-mono"
            style={{ color: "var(--color-cream-dim)" }}
          >
            02 &nbsp;—&nbsp; services
          </motion.p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-light max-w-4xl"
            style={{ color: "var(--color-cream)" }}
          >
            Full-spectrum{" "}
            <span className="display-serif-italic font-light" style={{ color: "var(--color-accent)" }}>
              software
            </span>{" "}
            for every stage of the journey.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--color-cream-muted)" }}
          >
            We work across the lifecycle — discovery and design through to deployment and the long,
            quiet years of maintenance. A single studio. One team. Senior engineers only.
          </motion.p>
        </div>
      </div>

      {/* Editorial list */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-3">
          <ul className="hairline" style={{ borderColor: "var(--color-rule)" }}>
            {services.map((s, idx) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: (idx % 4) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-b py-8 md:py-10"
                style={{ borderColor: "var(--color-rule)" }}
              >
                <div className="grid grid-cols-12 gap-6 items-baseline">
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className="label-mono"
                      style={{ color: "var(--color-cream-dim)" }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h3
                      className="display-serif text-3xl md:text-4xl font-light leading-tight transition-transform duration-500 group-hover:translate-x-2"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-5 mt-3 md:mt-0">
                    <p
                      className="text-[15px] leading-relaxed"
                      style={{ color: "var(--color-cream-muted)" }}
                    >
                      {s.body}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 md:justify-self-end">
                    <ArrowUpRight
                      size={20}
                      className="opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
