import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card group flex flex-col p-5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 dark:text-white">
          {project.title}
        </h3>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          {project.difficulty}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.concepts.slice(0, 4).map((concept) => (
          <span
            key={concept}
            className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {concept}
          </span>
        ))}
      </div>
    </Link>
  );
}
