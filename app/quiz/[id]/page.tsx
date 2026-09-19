import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allQuizzes, getLesson, getQuiz } from "@/lib/content";
import Quiz from "@/components/quiz/Quiz";

export function generateStaticParams() {
  return allQuizzes.map((quiz) => ({ id: quiz.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const quiz = getQuiz(id);
  if (!quiz) return { title: "Quiz not found" };
  const lesson = getLesson(quiz.lessonId);
  return {
    title: `${lesson?.title ?? "Quiz"} — Quiz`,
    description: `Test your understanding of ${lesson?.title ?? "this topic"}.`,
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quiz = getQuiz(id);
  if (!quiz) notFound();

  const lesson = getLesson(quiz.lessonId);

  return (
    <div className="container-app py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        {lesson && (
          <Link href={`/lessons/${lesson.slug}`} className="hover:text-blue-700">
            ← {lesson.title}
          </Link>
        )}
      </nav>
      <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
        {lesson?.title ?? "Quiz"} — Quiz
      </h1>
      <div className="mt-6 max-w-3xl">
        <Quiz quiz={quiz} lessonSlug={quiz.lessonId} />
      </div>
    </div>
  );
}
