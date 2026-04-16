"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Truck, Settings, AlertTriangle, ShieldCheck } from "lucide-react";

export default function MiningDemo() {
  const [logs, setLogs] = useState<{ id: number, msg: string, time: string }[]>([]);
  const [fleetStatus, setFleetStatus] = useState({
    active: 42,
    underMaintenance: 3,
    critical: 1
  });

  useEffect(() => {
    const messages = [
      "Sensory Agent detected vibration threshold breach in Truck-74...",
      "Predictive Engine assigning Maintenance Agent #04 to Sector B...",
      "Agentic Router re-routing Fleet Alpha to avoid bottleneck in pit-3...",
      "Thermal scans completed for Conveyor 12. No anomalies detected.",
      "Inventory Agent confirmed parts available for Truck-74 repair."
    ];

    const interval = setInterval(() => {
      setLogs(prev => [
        { id: Date.now(), msg: messages[Math.floor(Math.random() * messages.length)], time: new Date().toLocaleTimeString() },
        ...prev.slice(0, 5)
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <Link href="/" className="text-emerald-500 hover:text-emerald-400 mb-2 inline-block">← Back to Portfolio</Link>
            <h1 className="text-4xl font-bold tracking-tighter">Mining Workflow <span className="text-emerald-500 italic underline decoration-zinc-700">Simulator</span></h1>
          </div>
          <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono">
            AGENTIC CORE V.2.1.0_PROD
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-emerald-500" />
              <h3 className="font-bold">Real-time IoT Feed</h3>
            </div>
            <div className="text-3xl font-bold mb-1">98.2%</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">System Efficiency</div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="text-blue-400" />
              <h3 className="font-bold">Fleet Visibility</h3>
            </div>
            <div className="flex gap-4">
              <div className="text-emerald-500">
                <span className="text-2xl font-bold">{fleetStatus.active}</span>
                <span className="text-xs ml-1 font-bold">ACTV</span>
              </div>
              <div className="text-amber-500">
                <span className="text-2xl font-bold">{fleetStatus.underMaintenance}</span>
                <span className="text-xs ml-1 font-bold">MNT</span>
              </div>
              <div className="text-rose-500">
                <span className="text-2xl font-bold">{fleetStatus.critical}</span>
                <span className="text-xs ml-1 font-bold">CRIT</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-purple-400" />
              <h3 className="font-bold">Predictive ROI</h3>
            </div>
            <div className="text-3xl font-bold mb-1 text-emerald-400">+35%</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Efficiency vs Baseline</div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Settings className="animate-spin-slow" /> Agent Operations Log
            </h3>
            <div className="space-y-4 font-mono text-xs">
              {logs.map(log => (
                <motion.div key={log.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="p-3 border-l-2 border-emerald-500 bg-zinc-950/50 rounded flex justify-between">
                  <span className="text-emerald-300">{log.msg}</span>
                  <span className="text-zinc-600">{log.time}</span>
                </motion.div>
              ))}
              {logs.length === 0 && <div className="text-zinc-600 italic">Initializing agentic links...</div>}
            </div>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
             <AlertTriangle className="w-16 h-16 text-emerald-500 mb-4 animate-pulse" />
             <h3 className="text-2xl font-bold mb-2">Autonomous Response Simulation</h3>
             <p className="text-zinc-400 text-sm mb-6 max-w-xs">In a live scenario, the AI Architect engine triggers maintenance work orders before human supervisors detect the vibration anomaly.</p>
             <button className="px-8 py-3 bg-emerald-500 text-zinc-950 rounded-xl font-bold hover:bg-emerald-400 transition">
               Trigger Fleet Re-route
             </button>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-xs">Proof of Practical Architecture • Created in &lt;15 mins with Google Antigravity</p>
        </footer>
      </div>
    </div>
  );
}
