"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Subtle background glyph — oversized numeral */}
      <div className="pointer-events-none absolute -bottom-20 -right-12 select-none opacity-[0.04]">
        <span
          className="display-serif-italic text-[40rem] leading-none text-cream"
          style={{ color: "var(--color-cream)" }}
        >
          cws
        </span>
      </div>

      {/* Top label row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between"
      >
        <span className="label-mono" style={{ color: "var(--color-cream-dim)" }}>
          01 &nbsp;—&nbsp; overview
        </span>
        <span className="label-mono hidden sm:inline" style={{ color: "var(--color-cream-dim)" }}>
          Est. Cloud Winit Solutions
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 grid grid-cols-12 gap-6 items-end my-16 md:my-24">
        <div className="col-span-12 lg:col-span-9">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="display-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] font-light"
            style={{ color: "var(--color-cream)" }}
          >
            We build,{" "}
            <span className="display-serif-italic font-light" style={{ color: "var(--color-accent)" }}>
              automate
            </span>
            ,
            <br />
            &amp; maintain{" "}
            <span className="display-serif-italic font-light">software</span>
            <br />
            for serious teams.
          </motion.h1>
        </div>

        {/* Asymmetric right column — pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-3 lg:pl-4 lg:pb-6 border-l hidden lg:block"
          style={{ borderColor: "var(--color-rule)" }}
        >
          <p
            className="display-serif-italic text-xl leading-snug pl-4"
            style={{ color: "var(--color-cream-muted)" }}
          >
            &ldquo;Long-term partners, not vendors.&rdquo;
          </p>
          <p className="label-mono pl-4 mt-3" style={{ color: "var(--color-cream-dim)" }}>
            — Our approach
          </p>
        </motion.div>
      </div>

      {/* Bottom row — description + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative z-10"
      >
        <div className="hairline pt-6 grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-6">
            <p
              className="text-base leading-relaxed max-w-md"
              style={{ color: "var(--color-cream-muted)" }}
            >
              A small technology studio for ambitious teams. Web apps, mobile, cloud,
              CRM, AI workflows, and the ongoing craft of keeping software excellent.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col sm:flex-row gap-6 sm:gap-10 md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-[15px] transition-colors"
              style={{ color: "var(--color-cream)" }}
            >
              <span
                className="display-serif-italic text-lg underline-offset-[6px] decoration-[1px] group-hover:underline"
                style={{ textDecorationColor: "var(--color-accent)" }}
              >
                Start a project
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-[15px] transition-colors"
              style={{ color: "var(--color-cream-muted)" }}
            >
              <span className="display-serif-italic text-lg">See capabilities</span>
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
