import Link from "next/link";
import type { Course } from "@/types";
import { lessonCountForCourse } from "@/lib/content";

export default function CourseCard({ course }: { course: Course }) {
  const count = lessonCountForCourse(course.id);
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card group flex flex-col p-5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <span aria-hidden className="text-3xl">
          {course.icon}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {course.level}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-blue-700 dark:text-white">
        {course.title}
      </h3>
      <p className="mt-1 flex-1 text-sm text-slate-600 dark:text-slate-400">
        {course.description}
      </p>
      <p className="mt-3 text-xs font-medium text-slate-500">
        {count} lessons →
      </p>
    </Link>
  );
}
