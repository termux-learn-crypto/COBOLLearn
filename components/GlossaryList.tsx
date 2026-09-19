"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { GlossaryTerm } from "@/types";

export default function GlossaryList({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
    );
  }, [query, terms]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search glossary — PIC, MOVE, VSAM..."
        aria-label="Search glossary"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900"
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {filtered.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="card p-4 transition hover:border-blue-300 dark:hover:border-blue-700"
          >
            <h2 className="font-bold text-slate-900 dark:text-white">
              {term.term}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
              {term.definition}
            </p>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-center text-slate-500">
          Koi term nahi mila.
        </p>
      )}
    </div>
  );
}
