import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/Button";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "About Me",
  description: "B.Tech Mechanical Engineering student at IIT Madras building intelligent systems.",
};

const ACHIEVEMENTS = [
  {
    label: "Young Research Fellow (YRF)",
    description: "Selected as one of 17 fellows from 300+ applicants, IIT Madras 2024. Funded undergraduate research award (~INR 100K).",
  },
  {
    label: "ICCV 2025 Workshop",
    description: "Published FlareGS as joint first author at the ICCV 2025 Workshop on Autonomous Driving (2COOOL).",
  },
  {
    label: "Top 5 / 199",
    description: "Ranked in the top 5 students of the Mechanical Engineering department, IIT Madras 2026.",
  },
  {
    label: "Top 2% in JEE Advanced",
    description: "Among 150,000 candidates in one of India's most competitive engineering entrance exams, 2022.",
  },
  {
    label: "Top 1% in JEE Mains",
    description: "Among 1,000,000 candidates in India's largest engineering entrance test, 2022.",
  },
  {
    label: "All India Rank 1 in NFLAT",
    description: "National Finance Literacy Assessment Test by NCFE. Awarded INR 10,000 cash prize and a laptop, 2018.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="container page-hero" aria-labelledby="about-title">
        <h1 className="page-title" id="about-title">
          Mayank Chandak
        </h1>
        <p className="mono muted mb-8 mt-4 text-sm tracking-widest uppercase">
          B.Tech Mechanical Engineering · IIT Madras · 2026
        </p>
      </section>

      <section className="container section-compact pt-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[20px] border border-[var(--line)] group">
            <div className="absolute inset-0 bg-[var(--accent-cream)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
            <Image 
              src="/assets/img/mayank.jpg" 
              alt="Mayank Chandak" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-6 text-[var(--text-secondary)] leading-relaxed text-lg">
            <p>
              I’m Mayank Chandak, a final-year Mechanical Engineering student at IIT Madras. Over time, I’ve found myself drawn to problems at the intersection of robotics, reinforcement learning, and computer vision, especially ones where variables don’t behave ideally and you have to make systems work despite that.
            </p>
            <p>
              I’ve had the chance to work on a mix of research problems. At the INSPIRE Lab, I worked on reinforcement learning for autonomous laparoscopic camera control, where the challenge was getting the system to behave consistently while adapting to different surgical phases. At the Computational Imaging Lab, I worked on flare removal in videos, contributing to FlareGS, which uses multi-view reconstruction to recover scenes under heavy visual corruption and was later published at an ICCV workshop. These experiences pushed me toward thinking more about robustness and real-world constraints rather than just performance on clean setups.
            </p>
            <p>
              Outside of that, I’ve spent a lot of time building reinforcement learning systems from scratch, including work on robotic manipulation, multi-agent coordination, and musculoskeletal control. A lot of this involved dealing with instability, reward design, and things breaking in ways that aren’t really obvious at first, but that ended up being the most useful part of the learning.
            </p>
            <p>
              Going forward, I want to keep working on problems where perception, decision-making, and control come together, and where solving them actually requires understanding the system end to end. I’m planning to pursue advanced education in robotics and AI, with a focus on building systems that can operate reliably outside controlled environments.
            </p>
          </div>
        </div>
      </section>

      <section className="container section-compact border-t border-[var(--line)]">
        <h2 className="font-display text-3xl font-semibold mb-10 text-[var(--text-primary)]">Notable Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="p-6 rounded-[20px] border border-[var(--line)] bg-[var(--bg-elevated)] transition-colors hover:border-[var(--line-strong)]">
              <h3 className="text-[var(--accent-cream)] font-semibold mb-2">{item.label}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-compact border-t border-[var(--line)]">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold mb-6 text-[var(--text-primary)]">Beyond Academics</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-12">
            I play table tennis fairly regularly and enjoy hiking whenever I get the chance, especially when I can get out of the city for a bit. I also tend to pick up random interests or side projects now and then, usually just out of curiosity rather than any fixed plan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href="/Mayank_CV.pdf" variant="secondary" external={true} icon={FileDown}>
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
