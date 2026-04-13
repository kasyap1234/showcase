"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "About Us", href: "#about" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 border-b border-white/5 bg-black/50 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md border border-white/10 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center shadow-lg group-hover:border-white/30 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                {/* Cloud outer shape simplified into geometric curves */}
                <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* 'W' shape forming the base constraint inside the cloud */}
                <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-white transition-colors">
              Cloud Winit Solutions
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-black bg-white hover:bg-zinc-200 rounded-md transition-all"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 p-4 glass-elevated flex flex-col gap-4 origin-top"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium p-2 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 p-3 text-center text-sm font-medium text-black bg-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
