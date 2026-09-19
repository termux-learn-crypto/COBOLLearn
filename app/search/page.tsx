import type { Metadata } from "next";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Search",
  description:
    "COBOL topics, statements, glossary aur projects me search karo.",
};

export default function SearchPage() {
  return (
    <div className="container-app py-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Search
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Lessons, courses, glossary aur projects — sab ek jagah.
        </p>
      </header>
      <div className="mt-6 max-w-3xl">
        <SearchBox />
      </div>
    </div>
  );
}
