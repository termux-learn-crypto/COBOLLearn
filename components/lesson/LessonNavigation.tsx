import Link from "next/link";
import type { Lesson } from "@/types";

export default function LessonNavigation({
  prev,
  next,
}: {
  prev?: Lesson;
  next?: Lesson;
}) {
  return (
    <nav
      className="mt-10 flex items-stretch justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800"
      aria-label="Lesson navigation"
    >
      {prev ? (
        <Link
          href={`/lessons/${prev.slug}`}
          className="btn-secondary flex-1 text-left"
        >
          <span className="block text-xs text-slate-400">← Previous</span>
          <span className="block truncate">{prev.title}</span>
        </Link>
      ) : (
        <span className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/lessons/${next.slug}`}
          className="btn-primary flex-1 text-right"
        >
          <span className="block text-xs text-blue-100">Next →</span>
          <span className="block truncate">{next.title}</span>
        </Link>
      ) : (
        <Link href="/progress" className="btn-primary flex-1 text-right">
          <span className="block text-xs text-blue-100">Finish</span>
          <span className="block truncate">View Progress</span>
        </Link>
      )}
    </nav>
  );
}
