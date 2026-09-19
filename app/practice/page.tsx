import type { Metadata } from "next";
import Link from "next/link";
import { allLessons, getCourse } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Har lesson ka practice task — concept ko code me apply karo aur COBOL hands-on seekho.",
};

export default function PracticePage() {
  const withPractice = allLessons.filter((lesson) => lesson.practice);

  return (
    <div className="container-app py-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Practice Tasks
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {withPractice.length} hands-on tasks — padhne se zyada likhne se
          seekhoge.
        </p>
      </header>

      <div className="mt-6 space-y-3">
        {withPractice.map((lesson) => {
          const course = getCourse(lesson.courseId);
          return (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="card block p-4 transition hover:border-blue-300 dark:hover:border-blue-700"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                {course && <span>{course.icon} {course.title}</span>}
                <span aria-hidden>•</span>
                <span>Lesson {lesson.order}</span>
              </div>
              <h2 className="mt-1 font-semibold text-slate-900 dark:text-white">
                {lesson.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                🧪 {lesson.practice}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
