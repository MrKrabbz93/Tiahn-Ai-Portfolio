"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 to-zinc-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-7xl font-bold tracking-tighter mb-4">
          AI Architect &amp; Vibe Coder
        </h1>
        <p className="text-2xl text-zinc-400 mb-8">
          Perth WA • No formal IT quals — just production systems built fast with Google Antigravity
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-zinc-950 rounded-2xl font-semibold hover:scale-105 transition"
          >
            See the Proof →
          </a>
          <a
            href="https://github.com/MrKrabbz93/Tiahn-Ai-Portfolio"
            target="_blank"
            className="px-8 py-4 border border-zinc-400 rounded-2xl font-semibold hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
        <p className="mt-12 text-sm text-zinc-500">Currently open to AI roles via Peoplebank &amp; Verse Group</p>
      </motion.div>
    </section>
  );
}
