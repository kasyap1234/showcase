"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

const whatWeBuild = [
  {
    title: "Intelligent Chatbots",
    description:
      "AI-powered conversational agents that handle customer support, qualify leads, and answer FAQs — available 24/7 across web, mobile, and messaging platforms.",
  },
  {
    title: "Document Processing",
    description:
      "Automated extraction, classification, and analysis of invoices, contracts, forms, and reports — turning unstructured data into actionable insights.",
  },
  {
    title: "Workflow Automation",
    description:
      "End-to-end process automation that connects your tools, eliminates manual steps, and ensures nothing falls through the cracks.",
  },
  {
    title: "Recommendation Engines",
    description:
      "Personalized product, content, or service recommendations that increase engagement, conversion rates, and customer satisfaction.",
  },
  {
    title: "Data Analytics Dashboards",
    description:
      "AI-enhanced analytics that surface trends, anomalies, and predictions — helping you make data-driven decisions faster.",
  },
  {
    title: "AI-Powered Search",
    description:
      "Intelligent search across your documents, products, or knowledge base with natural language understanding and semantic matching.",
  },
];

const steps = [
  {
    number: "01",
    title: "Problem Definition",
    description:
      "We work with you to identify exactly where AI can deliver the highest ROI — focusing on concrete business problems, not technology for its own sake.",
  },
  {
    number: "02",
    title: "Data Assessment",
    description:
      "We audit your existing data, identify gaps, and design the data pipeline needed to train and run your AI solution reliably.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We build and integrate the AI solution into your existing workflows and systems, ensuring it's maintainable by your team long-term.",
  },
  {
    number: "04",
    title: "Monitor & Improve",
    description:
      "We set up monitoring, track model performance, and continuously refine the solution as your data grows and your needs evolve.",
  },
];

const technologies = [
  "OpenAI",
  "LangChain",
  "Python",
  "TensorFlow",
  "n8n",
  "Zapier",
  "Vector Databases",
  "REST APIs",
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-white)" }}>
      <Navbar />

      <PageHero
        title="AI & Automation"
        subtitle="Practical AI that saves time and reduces manual work"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI & Automation" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              OVERVIEW
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              AI That Delivers Measurable Results
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              "Artificial intelligence isn't just for tech giants. We help businesses of all sizes integrate practical AI solutions that automate repetitive tasks, extract insights from data, and deliver smarter experiences to customers — without the hype or complexity.",
              "Whether you need a chatbot that handles customer inquiries 24/7, a document processing system that reads and categorizes thousands of files, or workflow automation that eliminates manual data entry, we build AI solutions that deliver measurable ROI from day one.",
              "We focus on practical applications — not science projects. Every AI feature we build is designed to solve a specific business problem, integrate with your existing systems, and be maintainable by your team long after we've delivered it.",
            ].map((paragraph, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <p
                  className="text-base md:text-lg leading-relaxed mb-5"
                  style={{ color: "var(--color-gray-600)" }}
                >
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              WHAT WE BUILD
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              AI &amp; Automation Solutions We Deliver
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatWeBuild.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: "var(--color-gray-200)" }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-gray-500)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              OUR APPROACH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              From Problem to Production
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-lg font-extrabold"
                  style={{
                    backgroundColor: idx === 3 ? "var(--color-orange)" : "var(--color-navy)",
                    color: idx === 3 ? "#ffffff" : "var(--color-orange)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-gray-500)" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-gray-50)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              TECHNOLOGIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Tech We Use
            </motion.h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-5 py-2.5 rounded-lg border text-sm font-semibold bg-white"
                style={{ borderColor: "var(--color-gray-200)", color: "var(--color-navy)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              CASE STUDY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Real Results for Real Businesses
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border p-8"
            style={{
              backgroundColor: "var(--color-gray-50)",
              borderColor: "var(--color-gray-200)",
              borderLeft: "4px solid var(--color-blue)",
            }}
          >
            <p
              className="text-lg font-bold mb-6"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
            >
              LegalEase — Legal Services
            </p>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Challenge:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                A mid-size law firm had associates spending 4+ hours reviewing each commercial contract. Key
                clauses were missed, risk assessment was inconsistent, and senior partners were bottlenecked on
                approvals.
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold" style={{ color: "var(--color-orange)" }}>
                Solution:{" "}
              </span>
              <span className="text-base" style={{ color: "var(--color-gray-600)" }}>
                We built an AI-powered contract review system using GPT-4 and LangChain. The system extracts
                key clauses, flags unusual terms, compares against standard templates, and generates a risk
                summary — all within minutes.
              </span>
            </div>
            <div>
              <span className="font-semibold block mb-3" style={{ color: "var(--color-orange)" }}>
                Results:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "70% reduction in review time",
                  "98% accuracy on standard clause identification",
                  "Partners review flagged items only, freeing 15+ hours per week",
                ].map((result, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg text-sm font-bold"
                    style={{ backgroundColor: "#eff6ff", color: "var(--color-navy)" }}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Automate?"
        description="Let's find the AI solution that delivers real ROI for your business."
        buttonText="Get Free Consultation"
        buttonHref="mailto:hello@cloudwinitsolutions.com"
      />

      <Footer />
    </main>
  );
}
