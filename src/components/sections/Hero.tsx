"use client";

import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setDisplay(Math.floor(value).toString());
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: ".9%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* CWS Watermark */}
      <div className="watermark absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[16rem] md:text-[28rem] lg:text-[36rem] z-0 opacity-5 sm:opacity-[0.03]">
        cws
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24" style={{ background: "linear-gradient(180deg, var(--color-gray-50) 0%, var(--color-white) 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[480px]">
            {/* Left Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
              >
                Your Trusted Technology Partner
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
              >
                Helping businesses reduce costs and scale faster with{" "}
                <span style={{ color: "var(--color-blue)" }}>custom software</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "var(--color-gray-500)" }}
              >
                From idea to launch, we build web applications, hybrid mobile apps,
                and cloud platforms that help businesses streamline operations, reduce costs,
                and scale with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex w-full sm:w-auto h-14 sm:h-12 items-center justify-center rounded-lg px-7 text-sm font-semibold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="inline-flex w-full sm:w-auto h-14 sm:h-12 items-center justify-center rounded-lg px-7 text-sm font-semibold border-2 transition-all text-[var(--color-navy)] border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Explore Services
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/sales_girl_talking.png"
                  alt="Professional team building software solutions"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border p-4" style={{ borderColor: "var(--color-gray-200)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--color-orange)" }}>
                    <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-heading)" }}>5+</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--color-navy)" }}>Years Experience</p>
                    <p className="text-[10px]" style={{ color: "var(--color-gray-500)" }}>Delivering excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-orange)" }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium" style={{ color: "rgba(147, 197, 253, 0.8)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
