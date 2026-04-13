"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const principles = [
    "High-performance architecture",
    "Clean, maintainable codebases",
    "Pixel-perfect technical execution",
    "Direct engineering communication"
  ];

  return (
    <section className="py-32 relative border-t border-white/5" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="flex-1 w-full relative">
             {/* Developer / Code aesthetic block instead of the glowing orb */}
             <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="rounded-lg border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl"
             >
               <div className="flex items-center px-4 py-3 border-b border-white/5 bg-zinc-900/50">
                 <div className="flex gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                 </div>
                 <div className="ml-4 flex gap-4 text-xs font-mono text-zinc-500">
                   <span className="text-zinc-300">system.config.ts</span>
                   <span>package.json</span>
                 </div>
               </div>
               <div className="p-6 font-mono text-xs sm:text-sm text-zinc-400 overflow-x-auto leading-loose">
                 <div><span className="text-purple-400">import</span> {`{ Core }`} <span className="text-purple-400">from</span> <span className="text-yellow-300">'@nextgen/system'</span>;</div>
                 <br/>
                 <div><span className="text-purple-400">const</span> <span className="text-blue-400">team</span> = <span className="text-purple-400">new</span> <span className="text-yellow-200">Core</span>({`{`}</div>
                 <div className="pl-4">engineers: <span className="text-orange-300">"Senior"</span>,</div>
                 <div className="pl-4">focus: [<span className="text-orange-300">"Performance"</span>, <span className="text-orange-300">"Scalability"</span>],</div>
                 <div className="pl-4">shipped_projects: <span className="text-green-400">100+</span>,</div>
                 <div>{`});`}</div>
                 <br/>
                 <div><span className="text-zinc-500">// Initialize infrastructure</span></div>
                 <div><span className="text-blue-400">team</span>.<span className="text-yellow-200">deploy</span>().<span className="text-yellow-200">then</span>(() <span className="text-purple-400">{`=>`}</span> {`{`}</div>
                 <div className="pl-4 text-zinc-300">console.<span className="text-blue-300">log</span>(<span className="text-orange-300">"Systems operating nominally."</span>);</div>
                 <div>{`});`}</div>
               </div>
             </motion.div>
          </div>

          <div className="flex-1 lg:pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-display font-medium mb-6 text-white tracking-tight"
            >
              Engineered for impact.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-zinc-400 mb-8 leading-relaxed"
            >
              We are a collective of developers and designers committed to dropping the unnecessary bloat. We focus on speed, reliability, and shipping software that feels incredibly fast and intuitively designed.
            </motion.p>
            
            <ul className="space-y-4">
              {principles.map((principle, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <CheckCircle2 size={16} className="text-white" />
                  <span className="font-medium text-sm">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
