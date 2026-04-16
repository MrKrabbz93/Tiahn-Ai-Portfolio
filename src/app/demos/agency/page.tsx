"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Users, Cpu, Briefcase, Zap } from "lucide-react";

const agents = [
  { name: "Scout", role: "Market Intelligence", color: "text-blue-400", border: "border-blue-500/30" },
  { name: "Personalization", role: "Client Mapping", color: "text-purple-400", border: "border-purple-500/30" },
  { name: "Executor", role: "Task Delivery", color: "text-emerald-400", border: "border-emerald-500/30" },
  { name: "Analyst", role: "ROI Verification", color: "text-amber-400", border: "border-amber-500/30" }
];

export default function AgencyDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [chat, setChat] = useState<{ agent: string, msg: string }[]>([]);

  const scripts = [
    { agent: "Scout", msg: "Scanning high-intensity mining tender platforms for Q3 opportunities..." },
    { agent: "Scout", msg: "Found 3 leads match Fortescue operational criteria. Handing over to Personalization." },
    { agent: "Personalization", msg: "Drafting custom engagement models based on historical sensor data needs." },
    { agent: "Executor", msg: "Lead accepted. Generating technical specification documents via automated pipeline." },
    { agent: "Analyst", msg: "Analyzing document validity. 99.4% confidence match. Campaign ready for launch." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % agents.length);
      setChat(prev => [scripts[Math.floor(Math.random() * scripts.length)], ...prev].slice(0, 6));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <Link href="/" className="text-emerald-500 hover:text-emerald-400 mb-2 inline-block">← Back to Portfolio</Link>
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">AI Agency <span className="text-emerald-500">OS</span></h1>
            <p className="text-zinc-500 text-sm">Large-scale Multi-Division Autonomous Orchestration</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Systems Online</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          {agents.map((agent, i) => (
            <motion.div 
              key={agent.name}
              animate={{ 
                scale: activeStep === i ? 1.05 : 1,
                backgroundColor: activeStep === i ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
              }}
              className={`p-6 border-2 ${activeStep === i ? 'border-emerald-500' : 'border-zinc-800'} rounded-3xl transition-all duration-500 shadow-2xl relative overflow-hidden`}
            >
              {activeStep === i && (
                <motion.div layoutId="highlight" className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              )}
              <div className={`mb-4 ${agent.color}`}>{i === 0 ? <Cpu /> : i === 1 ? <Users /> : i === 2 ? <Zap /> : <Briefcase />}</div>
              <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-tighter">{agent.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-zinc-900/50 p-8 border border-zinc-800 rounded-3xl min-h-[400px]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 tracking-widest uppercase italic bg-zinc-800 w-fit px-4 py-1 rounded-full text-xs">
              <MessageSquare size={14} className="text-emerald-500" /> Agency Communication Nerve
            </h3>
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {chat.map((c, i) => (
                  <motion.div 
                    key={i + c.msg}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-black italic text-emerald-500 border border-zinc-700">
                      {c.agent[0]}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-600 uppercase mb-1">{c.agent} Division</div>
                      <p className="text-sm text-zinc-300 leading-relaxed italic">"{c.msg}"</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-emerald-500 p-8 rounded-3xl text-zinc-950">
               <h3 className="text-2xl font-black italic uppercase leading-tight mb-4">10X Operational Throughput</h3>
               <p className="text-sm font-medium mb-6 opacity-80">This architecture eliminates human latency in repetitive organizational task handovers.</p>
               <div className="text-4xl font-black">74s</div>
               <p className="text-[10px] uppercase font-bold tracking-widest">Avg Task Latency (AI vs Human 2h+)</p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h4 className="text-xs uppercase tracking-widest font-black mb-4 text-zinc-500 underline decoration-emerald-500 underline-offset-4">Active Divisions</h4>
              <ul className="space-y-2 text-sm font-mono tracking-tighter">
                <li className="flex justify-between"><span>→ Logistics</span> <span className="text-emerald-500">[ONLINE]</span></li>
                <li className="flex justify-between"><span>→ Procurement</span> <span className="text-emerald-500">[ONLINE]</span></li>
                <li className="flex justify-between"><span>→ Safety/HSSE</span> <span className="text-emerald-500">[ONLINE]</span></li>
                <li className="flex justify-between"><span>→ Legal/Compliance</span> <span className="text-zinc-700">[IDLE]</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
