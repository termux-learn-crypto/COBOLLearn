import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse, lessonsByCourse } from "@/lib/content";
import CourseLessonList from "@/components/CourseLessonList";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const lessons = lessonsByCourse(course.id);
  const index = courses.findIndex((c) => c.id === course.id);
  const nextCourse = courses[index + 1];

  return (
    <div className="container-app py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
        <Link href="/courses" className="hover:text-blue-700">
          Courses
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span>{course.title}</span>
      </nav>

      <header className="mt-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden>
            {course.icon}
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
              {course.level}
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {course.title}
            </h1>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {course.description}
        </p>
      </header>

      <div className="mt-8">
        <CourseLessonList lessons={lessons} courseTitle={course.title} />
      </div>

      {nextCourse && (
        <div className="mt-8 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
          <span className="text-sm text-slate-500">Next course</span>
          <Link
            href={`/courses/${nextCourse.slug}`}
            className="mt-1 block font-semibold text-blue-700 hover:underline dark:text-blue-400"
          >
            {nextCourse.icon} {nextCourse.title} →
          </Link>
        </div>
      )}
    </div>
  );
}
