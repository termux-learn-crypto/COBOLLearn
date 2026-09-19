import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGlossaryTerm, getLesson, glossary } from "@/lib/content";
import CodeBlock from "@/components/lesson/CodeBlock";

export function generateStaticParams() {
  return glossary.map((term) => ({ term: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const entry = getGlossaryTerm(term);
  if (!entry) return { title: "Term not found" };
  return { title: entry.term, description: entry.definition };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = getGlossaryTerm(term);
  if (!entry) notFound();

  return (
    <div className="container-app py-10">
      <article className="mx-auto max-w-3xl">
        <nav className="text-sm text-slate-500 dark:text-slate-400">
          <Link href="/glossary" className="hover:text-blue-700">
            Glossary
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span>{entry.term}</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          {entry.term}
        </h1>
        <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
          {entry.definition}
        </p>

        <section className="mt-6">
          <h2 className="font-bold text-slate-900 dark:text-white">Syntax</h2>
          <CodeBlock code={entry.syntax} caption="Syntax" />
        </section>

        <section className="mt-6">
          <h2 className="font-bold text-slate-900 dark:text-white">Example</h2>
          <CodeBlock code={entry.example} caption="COBOL" />
        </section>

        {entry.relatedLessons.length > 0 && (
          <section className="mt-6">
            <h2 className="font-bold text-slate-900 dark:text-white">
              Related Lessons
            </h2>
            <ul className="mt-2 space-y-1">
              {entry.relatedLessons.map((slug) => {
                const lesson = getLesson(slug);
                if (!lesson) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/lessons/${slug}`}
                      className="text-blue-700 hover:underline dark:text-blue-400"
                    >
                      → {lesson.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
}
