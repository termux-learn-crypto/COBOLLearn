"use client";

import { useEffect, useState } from "react";
import {
  markLessonComplete,
  setCurrentLesson,
  useProgress,
} from "@/lib/progress";

export default function CompleteButton({
  lessonSlug,
  nextHref,
}: {
  lessonSlug: string;
  nextHref?: string;
}) {
  const { progress } = useProgress();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setCurrentLesson(lessonSlug);
  }, [lessonSlug]);

  useEffect(() => {
    setDone(progress.completedLessons.includes(lessonSlug));
  }, [progress.completedLessons, lessonSlug]);

  return (
    <div className="my-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={() => {
          markLessonComplete(lessonSlug);
          setDone(true);
        }}
        disabled={done}
        className={
          done
            ? "btn-secondary cursor-default border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300"
            : "btn-primary"
        }
      >
        {done ? "✓ Lesson Completed" : "Mark as Complete"}
      </button>
      {done && nextHref && (
        <a href={nextHref} className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400">
          Next lesson →
        </a>
      )}
    </div>
  );
}
