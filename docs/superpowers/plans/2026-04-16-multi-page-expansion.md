# Multi-Page Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand Cloud Winit Solutions from a single-page site into a multi-page website with About, Services listing, and 6 service detail pages.

**Architecture:** Next.js App Router file-based routing. 3 shared components (PageHero, CTABanner, Breadcrumb) used across all sub-pages. Service detail pages share a common layout pattern with per-page content data. Navbar updated from anchor links to page routes.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Lucide React icons, Sora + DM Sans fonts.

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/components/shared/Breadcrumb.tsx` | Breadcrumb navigation component |
| Create | `src/components/shared/PageHero.tsx` | Reusable navy gradient hero banner with breadcrumb |
| Create | `src/components/shared/CTABanner.tsx` | Reusable CTA section with navy gradient |
| Modify | `src/components/layout/Navbar.tsx` | Update links from anchors to page routes |
| Create | `src/app/about/page.tsx` | About page — story, mission, values, differentiators |
| Create | `src/app/services/page.tsx` | Services listing — cards linking to detail pages |
| Create | `src/app/services/web-applications/page.tsx` | Web Applications service detail |
| Create | `src/app/services/mobile-apps/page.tsx` | Mobile Apps service detail |
| Create | `src/app/services/cloud-solutions/page.tsx` | Cloud Solutions service detail |
| Create | `src/app/services/ai-automation/page.tsx` | AI & Automation service detail |
| Create | `src/app/services/crm-business-tools/page.tsx` | CRM & Business Tools service detail |
| Create | `src/app/services/support-maintenance/page.tsx` | Support & Maintenance service detail |
| Modify | `src/components/sections/Services.tsx` | Add links from homepage cards to detail pages |
| Modify | `src/app/page.tsx` | Update "Explore Services" href to `/services` |

---

### Task 1: Create Breadcrumb Component

**Files:**
- Create: `src/components/shared/Breadcrumb.tsx`

- [ ] **Step 1: Create the Breadcrumb component**

```tsx
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center gap-2">
          {idx > 0 && <ChevronRight size={14} className="text-white/40" />}
          {item.href ? (
            <a
              href={item.href}
              className="text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-white/90 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
```

- [ ] **Step 2: Verify it renders**

Run: `bun run dev`
No build errors expected — component not yet used.

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/Breadcrumb.tsx
git commit -m "feat: add Breadcrumb shared component"
```

---

### Task 2: Create PageHero Component

**Files:**
- Create: `src/components/shared/PageHero.tsx`

- [ ] **Step 1: Create the PageHero component**

```tsx
import { Breadcrumb } from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
    >
      {/* CWS Watermark */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[14rem] md:text-[20rem] font-extrabold uppercase text-white opacity-[0.04] pointer-events-none select-none leading-none tracking-tighter"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        cws
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Breadcrumb items={breadcrumbs} />
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-6 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg mt-4 max-w-2xl" style={{ color: "rgba(191, 219, 254, 0.8)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no build errors**

Run: `bun run dev`
Expected: compiles cleanly.

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/PageHero.tsx
git commit -m "feat: add PageHero shared component"
```

---

### Task 3: Create CTABanner Component

**Files:**
- Create: `src/components/shared/CTABanner.tsx`

- [ ] **Step 1: Create the CTABanner component**

```tsx
interface CTABannerProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({ heading, description, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
    >
      {/* CWS Watermark */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[14rem] md:text-[18rem] font-extrabold uppercase text-white opacity-[0.04] pointer-events-none select-none leading-none tracking-tighter"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        cws
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heading}
        </h2>
        {description && (
          <p className="text-base md:text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(191, 219, 254, 0.8)" }}>
            {description}
          </p>
        )}
        <a
          href={buttonHref}
          className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
          style={{ backgroundColor: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no build errors**

Run: `bun run dev`
Expected: compiles cleanly.

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/CTABanner.tsx
git commit -m "feat: add CTABanner shared component"
```

---

### Task 4: Update Navbar with Page Routes

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Update navLinks array**

Replace the `navLinks` array at the top of the file:

```tsx
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/#industries" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/#testimonials" },
];
```

- [ ] **Step 2: Update Contact Us button href**

Change `href="#contact"` to `href="/#contact"` on both the desktop and mobile Contact Us buttons (2 occurrences).

- [ ] **Step 3: Verify navigation works**

Run: `bun run dev`
Open http://localhost:3000. Click "About" — should navigate to `/about` (will 404 for now, that's expected). Click "Home" — should go back to `/`. Anchor links like "Industries" should scroll on homepage.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: update navbar with page routes"
```

---

### Task 5: Create About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create the About page**

Create `src/app/about/page.tsx` with these sections in order:
1. Import `PageHero` and `CTABanner` from `@/components/shared/`
2. Import `motion` from `framer-motion`
3. Import icons: `Target, Zap, Handshake, ShieldCheck, Lightbulb, Eye, Award, Users` from `lucide-react`
4. Add `"use client"` directive at top
5. Add Next.js metadata export for title: "About Us — Cloud Winit Solutions"

**Page sections:**

**PageHero** — title: "About Cloud Winit Solutions", subtitle: "A dedicated team of engineers building custom software solutions that help businesses grow.", breadcrumbs: Home > About Us

**Our Story** — Two-column grid (lg:grid-cols-2). Left column: 3 paragraphs:
- Para 1: "Cloud Winit Solutions was founded with a simple belief: every business deserves access to high-quality, custom software. We saw too many companies stuck with off-the-shelf tools that didn't fit their workflows, or stuck with agencies that built and disappeared. We decided to do things differently."
- Para 2: "As a small, agile team of experienced engineers, we work closely with every client — no account managers, no outsourcing, no layers of bureaucracy. When you work with us, you talk directly to the people building your product. That means faster decisions, fewer misunderstandings, and better software."
- Para 3: "Today, we've delivered over 50 projects across healthcare, fintech, logistics, e-commerce, and more. But what we're most proud of isn't the number — it's the fact that most of our clients have stayed with us for ongoing support and new projects. That's the kind of partnership we believe in."

Right column: Navy gradient rounded box (same style as homepage hero illustration) with 4 service icons (Globe, Smartphone, Cloud, Bot) in a row, and a stats strip below showing "5+ Years | 50+ Projects | 30+ Clients".

**Mission & Vision** — Two cards in a row (md:grid-cols-2), each with light gray bg, icon, title, and text:
- Mission card (Target icon, orange): "To deliver reliable, custom software solutions that help businesses operate smarter, serve customers better, and grow faster — with technology that works as hard as they do."
- Vision card (Eye icon, blue): "To be the most trusted technology partner for businesses seeking digital transformation — known for honest communication, quality engineering, and long-term commitment."

**Our Values** — 4 cards in a row (md:grid-cols-4):
- Innovation (Lightbulb icon): "We stay current with the latest technologies and approaches, always looking for better ways to solve problems."
- Transparency (Eye icon): "No surprises. Clear timelines, honest communication, and regular updates at every stage of your project."
- Quality (Award icon): "We don't cut corners. Every line of code is written with care, tested thoroughly, and built to last."
- Partnership (Users icon): "Your success is our success. We invest in understanding your business because great software starts with great relationships."

**Why Choose Us** — 4 expanded cards (md:grid-cols-2), same differentiators as homepage but with full paragraphs:
- Client-First Approach: "Every project starts with listening. We take the time to understand your business, your users, and your challenges before proposing any solution. This isn't just a process — it's how we've maintained a 95% client satisfaction rate across 50+ projects."
- Agile & Transparent: "You'll never wonder where your project stands. We work in 2-week sprints with regular demos, and you have direct access to your development team at all times. No middlemen, no status reports that hide the truth."
- Long-Term Partners: "Over 70% of our clients continue working with us after their initial project. We don't just build and leave — we provide ongoing support, maintenance, and feature development as your business evolves."
- Proven & Reliable: "With 99.9% uptime across all client applications and zero critical incidents in our support portfolio, we deliver software you can depend on. Our engineering practices — code reviews, automated testing, monitoring — ensure quality at every level."

**CTABanner** — heading: "Ready to Work With Us?", description: "Let's discuss how we can help your business grow with custom software solutions.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify the page renders**

Run: `bun run dev`
Open http://localhost:3000/about. All 6 sections should render. Check mobile responsiveness at 375px width.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: add About page with story, mission, values, differentiators"
```

---

### Task 6: Create Services Listing Page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create the Services listing page**

Create `src/app/services/page.tsx`:
1. `"use client"` directive
2. Import `PageHero`, `CTABanner` from `@/components/shared/`
3. Import `motion` from `framer-motion`
4. Import icons: `Globe, Smartphone, Cloud, Bot, Wrench, Shield` from `lucide-react`
5. Import `Link` from `next/link`

Define services array (same 6 services as homepage with same icons, colors, descriptions) but add a `href` field to each:
- Web Applications → `/services/web-applications`
- Hybrid Mobile Apps → `/services/mobile-apps`
- Cloud Solutions → `/services/cloud-solutions`
- AI & Automation → `/services/ai-automation`
- CRM & Business Tools → `/services/crm-business-tools`
- Support & Maintenance → `/services/support-maintenance`

**PageHero** — title: "Our Services", subtitle: "End-to-end software solutions designed to help your business operate smarter, serve customers better, and grow faster.", breadcrumbs: Home > Services

**Services Grid** — Same 2-per-row card layout as homepage Services section, but each card is wrapped in a `<Link>` to its detail page. Add "Learn More →" text at the bottom of each card in orange color.

**CTABanner** — heading: "Not Sure What You Need?", description: "Tell us about your business challenges and we'll recommend the right solution.", buttonText: "Let's Discuss", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify the page renders**

Run: `bun run dev`
Open http://localhost:3000/services. 6 cards should render, 2 per row. Clicking a card should navigate to the detail page route (will 404 for now).

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: add Services listing page with linked cards"
```

---

### Task 7: Create Web Applications Service Detail Page

**Files:**
- Create: `src/app/services/web-applications/page.tsx`

- [ ] **Step 1: Create the page**

Create `src/app/services/web-applications/page.tsx`:
1. `"use client"` directive
2. Import `PageHero`, `CTABanner` from shared
3. Import `motion` from `framer-motion`

**PageHero** — title: "Custom Web Applications", subtitle: "Scalable web solutions built for your business", breadcrumbs: Home > Services > Web Applications

**Overview** (white bg section):
- "In today's digital-first world, your web application is often the primary way customers interact with your business. Whether you need an e-commerce platform, an internal management system, or a customer-facing portal, we build web applications that are fast, secure, and designed to scale."
- "We work with you from initial requirements through deployment and beyond — ensuring your application not only meets today's needs but is architected to grow with your business. Every application we build is mobile-responsive, accessible, and optimized for performance."
- "Our team specializes in modern JavaScript frameworks and cloud-native architectures, allowing us to deliver applications that load fast, handle traffic spikes, and integrate seamlessly with your existing tools and services."

**What We Build** (gray-50 bg) — 6 cards in 2x3 grid, each with title + 2-line description:
1. E-Commerce Platforms: "Custom online stores with product management, secure payments, inventory tracking, and analytics dashboards."
2. Inventory Management Systems: "Real-time stock tracking, automated reorder alerts, barcode scanning, and multi-warehouse support."
3. HR Portals: "Employee onboarding, leave management, performance reviews, and payroll integration — all in one place."
4. Booking Engines: "Appointment scheduling, resource management, automated reminders, and calendar integrations for service-based businesses."
5. Business Dashboards: "Real-time data visualization, KPI tracking, and reporting tools that help you make better decisions faster."
6. Customer Portals: "Self-service portals where your clients can track orders, submit requests, view invoices, and communicate with your team."

**Our Approach** (white bg) — 4 numbered steps:
1. Requirements & Planning: "We map your workflows, identify pain points, and define exactly what your application needs to do."
2. UI/UX Design: "Wireframes and interactive prototypes so you can see and test the experience before development begins."
3. Agile Development: "Two-week sprints with regular demos. You see progress, give feedback, and steer the direction."
4. Launch & Support: "Thorough testing, staged deployment, and ongoing monitoring to ensure everything runs smoothly."

**Technologies** — Pills: React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Tailwind CSS, REST APIs, GraphQL

**Case Study** (gray-50 bg) — Card with left blue border:
- Client: "MediTrack — Healthcare Supply Chain"
- Challenge: "A regional hospital network was tracking medical supplies across 12 locations using spreadsheets. Errors were frequent, stockouts caused delays in patient care, and monthly audits took weeks."
- Solution: "We built a real-time inventory management platform with barcode scanning, automated reorder thresholds, expiration date tracking, and a centralized dashboard for all locations."
- Results: "60% reduction in inventory errors | 3x faster stock audits | Zero stockouts in critical supplies after 6 months"

**CTABanner** — heading: "Need a Custom Web Application?", description: "Let's discuss your project and find the right solution for your business.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify the page renders**

Run: `bun run dev`
Open http://localhost:3000/services/web-applications. All sections should render correctly.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/web-applications/page.tsx
git commit -m "feat: add Web Applications service detail page"
```

---

### Task 8: Create Mobile Apps Service Detail Page

**Files:**
- Create: `src/app/services/mobile-apps/page.tsx`

- [ ] **Step 1: Create the page**

Same template structure as Task 7 but with mobile-specific content:

**PageHero** — title: "Hybrid Mobile Apps", subtitle: "Native-quality apps on both platforms", breadcrumbs: Home > Services > Mobile Apps

**Overview:**
- "Mobile is where your customers are. Whether they're tracking deliveries, managing appointments, or accessing critical business data on the go, a well-built mobile app can transform how your business operates and how customers experience your brand."
- "We build hybrid mobile apps using React Native — a single codebase that runs natively on both iOS and Android. This means faster development, lower costs, and a consistent experience across platforms without sacrificing performance or native feel."
- "From healthcare apps that connect patients with providers to logistics trackers that give real-time visibility across your supply chain, we've built mobile solutions for businesses that need reliability, offline capability, and intuitive user experiences."

**What We Build** — 6 cards:
1. Healthcare Apps: "Patient portals, appointment booking, telehealth integration, medication reminders, and secure health data management."
2. Logistics Trackers: "Real-time GPS tracking, route optimization, delivery confirmation, offline mode, and driver management dashboards."
3. Fintech Solutions: "Secure payment apps, digital wallets, expense trackers, and investment portfolio management tools."
4. Customer-Facing Apps: "Brand apps with loyalty programs, push notifications, in-app purchases, and personalized user experiences."
5. Field Service Apps: "Job scheduling, on-site data collection, digital forms, photo capture, and real-time sync with back-office systems."
6. Internal Team Tools: "Team communication, task management, time tracking, and approval workflows for distributed teams."

**Our Approach** — 4 steps:
1. Discovery & Prototyping: "We define user flows, create interactive prototypes, and test with real users before writing code."
2. Cross-Platform Development: "One codebase, two platforms. React Native delivers native performance on iOS and Android simultaneously."
3. Testing & QA: "Device testing across multiple screen sizes, OS versions, and network conditions to ensure a flawless experience."
4. App Store Launch: "We handle submission, review compliance, and post-launch monitoring for both Apple App Store and Google Play."

**Technologies** — Pills: React Native, Expo, TypeScript, Firebase, REST APIs, Push Notifications, SQLite, Redux

**Case Study:**
- Client: "SwiftDeliver — Logistics & Delivery"
- Challenge: "A mid-size delivery company had no real-time visibility into their fleet of 200+ drivers. Dispatchers relied on phone calls, routes were planned manually, and customers couldn't track their packages."
- Solution: "We built a cross-platform mobile app with live GPS tracking, intelligent route optimization, proof-of-delivery photo capture, and offline mode for areas with poor connectivity. A companion web dashboard gives dispatchers real-time fleet visibility."
- Results: "40% improvement in delivery times | 95% driver adoption within 2 weeks | Customer complaints down 60%"

**CTABanner** — heading: "Need a Mobile App?", description: "Let's build a mobile experience your customers and team will love.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/services/mobile-apps/page.tsx
git commit -m "feat: add Mobile Apps service detail page"
```

---

### Task 9: Create Cloud Solutions Service Detail Page

**Files:**
- Create: `src/app/services/cloud-solutions/page.tsx`

- [ ] **Step 1: Create the page**

Same template. Content:

**PageHero** — title: "Cloud Solutions", subtitle: "Infrastructure that scales with your ambition", breadcrumbs: Home > Services > Cloud Solutions

**Overview:**
- "The cloud isn't just about hosting — it's about building infrastructure that scales automatically, stays resilient under pressure, and costs only what you use. Whether you're migrating from on-premise servers or building cloud-native from day one, we design infrastructure that grows with your business."
- "We're experienced across all three major cloud providers — AWS, Azure, and GCP — and we'll recommend the right platform based on your specific needs, existing tools, and budget. No vendor lock-in, no unnecessary complexity."
- "From serverless architectures that eliminate server management to CI/CD pipelines that automate your deployments, we build the infrastructure foundation that lets your development team move fast and your applications stay reliable."

**What We Build** — 6 cards:
1. Cloud Migration: "Phased migration from on-premise to cloud with zero downtime. We assess, plan, execute, and optimize."
2. Serverless Architecture: "Event-driven applications that scale automatically and cost nothing when idle. No servers to manage."
3. Auto-Scaling Infrastructure: "Infrastructure that handles traffic spikes gracefully — from 100 users to 100,000 without manual intervention."
4. CI/CD Pipelines: "Automated build, test, and deployment workflows that let your team ship code multiple times a day with confidence."
5. Cloud Cost Optimization: "Audit and optimize your cloud spending. Right-size instances, eliminate waste, and implement cost alerts."
6. Disaster Recovery: "Automated backups, failover systems, and recovery plans that keep your business running when things go wrong."

**Our Approach** — 4 steps:
1. Infrastructure Audit: "We assess your current setup, identify bottlenecks, security gaps, and cost inefficiencies."
2. Architecture Design: "We design a cloud architecture tailored to your workload, compliance requirements, and growth projections."
3. Migration & Implementation: "Phased rollout with parallel running, data validation, and rollback plans at every stage."
4. Monitoring & Optimization: "24/7 monitoring, automated alerts, and monthly optimization reviews to keep costs down and performance up."

**Technologies** — Pills: AWS, Azure, GCP, Docker, Kubernetes, Terraform, GitHub Actions, CloudWatch, Datadog

**Case Study:**
- Client: "DataFlow Corp — Data Analytics Company"
- Challenge: "A growing analytics company was running on aging on-premise servers with 99.5% uptime, manual deployments that took hours, and infrastructure costs that climbed regardless of usage."
- Solution: "We executed a phased migration to AWS with auto-scaling EC2 instances, RDS for databases, S3 for storage, and CloudFront CDN. We set up a full CI/CD pipeline with GitHub Actions and implemented infrastructure-as-code with Terraform."
- Results: "99.99% uptime (up from 99.5%) | 45% reduction in infrastructure costs | Deployments reduced from 4 hours to 8 minutes"

**CTABanner** — heading: "Ready to Move to the Cloud?", description: "Let's design an infrastructure that scales with your business.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/services/cloud-solutions/page.tsx
git commit -m "feat: add Cloud Solutions service detail page"
```

---

### Task 10: Create AI & Automation Service Detail Page

**Files:**
- Create: `src/app/services/ai-automation/page.tsx`

- [ ] **Step 1: Create the page**

**PageHero** — title: "AI & Automation", subtitle: "Practical AI that saves time and reduces manual work", breadcrumbs: Home > Services > AI & Automation

**Overview:**
- "Artificial intelligence isn't just for tech giants. We help businesses of all sizes integrate practical AI solutions that automate repetitive tasks, extract insights from data, and deliver smarter experiences to customers — without the hype or complexity."
- "Whether you need a chatbot that handles customer inquiries 24/7, a document processing system that reads and categorizes thousands of files, or workflow automation that eliminates manual data entry, we build AI solutions that deliver measurable ROI from day one."
- "We focus on practical applications — not science projects. Every AI feature we build is designed to solve a specific business problem, integrate with your existing systems, and be maintainable by your team long after we've delivered it."

**What We Build** — 6 cards:
1. Intelligent Chatbots: "AI-powered conversational agents that handle customer support, qualify leads, and answer FAQs — available 24/7 across web, mobile, and messaging platforms."
2. Document Processing: "Automated extraction, classification, and analysis of invoices, contracts, forms, and reports — turning unstructured data into actionable insights."
3. Workflow Automation: "End-to-end process automation that connects your tools, eliminates manual steps, and ensures nothing falls through the cracks."
4. Recommendation Engines: "Personalized product, content, or service recommendations that increase engagement, conversion rates, and customer satisfaction."
5. Data Analytics Dashboards: "AI-enhanced analytics that surface trends, anomalies, and predictions — helping you make data-driven decisions faster."
6. AI-Powered Search: "Intelligent search across your documents, products, or knowledge base with natural language understanding and semantic matching."

**Our Approach** — 4 steps:
1. Problem Definition: "We identify the specific business problem AI can solve and quantify the expected impact before building anything."
2. Data Assessment: "We evaluate your data quality, volume, and accessibility to determine the right AI approach."
3. Build & Integrate: "We develop the AI solution and integrate it with your existing systems, workflows, and user interfaces."
4. Monitor & Improve: "We track accuracy, usage, and business impact, then continuously refine the models based on real-world performance."

**Technologies** — Pills: OpenAI, LangChain, Python, TensorFlow, n8n, Zapier, Vector Databases, REST APIs

**Case Study:**
- Client: "LegalEase — Legal Services Firm"
- Challenge: "A mid-size law firm had associates spending 4+ hours reviewing each commercial contract. Key clauses were missed, risk assessment was inconsistent, and senior partners were bottlenecked on approvals."
- Solution: "We built an AI-powered contract review system using GPT-4 and LangChain. The system extracts key clauses, flags unusual terms, compares against standard templates, and generates a risk summary — all within minutes."
- Results: "70% reduction in review time | 98% accuracy on standard clause identification | Partners review flagged items only, freeing 15+ hours per week"

**CTABanner** — heading: "Ready to Automate?", description: "Let's find the AI solution that delivers real ROI for your business.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/services/ai-automation/page.tsx
git commit -m "feat: add AI & Automation service detail page"
```

---

### Task 11: Create CRM & Business Tools Service Detail Page

**Files:**
- Create: `src/app/services/crm-business-tools/page.tsx`

- [ ] **Step 1: Create the page**

**PageHero** — title: "CRM & Business Tools", subtitle: "Tools built around how your team actually works", breadcrumbs: Home > Services > CRM & Business Tools

**Overview:**
- "Off-the-shelf CRM systems force your team to adapt to the software. We build the opposite — custom CRM and business tools designed around your specific workflows, terminology, and processes. The result is software your team actually wants to use."
- "Whether you need a sales pipeline tracker, a client management portal, or an internal tool that automates your unique business processes, we build solutions that fit like a glove. No unnecessary features, no bloated interfaces — just the tools your team needs to work efficiently."
- "Our custom business tools integrate with the systems you already use — email, calendars, accounting software, payment processors — so your team doesn't have to switch between a dozen tabs to get their work done."

**What We Build** — 6 cards:
1. Custom CRM Systems: "Sales pipeline management, contact tracking, deal forecasting, and automated follow-ups — designed for how your sales team actually sells."
2. Sales Pipeline Tools: "Visual deal tracking, stage automation, win/loss analysis, and team performance dashboards."
3. Reporting Dashboards: "Real-time business intelligence with custom KPIs, automated report generation, and data export."
4. Client Management Portals: "Self-service portals where clients can view projects, approve deliverables, track invoices, and communicate with your team."
5. Invoice & Billing Systems: "Automated invoicing, recurring billing, payment tracking, and integration with accounting software."
6. Internal Workflow Tools: "Approval chains, task routing, document management, and process automation for your back-office operations."

**Our Approach** — 4 steps:
1. Workflow Mapping: "We shadow your team, document their actual processes, and identify where software can eliminate friction."
2. Prototype & Validate: "Interactive prototypes tested with real users before we build — ensuring the tool fits naturally into daily work."
3. Iterative Development: "We build in phases, starting with the highest-impact features and adding capabilities based on real usage feedback."
4. Training & Adoption: "We ensure your team is comfortable with the new tools and provide documentation and support during the transition."

**Technologies** — Pills: React, Node.js, PostgreSQL, Redis, REST APIs, Chart.js, PDF Generation, Stripe, OAuth

**Case Study:**
- Client: "PropManager — Real Estate Management"
- Challenge: "A property management company managing 500+ rental units across 3 cities was tracking everything in spreadsheets. Lease renewals were missed, maintenance requests fell through cracks, and generating monthly reports took 2 full days."
- Solution: "We built a custom property management CRM with tenant profiles, automated lease renewal reminders, a maintenance request portal for tenants, and one-click monthly reporting. Integrated with their accounting software for automated invoicing."
- Results: "80% reduction in admin time | Zero missed lease renewals | Tenant satisfaction up 35% | Monthly reports generated in 5 minutes instead of 2 days"

**CTABanner** — heading: "Need a Custom Business Tool?", description: "Let's build software that works the way your team works.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/services/crm-business-tools/page.tsx
git commit -m "feat: add CRM & Business Tools service detail page"
```

---

### Task 12: Create Support & Maintenance Service Detail Page

**Files:**
- Create: `src/app/services/support-maintenance/page.tsx`

- [ ] **Step 1: Create the page**

**PageHero** — title: "Support & Maintenance", subtitle: "Keeping your applications running smoothly", breadcrumbs: Home > Services > Support & Maintenance

**Overview:**
- "Building software is only half the job. Applications need ongoing attention — security patches, performance monitoring, bug fixes, and feature updates. Without proper maintenance, even the best-built software degrades over time."
- "We provide dedicated support and maintenance for applications we've built and for existing systems you need help with. Our team monitors your applications 24/7, responds to issues quickly, and proactively identifies problems before they affect your users."
- "Whether you need ongoing maintenance for a business-critical application, help stabilizing a system built by another team, or a modernization plan for legacy software, we bring the same quality and commitment we put into new builds."

**What We Build** — 6 cards:
1. Application Monitoring: "24/7 uptime monitoring, error tracking, performance dashboards, and automated alerting so issues are caught before users notice."
2. Bug Fixes & Patches: "Rapid response to bugs with root-cause analysis, thorough testing, and deployment within agreed SLA windows."
3. Performance Optimization: "Database query optimization, caching strategies, CDN setup, and code profiling to keep your application fast under load."
4. Security Updates: "Regular dependency updates, vulnerability scanning, penetration testing, and compliance audits to keep your application secure."
5. Feature Enhancements: "New features and improvements planned and delivered in regular cycles, aligned with your business roadmap."
6. Legacy Modernization: "Incremental migration from outdated tech stacks to modern frameworks — without disrupting your operations."

**Our Approach** — 4 steps:
1. Application Audit: "We assess your codebase, infrastructure, dependencies, and security posture to create a complete health report."
2. Stabilization: "We fix critical issues first — bugs, security vulnerabilities, and performance bottlenecks that affect your users today."
3. Maintenance Plan: "We establish monitoring, regular update cycles, and SLA-based response times tailored to your business needs."
4. Continuous Improvement: "Monthly reviews, proactive recommendations, and roadmap-aligned feature development to keep your software evolving."

**Technologies** — Pills: Datadog, Sentry, New Relic, GitHub Actions, Automated Testing, Docker, Terraform, Security Scanning

**Case Study:**
- Client: "ShopEasy — E-Commerce Platform"
- Challenge: "An e-commerce platform with 50K monthly users experienced a major crash during Black Friday, losing an estimated $200K in sales. Page load times averaged 8 seconds, bugs were reported weekly, and the previous development team had moved on."
- Solution: "We performed a full application audit, implemented CDN and caching (reducing load times to 2.5s), set up error monitoring with Sentry, established automated testing, and created a monthly maintenance cycle with defined SLAs."
- Results: "3x faster page loads (8s → 2.5s) | 99.9% uptime during next peak sales event | Zero critical incidents in 12 months | $50K+ saved in prevented downtime"

**CTABanner** — heading: "Need Application Support?", description: "Let's keep your software running at its best.", buttonText: "Get Free Consultation", buttonHref: "mailto:hello@cloudwinitsolutions.com"

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/services/support-maintenance/page.tsx
git commit -m "feat: add Support & Maintenance service detail page"
```

---

### Task 13: Update Homepage Links

**Files:**
- Modify: `src/components/sections/Services.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add hrefs to homepage service cards**

In `src/components/sections/Services.tsx`, add `href` field to each service in the array:
- Web Applications → `/services/web-applications`
- Hybrid Mobile Apps → `/services/mobile-apps`
- Cloud Solutions → `/services/cloud-solutions`
- AI & Automation → `/services/ai-automation`
- CRM & Business Tools → `/services/crm-business-tools`
- Support & Maintenance → `/services/support-maintenance`

Wrap each service card's `<motion.div>` content in a `<Link>` from `next/link`. Add "Learn More →" text at the bottom of each card in orange.

- [ ] **Step 2: Update hero "Explore Services" button**

In `src/app/page.tsx`, change the "Explore Services" button `href` from `#services` to `/services`.

In `src/components/sections/Hero.tsx`, change `href="#services"` to `href="/services"` on the "Explore Services" button.

- [ ] **Step 3: Verify all links work**

Run: `bun run dev`
- Homepage service cards should link to detail pages
- "Explore Services" button should go to `/services`
- All detail pages should render
- All CTA buttons should trigger mailto:

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Services.tsx src/components/sections/Hero.tsx src/app/page.tsx
git commit -m "feat: link homepage services to detail pages"
```

---

### Task 14: Final Verification

- [ ] **Step 1: Verify all pages render**

Run: `bun run dev`

Check each URL:
- http://localhost:3000 (homepage)
- http://localhost:3000/about
- http://localhost:3000/services
- http://localhost:3000/services/web-applications
- http://localhost:3000/services/mobile-apps
- http://localhost:3000/services/cloud-solutions
- http://localhost:3000/services/ai-automation
- http://localhost:3000/services/crm-business-tools
- http://localhost:3000/services/support-maintenance

- [ ] **Step 2: Verify navigation flow**

Test these paths:
- Homepage → click "Services" in navbar → Services listing → click "Web Applications" card → detail page → click "Home" in navbar → homepage
- Homepage → click "About" in navbar → About page → click "Contact Us" → scrolls to homepage contact section

- [ ] **Step 3: Check mobile responsiveness**

Resize browser to 375px width. Check:
- Navbar hamburger menu works
- All pages stack properly on mobile
- Service cards go to 1-per-row on mobile
- Text is readable, no horizontal overflow

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete multi-page expansion with about, services, and 6 detail pages"
```
