# Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Cloud Winit Solutions website with expanded services (8 cards), new sections (Stats, How We Work, Tech Stack, Testimonials), gradient accent design, and updated content reflecting full business scope.

**Architecture:** Update existing components (Hero, Services, About, Navbar, Footer) and create 4 new section components. Update global CSS with gradient accent theme. All sections assembled in page.tsx.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion 12, Lucide React icons

---

### Task 1: Update Global CSS — Add Gradient Accent Theme

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update theme colors and add gradient utilities**

Replace the entire contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  /* Font Family */
  --font-display: var(--font-display, "Outfit", sans-serif);
  --font-body: var(--font-body, "Inter", sans-serif);
  --font-mono: var(--font-mono, "JetBrains Mono", monospace);

  /* Colors - Dark + Gradient Accent */
  --color-bg-void: #000000;
  --color-bg-primary: #000000;
  --color-bg-elevated: #0a0a0a;
  --color-bg-subtle: #111111;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  
  /* Gradient Accents */
  --color-accent-blue: #3b82f6;
  --color-accent-violet: #8b5cf6;
  --color-accent-cyan: #06b6d4;

  /* Glassmorphism */
  --color-glass-bg: rgba(0, 0, 0, 0.4);
  --color-glass-border: rgba(255, 255, 255, 0.08);
  --color-glass-hover: rgba(255, 255, 255, 0.12);

  /* Animations */
  --animate-fade-up: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* Utilities */
@utility glass {
  background: var(--color-glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--color-glass-border);
}

@utility glass-elevated {
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

@utility text-gradient {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@utility text-gradient-light {
  background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@utility gradient-border {
  position: relative;
}

@utility gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  pointer-events: none;
}

/* Base resets */
:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(59, 130, 246, 0.3);
  color: #fff;
}
```

- [ ] **Step 2: Verify the dev server picks up changes**

Run: check `http://localhost:3000` in browser — page should still render, selection color should now be blue-tinted.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: update theme with gradient accent colors and new utilities"
```

---

### Task 2: Update Navbar — New Links and Gradient CTA

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Update Navbar with new nav links and gradient CTA button**

Replace the entire contents of `src/components/layout/Navbar.tsx` with:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "How We Work", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
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
        isScrolled ? "py-4 border-b border-white/5 bg-black/60 backdrop-blur-xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center shadow-lg group-hover:border-blue-500/30 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-white">
              Cloud Winit Solutions
            </span>
          </a>

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
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-all shadow-lg shadow-blue-500/20"
            >
              Get in Touch
            </a>
          </nav>

          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 glass-elevated rounded-xl flex flex-col gap-2 origin-top"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium p-3 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 p-3 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg"
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
```

- [ ] **Step 2: Verify in browser**

Check navbar has gradient CTA button, updated links (Services, How We Work, About, Contact), logo has blue/violet tint on hover.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: update navbar with gradient CTA and new navigation links"
```

---

### Task 3: Redesign Hero Section

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Replace Hero with new content and gradient background**

Replace the entire contents of `src/components/sections/Hero.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Dot matrix */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">Your Technology Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold tracking-tight mb-8 leading-[1.05]"
          >
            We Build, Automate{" "}
            <br className="hidden sm:block" />
            & Scale Your{" "}
            <span className="text-gradient">Digital Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From custom web apps and mobile experiences to cloud solutions, CRM systems, 
            AI integrations, and ongoing support — we are your end-to-end technology partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Start a Project
              <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={16} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 text-sm text-zinc-300 rounded-lg font-medium border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center"
            >
              Our Services
            </a>
          </motion.div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Hero should show gradient orb background, blue badge, "We Build, Automate & Scale Your Digital Products" headline with gradient text, gradient CTA button.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: redesign hero with gradient accents and updated content"
```

---

### Task 4: Expand Services Section — 8 Cards

**Files:**
- Modify: `src/components/sections/Services.tsx`

- [ ] **Step 1: Replace Services with 8-card grid and gradient hover effects**

Replace the entire contents of `src/components/sections/Services.tsx` with:

```tsx
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
```

- [ ] **Step 2: Verify in browser**

Should show 4-column grid on desktop, 2 on tablet, 1 on mobile. Cards have gradient icon background, border highlights on hover.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: expand services to 8 cards with gradient hover design"
```

---

### Task 5: Create Stats Section

**Files:**
- Create: `src/components/sections/Stats.tsx`

- [ ] **Step 1: Create the Stats component with animated counters**

Create `src/components/sections/Stats.tsx`:

```tsx
"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
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
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export function Stats() {
  return (
    <section className="py-16 relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-zinc-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit` or check browser console for errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Stats.tsx
git commit -m "feat: add stats section with animated counters"
```

---

### Task 6: Create How We Work Section

**Files:**
- Create: `src/components/sections/HowWeWork.tsx`

- [ ] **Step 1: Create the HowWeWork component with 4-step process**

Create `src/components/sections/HowWeWork.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and technical requirements to understand exactly what you need.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "We architect the solution, plan the tech stack, and design the user experience before writing a line of code.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description: "We build iteratively with regular demos and feedback loops, so you see progress every step of the way.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Support",
    description: "We launch, monitor, maintain, and scale your product as your business grows. We never just build and leave.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 md:py-32 relative" id="process">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6"
          >
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            A proven process that turns your ideas into production-ready digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-blue-500/30" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-blue-500/20">
                <step.icon size={20} className="text-white" />
              </div>
              <span className="text-xs font-mono text-blue-400 mb-2 block">{step.number}</span>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/HowWeWork.tsx
git commit -m "feat: add how we work section with 4-step process"
```

---

### Task 7: Redesign About Section — Why Choose Us

**Files:**
- Modify: `src/components/sections/About.tsx`

- [ ] **Step 1: Replace About with differentiators grid design**

Replace the entire contents of `src/components/sections/About.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { Users, Heart, Cpu, MessageCircle } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Senior Engineering Team",
    description: "No juniors, no outsourcing. Every project is handled by experienced engineers who have shipped at scale.",
  },
  {
    icon: Heart,
    title: "Full Lifecycle Partner",
    description: "We don't just build and leave. From day one through ongoing support, we grow alongside your business.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "We use the latest proven technologies — React, Next.js, React Native, cloud-native, AI — to keep you ahead.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Talk to the engineers building your product, not account managers. No layers, no lost context.",
  },
];

