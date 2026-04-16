"use client";
import { motion } from "framer-motion";
import Mermaid from "./Mermaid";

const projects = [
  {
    title: "Mining Workflow Simulator",
    slug: "mining",
    desc: "Predictive maintenance and automated routing optimized for resources operations (Fortescue-style)",
    roi: "Simulated 35% reduction in manual workflows",
    diagram: `graph TD
      A[Raw Sensor Data] --> B[Scout Agent]
      B --> C[Predictive Analytics Engine]
      C --> D[Executor Agent]
      D --> E[Real-time Dashboard & Alerts]`,
  },
  {
    title: "AI Agency Operating System",
    slug: "agency",
    desc: "Full autonomous multi-division AI agency framework (Scout → Personalisation → Executor → Analyst)",
    roi: "10x throughput in organisational operations",
    diagram: `graph LR
      Scout[Scout Agent] --> Personalisation[Personalisation Agent]
      Personalisation --> Executor[Executor Agent]
      Executor --> Analyst[Analyst Agent]
      Analyst --> Scout`,
  },
  {
    title: "No-Code Consultant Platform",
    slug: "consultant",
    desc: "Rapid-deployment AI tool for consultants with built-in predictive analytics",
    roi: "Built in <2 hours with Google Antigravity",
    diagram: `graph TD
      Idea[Agent Prompt] --> Antigravity[Google Antigravity Agents]
      Antigravity --> Platform[Live Consultant Platform]
      Platform --> Predictive[Predictive Analytics]`,
  },
  {
    title: "Predictive Resource Analytics Platform",
    slug: "analytics",
    desc: "Enterprise data pipeline parser and automated workflow generator",
    roi: "40% efficiency gain in data-heavy pipeline operations",
    diagram: `graph TD
      RawData[Raw Business Data] --> Parser[AI Parser Agent]
      Parser --> Insights[Predictive Insights]
      Insights --> Automation[Automated Workflow Generator]`,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects • Built with Google Antigravity
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="border border-zinc-700/50 rounded-3xl p-10 hover:border-emerald-500/40 transition-all bg-zinc-900/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-12">
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 text-lg">{project.desc}</p>
                  <p className="text-emerald-400 font-bold text-xl mb-10">{project.roi}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <a 
                      href={`/Tiahn-Ai-Portfolio/demos/${project.slug}`}
                      className="px-6 py-4 bg-emerald-500 text-zinc-950 rounded-2xl font-bold hover:bg-emerald-400 transition transform hover:scale-105 text-center"
                    >
                      Launch Live Simulator →
                    </a>
                  </div>
                </div>
                
                <div className="flex-1 w-full bg-zinc-900/80 p-6 rounded-3xl border border-zinc-800 shadow-xl overflow-hidden">
                  <Mermaid chart={project.diagram} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
