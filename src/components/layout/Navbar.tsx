"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

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
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:rotate-[15deg]">
                <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13L12 16L15 13" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span
              className="text-lg sm:text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              <span className="hidden xs:inline">Cloud Winit Solutions</span>
              <span className="xs:hidden">Cloud Winit</span>
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

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl z-[60] flex flex-col p-8 pt-24"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="group py-4 border-b border-gray-50 flex items-center justify-between text-lg font-semibold"
                      style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ArrowRight size={18} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[var(--color-orange)]" />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href="/#contact"
                    className="w-full h-14 flex items-center justify-center rounded-xl text-white font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform"
                    style={{ backgroundColor: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                  
                  <div className="flex items-center justify-center gap-6 mt-8">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-[var(--color-navy)] transition-colors hover:bg-[var(--color-orange)] hover:text-white"
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
