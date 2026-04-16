"use client";
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

let isMermaidInitialized = false;

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    if (!isMermaidInitialized) {
      mermaid.initialize({ startOnLoad: false, theme: 'dark' });
      isMermaidInitialized = true;
    }

    const renderMermaid = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substring(7)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvgContent(svg);
      } catch (e) {
        console.error("Mermaid parsing failed", e);
      }
    };
    
    renderMermaid();
  }, [chart]);

  return (
    <div 
      className="my-8 bg-zinc-900 border border-zinc-700 p-4 rounded-2xl overflow-x-auto overflow-y-hidden"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
