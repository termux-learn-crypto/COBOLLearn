import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-app grid gap-6 py-8 sm:grid-cols-3">
        <div>
          <p className="font-bold text-slate-900 dark:text-white">
            🏦 COBOLLearn
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Zero se banking-level COBOL tak — Hinglish me, mobile-first.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Learn
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/courses" className="hover:text-blue-700">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/practice" className="hover:text-blue-700">
                Practice
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-700">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/glossary" className="hover:text-blue-700">
                Glossary
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Tools
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/search" className="hover:text-blue-700">
                Search
              </Link>
            </li>
            <li>
              <Link href="/progress" className="hover:text-blue-700">
                Progress
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400 dark:border-slate-800">
        Built for COBOL learners. {new Date().getFullYear()} © COBOLLearn
      </div>
    </footer>
  );
}
