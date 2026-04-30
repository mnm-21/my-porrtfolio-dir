import { AnimatedHero } from "@/components/AnimatedHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const selected = PROJECTS.slice(0, 3);

  return (
    <>
      <AnimatedHero />
      <section className="section">
        <div className="container">
          <SectionLabel title="Selected Work" href="/projects" linkLabel="View All ->" />
          <div className="selected-grid">
            {selected.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
