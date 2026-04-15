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
