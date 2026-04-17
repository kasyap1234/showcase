# Multi-Page Expansion — Cloud Winit Solutions

**Date:** 2026-04-16
**Status:** Approved
**Scope:** Add About, Services listing, 6 service detail pages using Next.js App Router

## Overview

Expand the single-page site into a multi-page professional website. Priority batch: About page + Services listing + 6 service detail pages. All pages share the existing Navbar and Footer. Navy & Orange theme, Sora + DM Sans fonts, light background.

## Pages to Build

### 1. About Page — `/about`

**Sections in order:**

1. **Hero Banner** — Navy gradient background, "About Cloud Winit Solutions" heading, one-line subtitle, breadcrumb (Home > About Us)
2. **Our Story** — Two-column layout. Left: 3 paragraphs covering founding story, what drives the team, commitment to quality. Right: navy gradient rounded box with service icons (web, mobile, cloud, AI) and "5+ Years | 50+ Projects | 30+ Clients" stats strip — same style as homepage hero illustration.
3. **Mission & Vision** — Two equal cards side by side. Mission: "To deliver reliable, custom software solutions that help businesses operate smarter and grow faster." Vision: "To be the most trusted technology partner for businesses seeking digital transformation."
4. **Our Values** — 4 value cards in a row: Innovation, Transparency, Quality, Partnership. Each with icon, title, 2-line description.
5. **Why Choose Us** — Same 4 differentiators as homepage (Client-First, Agile, Long-Term, Proven) but each card is expanded with a full paragraph instead of 2 lines. Add a concrete example or proof point to each card.
6. **CTA Banner** — Navy gradient, "Ready to Work With Us?" heading, Get Free Consultation button.

### 2. Services Listing Page — `/services`

**Sections in order:**

1. **Hero Banner** — Navy gradient, "Our Services" heading, subtitle about end-to-end solutions, breadcrumb (Home > Services)
2. **Services Grid** — 6 service cards, 2 per row (reuse homepage card design). Each card links to its detail page. Same icons, colors, descriptions as homepage but with "Learn More →" link.
3. **CTA Banner** — "Not sure what you need? Let's discuss." with contact button.

### 3. Service Detail Pages (6 pages, shared template)

**Routes:**
- `/services/web-applications`
- `/services/mobile-apps`
- `/services/cloud-solutions`
- `/services/ai-automation`
- `/services/crm-business-tools`
- `/services/support-maintenance`

**Shared template sections:**

1. **Hero Banner** — Navy gradient, service name as heading, one-line tagline, breadcrumb (Home > Services > [Service Name])
2. **Overview** — 2-3 paragraphs explaining the service in business terms. What it is, who it's for, why it matters.
3. **What We Build** — Grid of 4-6 specific project types with title + description. Example for Web Apps: "E-Commerce Platforms", "Inventory Management", "HR Portals", "Booking Systems", "Business Dashboards", "Customer Portals".
4. **Our Approach** — 3-4 step process specific to that service. Numbered steps with icon, title, description.
5. **Technologies** — Horizontal row of tech pills relevant to the service. Example for Web Apps: React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS.
6. **Case Study** — One hypothetical but realistic project showcase. Includes: client industry, challenge, solution, results (with metrics). Styled as a card with left border accent.
7. **CTA Banner** — "Need [service type]? Let's talk." with contact button.

## Content Per Service Detail Page

### Web Applications (`/services/web-applications`)
- **Tagline:** "Scalable web solutions built for your business"
- **Project types:** E-Commerce Platforms, Inventory Management Systems, HR Portals, Booking Engines, Business Dashboards, Customer Portals
- **Tech:** React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS, REST APIs, GraphQL
- **Case study:** MediTrack — Healthcare inventory management platform. Challenge: manual tracking causing errors. Solution: real-time dashboard with barcode scanning. Result: 60% reduction in inventory errors, 3x faster stock audits.

### Mobile Apps (`/services/mobile-apps`)
- **Tagline:** "Native-quality apps on both platforms"
- **Project types:** Healthcare Apps, Logistics Trackers, Fintech Solutions, Customer-Facing Apps, Field Service Apps, Internal Team Tools
- **Tech:** React Native, Expo, TypeScript, Firebase, REST APIs, Push Notifications
- **Case study:** SwiftDeliver — Logistics delivery tracking app. Challenge: no real-time visibility for drivers and dispatchers. Solution: cross-platform app with live GPS, route optimization, offline mode. Result: 40% improvement in delivery times, 95% driver adoption.

