"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-950 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#10b98110_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl text-center z-10"
      >
        <Image 
          src="/Tiahn-Ai-Portfolio/profile.jpg" 
          alt="Tiahn Profile" 
          width={180} 
          height={180} 
          className="rounded-full mx-auto mb-8 border-4 border-zinc-800 shadow-[0_0_40px_rgba(16,185,129,0.1)] object-cover relative z-10"
        />
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          AI Architect &amp;<br />
          <span className="text-emerald-400">Agent-First Builder</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Practical AI systems delivered fast in Perth, WA.<br />
          Agent-first workflows • Antigravity rapid deployment • Results over qualifications
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold rounded-2xl text-lg transition-all"
          >
            View Projects →
          </motion.a>
          
          <motion.a
            href="/Tiahn-Ai-Portfolio/Tiahn_AI_Architect_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-zinc-600 hover:border-zinc-300 text-zinc-200 font-semibold rounded-2xl text-lg transition-all"
          >
            Download 1-Page PDF
          </motion.a>
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Currently open to AI Architecture &amp; Automation roles in Perth
        </p>
      </motion.div>
    </section>
  );
}
