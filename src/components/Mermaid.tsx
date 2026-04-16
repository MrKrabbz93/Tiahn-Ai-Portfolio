"use client";
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Configure Mermaid for dark theme + larger, cleaner output
    mermaid.initialize({
      startOnLoad: true,
      theme: "dark",
      flowchart: {
        curve: "basis",
        useMaxWidth: true,
      },
      securityLevel: "loose",
      themeVariables: {
        primaryColor: "#10b981",        // Emerald accent
        primaryTextColor: "#f4f4f5",
        primaryBorderColor: "#10b981",
        lineColor: "#64748b",
        background: "#18181b",
        mainBkg: "#27272a",
        nodeBorder: "#10b981",
        fontSize: "16px",
      },
    });

    if (ref.current) {
      const id = `mermaid-${Date.now()}`;
      
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
          setIsLoaded(true);
          
          // Make SVG larger and more prominent
          const svgElement = ref.current.querySelector("svg");
          if (svgElement) {
            svgElement.setAttribute("width", "100%");
            svgElement.setAttribute("height", "auto");
            svgElement.style.maxWidth = "100%";
            svgElement.style.minHeight = "280px";   // Larger diagrams
          }
        }
      });
    }
  }, [chart]);

  return (
    <div 
      ref={ref}
      className={`bg-zinc-900 border border-zinc-700 rounded-2xl p-6 transition-all duration-300 ${
        isLoaded ? "opacity-100" : "opacity-70"
      }`}
    />
  );
}
