"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services", n: "02" },
  { name: "Process", href: "#process", n: "04" },
  { name: "Studio", href: "#about", n: "05" },
  { name: "Contact", href: "#contact", n: "09" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? "rgba(14, 13, 11, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--color-rule)" : "1px solid transparent",
      }}
    >
      <div className="px-6 sm:px-10 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span
              className="display-serif-italic text-xl font-light tracking-tight"
              style={{ color: "var(--color-cream)" }}
            >
              Cloud Winit
            </span>
            <span className="label-mono hidden sm:inline" style={{ color: "var(--color-cream-dim)" }}>
              Solutions
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group inline-flex items-baseline gap-1.5 transition-colors"
              >
                <span className="label-mono" style={{ color: "var(--color-cream-dim)" }}>
                  {link.n}
                </span>
                <span
                  className="text-[15px] transition-colors"
                  style={{ color: "var(--color-cream-muted)" }}
                >
                  {link.name}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[15px]"
              style={{ color: "var(--color-cream)" }}
            >
              <span
                className="display-serif-italic underline-offset-[6px] decoration-[1px] group-hover:underline"
                style={{ textDecorationColor: "var(--color-accent)" }}
              >
                Start a project
              </span>
            </a>
          </nav>

          <button
            className="md:hidden transition-colors"
            style={{ color: "var(--color-cream)" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 p-6 rounded-sm flex flex-col gap-4"
            style={{
              backgroundColor: "var(--color-ink-elevated)",
              border: "1px solid var(--color-rule)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-baseline gap-3 py-2"
                style={{ color: "var(--color-cream)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="label-mono" style={{ color: "var(--color-cream-dim)" }}>
                  {link.n}
                </span>
                <span className="display-serif-italic text-xl font-light">{link.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
