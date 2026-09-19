"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { getLesson, totalLessons } from "@/lib/content";

export default function ContinueLearning() {
  const { progress } = useProgress();
  const completed = progress.completedLessons.length;
  const percent = totalLessons
    ? Math.round((completed / totalLessons) * 100)
    : 0;
  const current = progress.currentLesson
    ? getLesson(progress.currentLesson)
    : undefined;

  if (completed === 0 && !current) {
    return (
      <Link href="/courses/beginner" className="btn-primary">
        Start Learning — Beginner →
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href={current ? `/lessons/${current.slug}` : "/courses/beginner"}
        className="btn-primary"
      >
        ▶ {current ? `Continue: ${current.title}` : "Continue Learning"}
      </Link>
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {completed}/{totalLessons} lessons ({percent}%)
      </span>
    </div>
  );
}
