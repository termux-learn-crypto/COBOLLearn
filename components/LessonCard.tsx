import Link from "next/link";
import type { Lesson } from "@/types";

export default function LessonCard({
  lesson,
  completed = false,
}: {
  lesson: Lesson;
  completed?: boolean;
}) {
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="card flex items-center gap-3 p-4 transition hover:border-blue-300 hover:shadow-sm dark:hover:border-blue-700"
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
          completed
            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
        }`}
        aria-hidden
      >
        {completed ? "✓" : lesson.order}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-slate-900 dark:text-white">
          {lesson.title}
        </span>
        <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
          {lesson.description}
        </span>
      </span>
      <span className="text-xs text-slate-400">{lesson.readMinutes}m</span>
    </Link>
  );
}
