"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/#industries" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/#testimonials" },
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
        backgroundColor: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: isScrolled ? "1px solid var(--color-gray-200)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 13L12 16L15 13" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Cloud Winit Solutions
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[var(--color-blue)]"
                style={{ color: "var(--color-gray-600)" }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-md"
              style={{ backgroundColor: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </a>
          </nav>

          <button
            className="lg:hidden transition-colors"
            style={{ color: "var(--color-navy)" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 rounded-xl flex flex-col gap-1 bg-white border shadow-xl"
            style={{ borderColor: "var(--color-gray-200)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--color-gray-50)]"
                style={{ color: "var(--color-gray-700)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--color-orange)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
