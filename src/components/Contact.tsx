"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900 border-t border-zinc-800 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready to Ship?</h2>
        <p className="text-zinc-400 text-lg mb-8">
          Whether you're from Peoplebank, Verse Group, or innovating at Fortescue, if you're looking to integrate high-velocity Agentic Workflows, let's talk execution.
        </p>
        <a 
          href="mailto:contact@example.com" 
          className="inline-block px-10 py-5 rounded-2xl font-semibold bg-emerald-500 text-zinc-950 transition hover:bg-emerald-400 hover:scale-105"
        >
          Initialize Communication →
        </a>
      </div>
    </section>
  );
}
