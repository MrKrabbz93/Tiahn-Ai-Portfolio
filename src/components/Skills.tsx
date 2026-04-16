"use client";
import { motion } from "framer-motion";

const skills = [
  { title: "AI Architecture & Agent-First Workflows", desc: "Agent-first development environments and rapid ideation-to-production" },
  { title: "Workflow Automation", desc: "End-to-end AI-driven systems with measurable business impact" },
  { title: "Google Antigravity Mastery", desc: "Primary tooling for building and deploying complex systems in hours" },
  { title: "AI Application Development", desc: "From specialized consultant tools to full predictive operating systems" },
  { title: "AI Agency Structuring", desc: "Designing and orchestrating large-scale multi-division autonomous agencies" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Core Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/30 p-8 rounded-3xl transition-all group"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
