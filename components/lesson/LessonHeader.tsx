import Link from "next/link";
import type { Course, Lesson } from "@/types";

export default function LessonHeader({
  lesson,
  course,
}: {
  lesson: Lesson;
  course?: Course;
}) {
  return (
    <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        {course && (
          <Link
            href={`/courses/${course.slug}`}
            className="font-medium text-blue-700 hover:underline dark:text-blue-400"
          >
            {course.icon} {course.title}
          </Link>
        )}
        <span aria-hidden>•</span>
        <span>Lesson {lesson.order}</span>
        <span aria-hidden>•</span>
        <span>{lesson.readMinutes} min read</span>
      </div>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
        {lesson.title}
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {lesson.description}
      </p>
    </header>
  );
}