export function About() {
  return (
    <section className="py-24 md:py-32 relative" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
            >
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
            >
              Engineered for{" "}
              <span className="text-gradient">Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-4"
            >
              We are a team of developers, designers, and problem-solvers committed to building software that makes a real difference. No unnecessary bloat, no over-engineering — just fast, reliable, and beautifully crafted digital products.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-400 leading-relaxed"
            >
              Whether you need to build from scratch, modernize existing systems, or add AI-powered intelligence to your workflows — we are your long-term technology partner.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:bg-cyan-500/[0.03] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5 flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Should show 2-column layout: left side with text, right side with 2x2 grid of differentiator cards with cyan accent.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/About.tsx
git commit -m "feat: redesign about section with differentiators grid"
```

---

### Task 8: Create Tech Stack Section

**Files:**
- Create: `src/components/sections/TechStack.tsx`

- [ ] **Step 1: Create TechStack component with categorized tech display**

Create `src/components/sections/TechStack.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Mobile",
    techs: ["React Native", "Expo"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Cloud",
    techs: ["AWS", "Azure", "GCP", "Docker"],
  },
  {
    name: "AI / ML",
    techs: ["OpenAI", "LangChain", "TensorFlow"],
  },
];

export function TechStack() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5" id="tech">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
          >
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Technologies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight"
          >
            Our Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            We use modern, battle-tested technologies to build products that are fast, scalable, and maintainable.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-zinc-300 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/TechStack.tsx
git commit -m "feat: add tech stack section with categorized technologies"
```

---

### Task 9: Create Testimonials Section

**Files:**
- Create: `src/components/sections/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials component with placeholder quotes**

Create `src/components/sections/Testimonials.tsx`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Testimonials.tsx
git commit -m "feat: add testimonials section with client quotes"
```

---

### Task 10: Update Contact CTA Section and Footer

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update Footer with expanded services and gradient accents**

Replace the entire contents of `src/components/layout/Footer.tsx` with:

```tsx
import { Globe, MessageCircle, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-medium text-lg tracking-tight text-white">
                Cloud Winit Solutions
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Your end-to-end technology partner. We build, automate, and scale digital products — from web and mobile apps to cloud solutions, CRM systems, and AI integrations.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 text-zinc-400 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 text-zinc-400 hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 text-zinc-400 hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">CRM Development</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">AI Integrations</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Automation</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Support & Maintenance</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Modernization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#process" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">How We Work</a></li>
              <li><a href="#tech" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Tech Stack</a></li>
              <li><a href="mailto:hello@cloudwinitsolutions.com" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} /> Contact Us
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Cloud Winit Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: update footer with all 8 services and gradient accents"
```

---

### Task 11: Assemble All Sections in page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update page.tsx with all sections in correct order**

Replace the entire contents of `src/app/page.tsx` with:

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <HowWeWork />
      <About />
      <TechStack />
      <Testimonials />

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 md:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@cloudwinitsolutions.com"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 px-8 text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/25"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Update layout.tsx metadata**

Update the metadata in `src/app/layout.tsx` to reflect the full scope:

Change the metadata object to:
```tsx
export const metadata: Metadata = {
  title: "Cloud Winit Solutions - Web, Mobile, Cloud, AI & CRM Development",
  description: "Your end-to-end technology partner. We build, automate, and scale digital products — custom web apps, mobile apps, cloud solutions, CRM systems, AI integrations, and ongoing support.",
};
```

- [ ] **Step 3: Verify full page in browser**

Check `http://localhost:3000`:
- All 10 sections render in order
- No console errors
- Gradient accents visible throughout
- Responsive on mobile (resize browser)
- All scroll links work (Services, How We Work, About, Contact)

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/layout.tsx
git commit -m "feat: assemble all sections and update metadata"
```
