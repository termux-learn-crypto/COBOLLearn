import type { Metadata } from "next";
import { projects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Student Management se Banking Core System tak — COBOL projects jo aapko real-world developer banate hain.",
};

export default function ProjectsPage() {
  return (
    <div className="container-app py-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Concepts ko real systems me apply karo — capstone Banking Core System
          ke saath.
        </p>
      </header>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
