"use client";

import Link from "next/link";
import { courses, allLessons, lessonsByCourse, getLesson } from "@/lib/content";
import { completionPercent, useProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

export default function ProgressDashboard() {
  const { progress, reset } = useProgress();
  const total = allLessons.length;
  const completed = progress.completedLessons.length;
  const overall = completionPercent(completed, total);
  const current = progress.currentLesson
    ? getLesson(progress.currentLesson)
    : undefined;

  const quizCount = Object.keys(progress.quizScores).length;
  const avgScore =
    quizCount > 0
      ? Math.round(
          Object.values(progress.quizScores).reduce((a, b) => a + b, 0) /
            quizCount
        )
      : 0;

  return (
    <div className="space-y-8">
      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Overall Progress
          </h2>
          <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            {overall}%
          </span>
        </div>
        <div className="mt-3">
          <ProgressBar percent={overall} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Lessons done" value={`${completed}/${total}`} />
          <Stat label="Quizzes taken" value={`${quizCount}`} />
          <Stat label="Avg quiz score" value={`${avgScore}%`} />
          <Stat label="Day streak" value={`${progress.streak}`} />
        </div>
        {current && (
          <Link
            href={`/lessons/${current.slug}`}
            className="btn-primary mt-4 inline-flex"
          >
            ▶ Continue: {current.title}
          </Link>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
          Progress by Course
        </h2>
        <div className="space-y-3">
          {courses.map((course) => {
            const courseLessons = lessonsByCourse(course.id);
            const done = courseLessons.filter((l) =>
              progress.completedLessons.includes(l.slug)
            ).length;
            const percent = completionPercent(done, courseLessons.length);
            return (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="card block p-4"
              >
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {course.icon} {course.title}
                  </span>
                  <span className="text-slate-500">
                    {done}/{courseLessons.length} ({percent}%)
                  </span>
                </div>
                <ProgressBar percent={percent} />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Danger Zone
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Progress browser me localStorage me store hoti hai. Reset karne se
          sab clear ho jayega.
        </p>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Reset all progress?")) reset();
          }}
          className="mt-3 rounded-lg border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 dark:border-rose-800 dark:hover:bg-rose-950"
        >
          Reset Progress
        </button>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-800">
      <div className="text-xl font-bold text-slate-900 dark:text-white">
        {value}
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}
