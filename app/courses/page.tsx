import type { Metadata } from "next";
import { courses, totalLessons } from "@/lib/content";
import CourseCard from "@/components/CourseCard";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "COBOL ka complete curriculum — Beginner, Fundamentals, Conditions, Loops, Strings, Tables, Files, Advanced, DB2 aur Mainframe.",
};

export default function CoursesPage() {
  return (
    <div className="container-app py-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Course Roadmap
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {courses.length} levels aur {totalLessons} lessons — neeche se upar
          tak complete karo.
        </p>
      </header>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ol>
    </div>
  );
}
