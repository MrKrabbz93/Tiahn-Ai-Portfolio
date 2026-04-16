// src/components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import Mermaid from "./Mermaid";

const projects = [
  {
    title: "Mining Workflow Simulator",
    desc: "Predictive maintenance & automated routing for resources sector (Fortescue-style optimisation)",
    roi: "Simulated 35% reduction in manual workflows • Real-time agentic orchestration",
    diagram: `graph TD
      A[Raw Sensor / IoT Data] --> B[Scout Agent]
      B --> C[Predictive Analytics Engine]
      C --> D[Executor Agent - Scheduler]
      D --> E[Real-time Dashboard + Alerts]`,
  },
  {
    title: "AI Agency Operating System",
    desc: "Full multi-division autonomous AI agency framework (Scout → Personalisation → Executor → Analyst)",
    roi: "10x throughput in organisational operations • Fully agent-first architecture",
    diagram: `graph LR
      Scout[Scout Agent] --> Personalisation[Personalisation Agent]
      Personalisation --> Executor[Executor Agent]
      Executor --> Analyst[Analyst Agent]
      Analyst --> Scout`,
  },
  {
    title: "No-Code Consultant Interface",
    desc: "Rapid-deployment AI tool for business consultants with predictive analytics",
    roi: "Built in <2 hours with Google Antigravity • End-to-end from idea to live",
    diagram: `graph TD
      Idea[No-Code Prompt] --> Antigravity[Google Antigravity Agents]
      Antigravity --> Platform[Live Consultant Platform]
      Platform --> Predictive[Predictive Analytics]`,
  },
  {
    title: "Predictive Resource Analytics Platform",
    desc: "Enterprise data pipeline parser & automated workflow generator (Lakestone.ai style)",
    roi: "Automated pipeline parsing • 40% efficiency gain in data-heavy operations",
    diagram: `graph TD
      RawData[Raw Business Data] --> Parser[AI Parser Agent]
      Parser --> Insights[Predictive Insights]
      Insights --> Automation[Automated Workflow Generator]`,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects • Built with Google Antigravity</h2>
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-zinc-700 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-400 mb-3">{project.desc}</p>
              <p className="textemerald-400 font-semibold mb-8">{project.roi}</p>
              <Mermaid chart={project.diagram} />
              <p className="text-xs text-zinc-500 mt-6">Live demo &amp; full repo folder in GitHub</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
