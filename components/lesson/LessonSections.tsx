import type { Lesson } from "@/types";

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

const section =
  "card my-8 p-4 sm:p-6";
const sectionTitle =
  "font-bold text-slate-900 dark:text-white";

export function Prerequisites({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={section}>
      <h2 className={sectionTitle}>📚 Prerequisites</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Ye topic samajhne se pehle ye concepts aana chahiye:
      </p>
      <ul className="mt-2 ml-5 list-disc space-y-1 text-slate-700 dark:text-slate-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function EdgeCases({ items }: { items: Lesson["edgeCases"] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={section}>
      <h2 className={sectionTitle}>🧊 Edge Cases</h2>
      <ul className="mt-2 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-800">
            <span className="font-semibold text-slate-900 dark:text-white">
              {item.problem}
            </span>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              {item.explanation}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Debugging({ items }: { items: Lesson["debugging"] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={section}>
      <h2 className={sectionTitle}>🐞 Debugging Practice</h2>
      <div className="mt-3 space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950"
          >
            <p className="text-sm font-semibold text-rose-900 dark:text-rose-100">
              Error: {item.error}
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-rose-300 bg-white p-3 text-xs font-mono text-rose-800 dark:border-rose-700 dark:bg-slate-900 dark:text-rose-200">
              {item.code}
            </pre>
            <p className="mt-2 text-sm text-rose-800 dark:text-rose-200">
              <strong>Reason:</strong> {item.reason}
            </p>
            <p className="mt-1 text-sm text-rose-800 dark:text-rose-200">
              <strong>Fix:</strong> {item.fix}
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-emerald-300 bg-white p-3 text-xs font-mono text-emerald-800 dark:border-emerald-700 dark:bg-slate-900 dark:text-emerald-200">
              {item.correctCode}
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BestPractices({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={section}>
      <h2 className={sectionTitle}>✅ Best Practices</h2>
      <ul className="mt-2 ml-5 list-disc space-y-1 text-slate-700 dark:text-slate-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

const levelLabel: Record<string, string> = {
  beginner: "🟢 Beginner",
  intermediate: "🟡 Intermediate",
  advanced: "🔴 Advanced",
  debugging: "🐞 Debugging",
};

export function Exercises({ items }: { items: Lesson["exercises"] }) {
  if (!items || items.length === 0) return null;
  const grouped = items.reduce<Record<string, typeof items>>((acc, ex) => {
    (acc[ex.level] = acc[ex.level] ?? []).push(ex);
    return acc;
  }, {});
  const order = ["beginner", "intermediate", "advanced", "debugging"];
  return (
    <section className={section}>
      <h2 className={sectionTitle}>🏋️ Practice Exercises</h2>
      <div className="mt-3 space-y-4">
        {order.map((level) => {
          const group = grouped[level];
          if (!group) return null;
          return (
            <div key={level}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {levelLabel[level]}
              </h3>
              <ol className="mt-2 ml-5 list-decimal space-y-2">
                {group.map((ex, i) => (
                  <li key={i} className="text-slate-700 dark:text-slate-300">
                    <span className="font-medium text-slate-900 dark:text-white">
                      {ex.task}
                    </span>
                    {ex.hint && (
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                        💡 Hint: {ex.hint}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function InterviewQA({ items }: { items: Lesson["interviewQA"] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={section}>
      <h2 className={sectionTitle}>💼 Interview Questions</h2>
      <div className="mt-3 space-y-4">
        {items.map((item, i) => (
          <details key={i} className="group rounded-lg border border-slate-200 dark:border-slate-700">
            <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                Q{i + 1}.
              </span>
              {item.question}
            </summary>
            <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function GlossaryTerms({ items }: { items: Lesson["glossaryTerms"] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={section}>
      <h2 className={sectionTitle}>📖 Lesson Glossary</h2>
      <dl className="mt-2 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-800">
            <dt className="font-semibold text-slate-900 dark:text-white">
              {item.term}
            </dt>
            <dd className="mt-0.5 text-slate-600 dark:text-slate-400">
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Summary({ points }: { points: string[] }) {
  if (!points || points.length === 0) return null;
  return (
    <section className="my-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:p-6 dark:border-emerald-800 dark:bg-emerald-950">
      <h2 className="font-bold text-emerald-900 dark:text-emerald-100">
        🎯 Summary
      </h2>
      <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-emerald-800 dark:text-emerald-200">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

export function NextTopic({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <section className="my-6 rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
      <h2 className="font-semibold text-indigo-900 dark:text-indigo-100">
        ⏭️ Next Topic
      </h2>
      <p className="mt-1 text-sm text-indigo-800 dark:text-indigo-200">{text}</p>
    </section>
  );
}