### Cloud Solutions (`/services/cloud-solutions`)
- **Tagline:** "Infrastructure that scales with your ambition"
- **Project types:** Cloud Migration, Serverless Architecture, Auto-Scaling Infrastructure, CI/CD Pipelines, Cloud Cost Optimization, Disaster Recovery
- **Tech:** AWS, Azure, GCP, Docker, Kubernetes, Terraform, GitHub Actions
- **Case study:** DataFlow Corp — Legacy on-premise to AWS migration. Challenge: aging servers, 99.5% uptime, scaling issues. Solution: phased migration to AWS with auto-scaling and monitoring. Result: 99.99% uptime, 45% cost reduction, zero-downtime deployments.

### AI & Automation (`/services/ai-automation`)
- **Tagline:** "Practical AI that saves time and reduces manual work"
- **Project types:** Intelligent Chatbots, Document Processing, Workflow Automation, Recommendation Engines, Data Analytics Dashboards, AI-Powered Search
- **Tech:** OpenAI, LangChain, Python, TensorFlow, n8n, Zapier integrations
- **Case study:** LegalEase — AI-powered contract review system. Challenge: lawyers spending 4+ hours per contract review. Solution: AI document analysis with clause extraction and risk flagging. Result: 70% reduction in review time, 98% accuracy on standard clauses.

### CRM & Business Tools (`/services/crm-business-tools`)
- **Tagline:** "Tools built around how your team actually works"
- **Project types:** Custom CRM Systems, Sales Pipeline Tools, Reporting Dashboards, Client Management Portals, Invoice & Billing Systems, Internal Workflow Tools
- **Tech:** React, Node.js, PostgreSQL, Redis, REST APIs, Chart.js, PDF generation
- **Case study:** PropManager — Real estate CRM platform. Challenge: managing 500+ properties across spreadsheets. Solution: custom CRM with tenant tracking, maintenance requests, automated invoicing. Result: 80% less admin time, zero missed renewals, tenant satisfaction up 35%.

### Support & Maintenance (`/services/support-maintenance`)
- **Tagline:** "Keeping your applications running smoothly"
- **Project types:** Application Monitoring, Bug Fixes & Patches, Performance Optimization, Security Updates, Feature Enhancements, Legacy Modernization
- **Tech:** Monitoring (Datadog, Sentry), CI/CD, Automated testing, Security scanning
- **Case study:** ShopEasy — E-commerce platform maintenance. Challenge: slow load times, frequent bugs after Black Friday crash. Solution: performance audit, CDN setup, error monitoring, monthly maintenance cycles. Result: 3x faster page loads, 99.9% uptime during peak sales, zero critical incidents in 12 months.

## Architecture

### File Structure
```
src/app/
├── page.tsx                          # Homepage (existing)
├── layout.tsx                        # Root layout (existing)
├── about/
│   └── page.tsx                      # About page
├── services/
│   ├── page.tsx                      # Services listing
│   ├── web-applications/
│   │   └── page.tsx
│   ├── mobile-apps/
│   │   └── page.tsx
│   ├── cloud-solutions/
│   │   └── page.tsx
│   ├── ai-automation/
│   │   └── page.tsx
│   ├── crm-business-tools/
│   │   └── page.tsx
│   └── support-maintenance/
│       └── page.tsx
src/components/
├── shared/
│   ├── PageHero.tsx                  # Reusable navy gradient hero banner with breadcrumb
│   ├── CTABanner.tsx                 # Reusable contact CTA banner
│   └── Breadcrumb.tsx                # Breadcrumb navigation component
├── layout/
│   ├── Navbar.tsx                    # Updated with links to /about, /services
│   └── Footer.tsx                    # Existing
└── sections/                         # Homepage sections (existing)
```

### Shared Components

**PageHero** — Navy gradient background, accepts `title`, `subtitle`, `breadcrumbs` props. Reused on all sub-pages.

**CTABanner** — Navy gradient CTA section, accepts `heading`, `description`, `buttonText`, `buttonHref` props. Reused on all sub-pages.

**Breadcrumb** — Simple breadcrumb trail. Accepts array of `{label, href}` items. Last item is current page (no link).

### Navbar Updates
- Replace anchor-only links with page links: "Home" → `/`, "About" → `/about`, "Services" → `/services`, "Industries" → `/#industries`, "Process" → `/#process`, "Testimonials" → `/#testimonials`
- Keep orange "Contact Us" button → `/#contact`
- Navbar is shared via root layout — same on all pages

### Homepage Updates
- Service cards link to detail pages (`/services/web-applications` etc.)
- "Explore Services" button links to `/services`
- About section "Learn More" links to `/about`

## Design Constraints
- All pages use existing Navy & Orange theme with Sora + DM Sans fonts
- Light backgrounds with navy gradient banners for hero sections
- Framer Motion animations on scroll (whileInView)
- Mobile responsive (same breakpoints as homepage)
- CWS watermark on hero banners
- No forms — contact CTAs use mailto: links
