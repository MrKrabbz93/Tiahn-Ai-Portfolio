"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, PieChart, TrendingUp, Filter, Download, Info } from "lucide-react";

export default function AnalyticsDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      <span className="text-zinc-500 font-mono text-xs tracking-[0.5em] animate-pulse">PARSING_LAKESTONE_DATA_PIPES</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 font-sans selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link href="/" className="px-3 py-1 bg-zinc-900 text-zinc-500 hover:text-white transition text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 inline-block border border-zinc-800">← Return to Base</Link>
            <h1 className="text-5xl font-black tracking-tighter text-white">RESOURCELY. <span className="text-emerald-500">AI</span></h1>
            <p className="text-zinc-500 text-sm font-medium">Predictive Resource Analytics Platform (Lakestone.ai Engine)</p>
          </div>
          <div className="flex gap-3">
             <button className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition"><Filter size={20} /></button>
             <button className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition"><Download size={20} /></button>
             <button className="px-6 py-3 bg-emerald-500 text-zinc-950 rounded-2xl font-black tracking-tighter transition hover:bg-emerald-400">CONNECT DATA</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {[
             { label: "Predictive Capacity", val: "94.2%", growth: "+4.1%", icon: <TrendingUp className="text-emerald-500" /> },
             { label: "Pipeline Latency", val: "12ms", growth: "-82%", icon: <BarChart3 className="text-blue-500" /> },
             { label: "Resource Match", val: "88/100", growth: "+12", icon: <PieChart className="text-purple-500" /> },
             { label: "AI Parsing Rate", val: "1.2GB/s", growth: "Stable", icon: <Info className="text-zinc-500" /> }
           ].map((stat, i) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] relative overflow-hidden group hover:border-emerald-500/50 transition-all"
             >
                <div className="mb-6 p-4 bg-zinc-950 w-fit rounded-3xl border border-zinc-800 group-hover:border-emerald-500/30 transition-all">{stat.icon}</div>
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">{stat.label}</div>
                <div className="flex items-end gap-2">
                   <div className="text-4xl font-black text-white">{stat.val}</div>
                   <div className={`text-[10px] font-bold mb-1.5 ${stat.growth.startsWith('+') ? 'text-emerald-500' : stat.growth.startsWith('-') ? 'text-blue-500' : 'text-zinc-600'}`}>
                     {stat.growth}
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 overflow-hidden relative"
          >
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-2xl font-black italic tracking-tighter underline decoration-emerald-500 decoration-4 underline-offset-8">AGENT_GENERATED_INSIGHTS</h3>
               <div className="text-[10px] text-zinc-500 font-mono tracking-widest">REALTIME_ANALYTICS</div>
             </div>
             
             <div className="space-y-6">
                <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-black text-emerald-500 tracking-[0.2em]">OPR_OPTIMIZATION_ALPHA</span>
                    <span className="text-[10px] text-zinc-600">CONFIDENCE: 98%</span>
                  </div>
                  <p className="text-sm text-zinc-400 font-medium">Auto-parsing found a 12% mismatch in resource allocation within Sector 7 pipelines. Proposed adjustment sent to Orchestrator Agent for zero-latency execution.</p>
                </div>
                
                <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl opacity-50">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-black text-blue-500 tracking-[0.2em]">PIPELINE_STRESS_TEST</span>
                    <span className="text-[10px] text-zinc-600">CONFIDENCE: 92%</span>
                  </div>
                  <p className="text-sm text-zinc-400 font-medium">Simulation suggests current load will exceed capacity in 72 hours. Preventive scale-up routine initialized via Antigravity hooks.</p>
                </div>
             </div>
             
             {/* Fancy background decoration */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
          </motion.div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center">
             <div className="w-24 h-24 rounded-full border-8 border-emerald-500/20 border-t-emerald-500 animate-spin-slow mb-6" />
             <h4 className="text-xl font-black italic mb-2 tracking-tighter">DATA SYNTHESIS IN PROGRESS</h4>
             <p className="text-sm text-zinc-500 leading-relaxed font-medium">95% faster than manual pipeline parsing. This dashboard represents a zero-human bottleneck environment.</p>
             <div className="mt-8 pt-8 border-t border-zinc-800 w-full text-[10px] text-zinc-600 font-black uppercase tracking-widest">
               Enterprise Grade AI Architecture
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
