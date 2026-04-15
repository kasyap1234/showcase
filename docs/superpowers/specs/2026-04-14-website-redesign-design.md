# Cloud Winit Solutions — Website Redesign Spec

## Overview
Redesign the Cloud Winit Solutions website to showcase the full scope of services (Web, Mobile, Cloud, CRM, AI, Automation, Support) with a modern dark + gradient accent design that creates proper visual hierarchy, contrast, and engagement.

## Design Direction
- **Theme:** Dark base (#000, #0a0a0a) with blue-to-purple gradient accents
- **Accent Colors:** Primary gradient: `#3b82f6` (blue-500) → `#8b5cf6` (violet-500), secondary: `#06b6d4` (cyan-500)
- **Fonts:** Keep Outfit (display), Inter (body), JetBrains Mono (code)
- **Effects:** Glassmorphism cards, gradient borders, subtle glow on hover, animated counters
- **Animations:** Framer Motion staggered reveals, smooth scroll

## Page Sections (Top to Bottom)

### 1. Navbar (update existing)
- Logo + Cloud Winit Solutions
- Links: Services, How We Work, About, Contact
- CTA: "Get in Touch" button with gradient border

### 2. Hero Section (update existing)
- Badge: "Your Technology Partner"
- Headline: "We Build, Automate & Scale Your Digital Products"
- Subheadline: Covering web apps, mobile apps, cloud solutions, CRM, AI integrations, and ongoing support
- CTAs: "Start a Project" (gradient fill) + "Our Services" (outline)
- Subtle animated gradient orb/mesh in background

### 3. Services Grid (expand from 3 to 8)
Cards with icon, title, description:
1. **Web Applications** — Custom web apps, SaaS platforms, dashboards, portals using React, Next.js, Node.js
2. **Mobile Apps** — Cross-platform iOS & Android apps with React Native, from MVP to App Store
3. **Cloud Solutions** — Cloud-native architecture on AWS/Azure/GCP, migration, serverless, auto-scaling
4. **CRM Development** — Custom CRM systems, lead management, sales pipelines, third-party CRM integrations
5. **AI Integrations** — Chatbots, intelligent document processing, AI analytics, recommendation engines, generative AI
6. **Automation** — Business process automation, scheduled tasks, workflow orchestration, data syncing
7. **Support & Maintenance** — 24/7 monitoring, bug fixes, performance tuning, security patches, SLA-backed support
8. **Modernization** — Legacy to modern stack migration, monolith to microservices, UI/UX redesign

Layout: 2 cols on mobile, 4 cols on desktop. Cards have gradient border on hover, icon with accent color.

### 4. Stats Section (new)
Animated counters in a horizontal bar:
- "50+" Projects Delivered
- "30+" Happy Clients  
- "99.9%" Uptime Guarantee
- "24/7" Support Available

Background: subtle gradient mesh or dark elevated surface.

### 5. How We Work (new)
4-step horizontal timeline:
1. **Discovery** — Understand your business, goals, and technical requirements
2. **Design** — Architect the solution, plan the stack, design the UI/UX
3. **Development** — Build iteratively with regular demos and feedback loops
4. **Support** — Deploy, monitor, maintain, and scale as your business grows

Connected by a gradient line, each step has a numbered circle and icon.

### 6. About / Why Choose Us (update existing)
Replace the code-block aesthetic with:
- Headline: "Engineered for Impact"
- Body: Our story — senior engineering team, direct communication, long-term partnerships
- 4 differentiators in a grid:
  - "Senior Engineering Team" — No juniors, no handoffs
  - "Full Lifecycle Partner" — Build to support, not build and leave
  - "Modern Tech Stack" — Always current, always scalable
  - "Direct Communication" — Talk to engineers, not account managers

### 7. Tech Stack (new)
Visual grid of technology logos/icons:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Mobile: React Native, Expo
- Backend: Node.js, Python, PostgreSQL, MongoDB
- Cloud: AWS, Azure, GCP, Docker
- AI/ML: OpenAI, TensorFlow, LangChain

Subtle grayscale icons that colorize on hover.

### 8. Testimonials (new, placeholder)
Carousel or grid of 2-3 testimonial cards:
- Quote text, client name, role, company
- Placeholder content for now, clearly marked

### 9. CTA Section (update existing)
- Headline: "Let's Build Something Great Together"
- Subtext: "Tell us about your project and we'll get back within 24 hours"
- CTA button: "Start a Conversation" with gradient
- Email: hello@cloudwinitsolutions.com

### 10. Footer (update existing)
- Logo + tagline
- Services column (all 8 services)
- Company column (About, How We Work, Contact)
- Social links
- Copyright 2026

## Files to Modify
- `src/app/page.tsx` — Update section order and add new sections
- `src/app/globals.css` — Add gradient utilities, new animations
- `src/components/layout/Navbar.tsx` — Update nav links
- `src/components/layout/Footer.tsx` — Expand service links
- `src/components/sections/Hero.tsx` — New content + gradient background
- `src/components/sections/Services.tsx` — Expand to 8 cards with new design
- `src/components/sections/About.tsx` — Redesign with differentiators grid

## New Files to Create
- `src/components/sections/Stats.tsx`
- `src/components/sections/HowWeWork.tsx`
- `src/components/sections/TechStack.tsx`
- `src/components/sections/Testimonials.tsx`
