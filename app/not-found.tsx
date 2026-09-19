import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-app flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-5xl" aria-hidden>
        🧐
      </span>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
        404 — Page not found
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Ye page nahi mila. Home ya course roadmap try karo.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/courses" className="btn-secondary">
          Courses
        </Link>
      </div>
    </div>
  );
}
