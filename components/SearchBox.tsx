"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { search } from "@/lib/search";

const typeLabels: Record<string, string> = {
  lesson: "Lesson",
  course: "Course",
  glossary: "Glossary",
  project: "Project",
};

export default function SearchBox({
  placeholder = "Search COBOL topics — eg. PERFORM, PIC, JCL...",
}: {
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(query), [query]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
        autoFocus
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900"
      />

      {query.trim() && (
        <p className="mt-2 text-sm text-slate-500">
          {results.length} result{results.length === 1 ? "" : "s"} for “
          {query.trim()}”
        </p>
      )}

      <ul className="mt-4 space-y-2">
        {results.map((result) => (
          <li key={`${result.type}-${result.href}`}>
            <Link
              href={result.href}
              className="card block p-4 transition hover:border-blue-300 dark:hover:border-blue-700"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {result.title}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {typeLabels[result.type]}
                </span>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                {result.snippet}
              </p>
            </Link>
          </li>
        ))}
        {query.trim() && results.length === 0 && (
          <li className="card p-6 text-center text-slate-500">
            Kuch nahi mila. Dusra keyword try karo — jaise “MOVE”, “DB2”,
            “VSAM”.
          </li>
        )}
      </ul>
    </div>
  );
}
