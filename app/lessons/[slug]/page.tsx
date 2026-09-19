import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allLessons,
  getCourse,
  getLesson,
  getQuizByLesson,
  nextLesson,
  prevLesson,
} from "@/lib/content";
import ContentRenderer from "@/components/lesson/ContentRenderer";
import LessonHeader from "@/components/lesson/LessonHeader";
import { Exercise, LessonObjectives } from "@/components/lesson/LessonSections";
import LessonNavigation from "@/components/lesson/LessonNavigation";
import CompleteButton from "@/components/lesson/CompleteButton";
import CodeBlock from "@/components/lesson/CodeBlock";
import Quiz from "@/components/quiz/Quiz";

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: lesson.title,
    description: lesson.description,
    alternates: { canonical: `/lessons/${lesson.slug}` },
    openGraph: {
      title: lesson.title,
      description: lesson.description,
      type: "article",
    },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const course = getCourse(lesson.courseId);
  const prev = prevLesson(slug);
  const next = nextLesson(slug);
  const quiz = getQuizByLesson(slug);

  return (
    <div className="container-app py-10">
      <article className="mx-auto max-w-3xl">
        <LessonHeader lesson={lesson} course={course} />
        <LessonObjectives objectives={lesson.objectives} />

        <ContentRenderer blocks={lesson.blocks} />

        {lesson.examples.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Examples
            </h2>
            <div className="mt-3 space-y-6">
              {lesson.examples.map((example, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    {example.title}
                  </h3>
                  <CodeBlock code={example.code} caption="COBOL" />
                  {example.output && (
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Output
                      </p>
                      <pre className="overflow-x-auto rounded-lg border border-slate-300 bg-slate-100 p-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-800">
                        {example.output}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <Exercise
          practice={lesson.practice}
          commonMistakes={lesson.commonMistakes}
        />

        <CompleteButton lessonSlug={lesson.slug} nextHref={next ? `/lessons/${next.slug}` : undefined} />

        {quiz && <Quiz quiz={quiz} lessonSlug={lesson.slug} />}

        <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm dark:bg-slate-800">
          <Link
            href="/glossary"
            className="font-medium text-blue-700 hover:underline dark:text-blue-400"
          >
            📖 Related terms glossary me dekho
          </Link>
        </div>

        <LessonNavigation prev={prev} next={next} />
      </article>
    </div>
  );
}
