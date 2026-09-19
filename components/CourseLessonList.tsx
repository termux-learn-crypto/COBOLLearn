"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import type { Lesson } from "@/types";
import ProgressBar from "@/components/ProgressBar";

export default function CourseLessonList({
  lessons,
  courseTitle,
}: {
  lessons: Lesson[];
  courseTitle: string;
}) {
  const { progress } = useProgress();
  const completed = lessons.filter((l) =>
    progress.completedLessons.includes(l.slug)
  ).length;
  const percent = lessons.length
    ? Math.round((completed / lessons.length) * 100)
    : 0;

  return (
    <div>
      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            {courseTitle} progress
          </span>
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {completed}/{lessons.length} ({percent}%)
          </span>
        </div>
        <ProgressBar percent={percent} />
      </div>
      <ol className="space-y-2">
        {lessons.map((lesson) => {
          const isDone = progress.completedLessons.includes(lesson.slug);
          return (
            <li key={lesson.slug}>
              <Link
                href={`/lessons/${lesson.slug}`}
                className="card flex items-center gap-3 p-3 transition hover:border-blue-300 dark:hover:border-blue-700"
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    isDone
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  }`}
                  aria-hidden
                >
                  {isDone ? "✓" : lesson.order}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                  {lesson.title}
                </span>
                <span className="text-xs text-slate-400">
                  {lesson.readMinutes}m
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
