import { AnimatedHero } from "@/components/AnimatedHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { PROJECTS } from "../data/projects";

import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

export default function HomePage() {
  const selected = PROJECTS.slice(0, 3);

  return (
    <PageTransition>
      <AnimatedHero />
      <section className="section section-compact">
        <div className="container">
          <SectionLabel title="About Me" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center mt-8">
            <div className="relative aspect-square w-full max-w-sm mx-auto md:mx-0 overflow-hidden rounded-[20px] border border-[var(--line)]">
              <Image 
                src="/assets/img/mayank.jpg" 
                alt="Mayank Chandak" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            
            <div className="flex flex-col">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                I’m a final-year Mechanical Engineering student at IIT Madras working on robotics, reinforcement learning, and computer vision. I’m particularly interested in building systems that can actually function in messy, real-world settings rather than just clean benchmarks. Over the past few years, I’ve worked on problems ranging from surgical robotics to multi-agent systems and visual perception. Going forward, I plan to continue in this space through advanced research in robotics and AI.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 rounded-[16px] border border-[var(--line)] bg-[var(--bg-elevated)]">
                  <div className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-1.5">Education</div>
                  <div className="font-medium text-[var(--text-primary)]">IIT Madras, B.Tech ME</div>
                </div>
                <div className="p-4 rounded-[16px] border border-[var(--line)] bg-[var(--bg-elevated)]">
                  <div className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-1.5">GPA</div>
                  <div className="font-medium text-[var(--text-primary)]">9.43 / 10</div>
                </div>
                <div className="p-4 rounded-[16px] border border-[var(--line)] bg-[var(--bg-elevated)]">
                  <div className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-1.5">Research</div>
                  <div className="font-medium text-[var(--text-primary)]">2 Published Papers</div>
                </div>
                <div className="p-4 rounded-[16px] border border-[var(--line)] bg-[var(--bg-elevated)]">
                  <div className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-1.5">Recognition</div>
                  <div className="font-medium text-[var(--text-primary)]">YRF Award, Top 5 Dept.</div>
                </div>
              </div>

              <div>
                <Button href="/about" variant="secondary" icon={ArrowRight}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-white/5">
        <div className="container">
          <SectionLabel title="Featured Projects" href="/projects" linkLabel="View All ->" />
          <div className="projects-grid">
            {selected.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact border-t border-white/5">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionLabel title="Get In Touch" />
            <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
              Have a question or want to discuss robotics, reinforcement learning, or life... Feel free to reach out!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
