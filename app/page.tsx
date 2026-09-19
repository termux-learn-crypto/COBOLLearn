import Link from "next/link";
import { courses, projects, totalLessons } from "@/lib/content";
import CourseCard from "@/components/CourseCard";
import ProjectCard from "@/components/ProjectCard";
import ContinueLearning from "@/components/ContinueLearning";

export default function HomePage() {
  return (
    <div className="container-app py-10">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-10 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
          Beginner → Banking Mainframe
        </span>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl dark:text-white">
          COBOL bilkul zero se master karo
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {totalLessons}+ lessons, quizzes, projects aur ek complete Banking
          Core System — sab kuch Hinglish me, mobile-first aur aapki progress ke
          saath.
        </p>
        <div className="mt-6">
          <ContinueLearning />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/courses" className="btn-secondary">
            📚 Course Roadmap
          </Link>
          <Link href="/projects" className="btn-secondary">
            🛠️ Projects
          </Link>
          <Link href="/glossary" className="btn-secondary">
            📖 Glossary
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Learning Path
          </h2>
          <Link
            href="/courses"
            className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400"
          >
            View all →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Kyun COBOLLearn?
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: "📱",
              title: "Mobile-first",
              body: "Phone pe hi pura course — code blocks scroll, quizzes tap.",
            },
            {
              icon: "🎯",
              title: "Structured Path",
              body: "Beginner se banking tak ka proper roadmap, random topics nahi.",
            },
            {
              icon: "🏦",
              title: "Real Projects",
              body: "Final Banking Core System ke saath portfolio-ready practice.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="text-2xl" aria-hidden>
                {item.icon}
              </div>
              <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
