import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content";
import ContentRenderer from "@/components/lesson/ContentRenderer";
import CodeBlock from "@/components/lesson/CodeBlock";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="container-app py-10">
      <article className="mx-auto max-w-3xl">
        <nav className="text-sm text-slate-500 dark:text-slate-400">
          <Link href="/projects" className="hover:text-blue-700">
            Projects
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span>{project.title}</span>
        </nav>

        <header className="mt-4">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {project.difficulty}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </header>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.concepts.map((concept) => (
            <span
              key={concept}
              className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {concept}
            </span>
          ))}
        </div>

        <section className="card mt-6 p-5">
          <h2 className="font-bold text-slate-900 dark:text-white">
            Requirements
          </h2>
          <ul className="mt-2 ml-5 list-disc space-y-1 text-slate-700 dark:text-slate-300">
            {project.requirements.map((requirement, i) => (
              <li key={i}>{requirement}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Step-by-step Guide
          </h2>
          {project.steps.map((step, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <div className="mt-2">
                <ContentRenderer
                  blocks={[{ type: "paragraph", text: step.body }]}
                />
              </div>
              {step.code && <CodeBlock code={step.code} caption="COBOL" />}
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Final Code
          </h2>
          <CodeBlock code={project.finalCode} caption="COBOL — Full Program" />
        </section>

        <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950">
          <h2 className="font-bold text-emerald-900 dark:text-emerald-100">
            Expected Output
          </h2>
          <pre className="mt-2 overflow-x-auto font-mono text-sm text-emerald-800 dark:text-emerald-200">
            {project.expectedOutput}
          </pre>
        </section>

        <div className="mt-8">
          <Link href="/projects" className="btn-secondary">
            ← All Projects
          </Link>
        </div>
      </article>
    </div>
  );
}
