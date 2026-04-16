"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, Send, CheckCircle2, Layout, Database, Code2 } from "lucide-react";

export default function ConsultantDemo() {
  const [prompt, setPrompt] = useState("");
  const [isBuilding, setIsBuilding] = useState(false);
  const [step, setStep] = useState(0);

  const handleBuild = () => {
    if (!prompt) return;
    setIsBuilding(true);
    setStep(0);
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= 4) {
          clearInterval(interval);
          return 4;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-zinc-900 pb-8 flex justify-between items-end">
          <div>
            <Link href="/" className="text-zinc-500 hover:text-white transition text-xs mb-4 inline-block tracking-widest uppercase">← Escape Sim</Link>
            <h1 className="text-3xl font-bold tracking-tighter text-emerald-500 shadow-emerald-500/20 drop-shadow-xl">ANTIGRAVITY_BUILDER_V4</h1>
          </div>
          <div className="text-[10px] text-zinc-700 bg-zinc-950 px-3 py-1 border border-zinc-900 rounded select-none">
            ENCRYPTED_SESSION: {Math.random().toString(16).slice(2, 10).toUpperCase()}
          </div>
        </header>

        {!isBuilding && step === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="space-y-4">
              <label className="text-sm text-zinc-500 uppercase tracking-widest font-bold block ml-1">Enterprise Challenge Input</label>
              <div className="relative group">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe a business bottleneck (e.g., 'Automatic vendor contract parsing and verification platform')..."
                  className="w-full h-48 bg-zinc-900/50 border-2 border-zinc-800 rounded-3xl p-8 focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-700 resize-none text-xl tracking-tight"
                />
                <button 
                  onClick={handleBuild}
                  disabled={!prompt}
                  className="absolute bottom-6 right-6 p-4 bg-emerald-500 text-zinc-950 rounded-2xl hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] uppercase font-bold tracking-widest text-zinc-600">
               <div className="p-4 border border-zinc-900 rounded-2xl flex flex-col items-center gap-2">
                 <Layout size={16} /> <span>Next.js 15 UI</span>
               </div>
               <div className="p-4 border border-zinc-900 rounded-2xl flex flex-col items-center gap-2">
                 <Database size={16} /> <span>Vector DB Auth</span>
               </div>
               <div className="p-4 border border-zinc-900 rounded-2xl flex flex-col items-center gap-2">
                 <Terminal size={16} /> <span>Node Exec</span>
               </div>
               <div className="p-4 border border-zinc-900 rounded-2xl flex flex-col items-center gap-2">
                 <Code2 size={16} /> <span>Tailwind V4</span>
               </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <span className="text-xs uppercase tracking-widest font-bold">Orchestrating Architecture</span>
                <span className="text-emerald-500 text-xs font-mono">{Math.min(step * 25, 100)}%</span>
              </div>
              
              <div className="space-y-2">
                {[
                  "Parsing enterprise conceptual logic...",
                  "Mapping Antigravity tool-use patterns...",
                  "Instantiating Next.js distribution layer...",
                  "Finalizing CI/CD deployment hooks...",
                  "READY_FOR_DEPLOYMENT"
                ].map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: step >= i ? 1 : 0.2 }}
                    className={`flex items-center gap-3 text-sm italic ${step >= i ? 'text-emerald-400' : 'text-zinc-800'}`}
                  >
                    {step > i ? <CheckCircle2 size={16} /> : <div className="w-4 h-4 rounded-full border border-current animate-pulse" />}
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>

            {step === 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border-2 border-emerald-500 p-8 rounded-3xl text-center shadow-2xl shadow-emerald-500/10"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-950 shadow-xl shadow-emerald-500/40">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black italic mb-2 uppercase italic tracking-tighter">System Generated</h3>
                <p className="text-zinc-500 text-sm mb-6">Your proposed solution architecture is now live in dynamic staging.</p>
                <div className="flex gap-4 justify-center">
                   <button onClick={() => { setIsBuilding(false); setStep(0); setPrompt(""); }} className="px-6 py-2 bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-700 transition">New Build</button>
                   <button className="px-6 py-2 bg-emerald-500 text-zinc-950 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition animate-pulse">View App</button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
