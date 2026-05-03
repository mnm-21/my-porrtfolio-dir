"use client";

import { Brain, Code2, Cpu, Eye, Layers, Terminal, Bot, Activity, Microscope, Database } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const CORE_TECH = [
  { name: "Python", icon: Code2 },
  { name: "C++", icon: Terminal },
  { name: "PyTorch", icon: Brain },
  { name: "OpenCV", icon: Eye },
  { name: "ROS2", icon: Bot },
  { name: "MuJoCo", icon: Cpu },
  { name: "SOFA", icon: Microscope },
  { name: "MATLAB", icon: Activity },
  { name: "SolidWorks", icon: Layers },
  { name: "Linux", icon: Terminal },
  { name: "Git", icon: Database },
];

export function TechStack() {
  return (
    <section className="section section-compact border-t border-white/5">
      <div className="container">
        <SectionLabel title="Technical Stack" href="/skills" linkLabel="View All Skills ->" />
        
        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            {CORE_TECH.map((tech) => (
              <div 
                key={tech.name} 
                className="flex-grow flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.07] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-cream)] hover:bg-white/[0.12] hover:shadow-[0_0_25px_rgba(227,211,183,0.15)] group"
              >
                <tech.icon size={16} className="text-[var(--accent-cream)] opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
