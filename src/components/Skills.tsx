"use client";
import { motion } from "framer-motion";

const skills = [
  { title: "AI Architecture & No-Code Development", desc: "Agent-first environments & rapid ideation-to-production" },
  { title: "Workflow Automation", desc: "End-to-end AI-driven systems with measurable ROI" },
  { title: "Google Antigravity Mastery", desc: "Primary tool for complex system deployment in hours" },
  { title: "AI Application Development", desc: "From specialist tools to predictive operating systems" },
  { title: "AI Agency Structuring", desc: "Large-scale multi-division autonomous agencies" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-800 p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-zinc-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
