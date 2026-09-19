import type { Metadata } from "next";
import { glossary } from "@/lib/content";
import GlossaryList from "@/components/GlossaryList";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "COBOL terminology ka complete glossary — PIC, MOVE, PERFORM, VSAM, DB2, JCL aur bahut kuch.",
};

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) =>
    a.term.localeCompare(b.term)
  );
  return (
    <div className="container-app py-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Glossary
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {glossary.length} COBOL terms — definition, syntax aur example ke
          saath.
        </p>
      </header>
      <div className="mt-6 max-w-3xl">
        <GlossaryList terms={sorted} />
      </div>
    </div>
  );
}
