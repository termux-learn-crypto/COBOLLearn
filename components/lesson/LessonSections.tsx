export function LessonObjectives({ objectives }: { objectives: string[] }) {
  if (objectives.length === 0) return null;
  return (
    <section className="card my-6 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Learning Objectives
      </h2>
      <ul className="mt-2 space-y-1.5">
        {objectives.map((objective, i) => (
          <li
            key={i}
            className="flex gap-2 text-slate-700 dark:text-slate-300"
          >
            <span className="text-emerald-600 dark:text-emerald-400" aria-hidden>
              ✓
            </span>
            {objective}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Exercise({
  practice,
  commonMistakes,
}: {
  practice: string;
  commonMistakes: string[];
}) {
  if (!practice && commonMistakes.length === 0) return null;
  return (
    <section className="my-8 space-y-4">
      {practice && (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
          <h2 className="font-semibold text-indigo-900 dark:text-indigo-100">
            🧪 Practice Task
          </h2>
          <p className="mt-1 text-sm text-indigo-800 dark:text-indigo-200">
            {practice}
          </p>
        </div>
      )}
      {commonMistakes.length > 0 && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950">
          <h2 className="font-semibold text-rose-900 dark:text-rose-100">
            ⚠️ Common Mistakes
          </h2>
          <ul className="mt-1 ml-5 list-disc space-y-1 text-sm text-rose-800 dark:text-rose-200">
            {commonMistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
