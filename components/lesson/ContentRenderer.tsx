import type { ContentBlock } from "@/types";
import CodeBlock from "./CodeBlock";

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const calloutStyles = {
  tip: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-100",
  note: "border-blue-300 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
  warning:
    "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100",
} as const;

const calloutIcon = { tip: "💡", note: "📝", warning: "⚠️" } as const;

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h3
                key={i}
                className="pt-2 text-xl font-bold text-slate-900 dark:text-white"
              >
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="leading-7 text-slate-700 dark:text-slate-300">
                <Inline text={block.text} />
              </p>
            );
          case "syntax":
            return (
              <CodeBlock
                key={i}
                code={block.code}
                caption={block.caption ?? "Syntax"}
              />
            );
          case "code":
            return (
              <CodeBlock
                key={i}
                code={block.code}
                caption={block.caption ?? "Example"}
              />
            );
          case "output":
            return (
              <figure key={i} className="my-4">
                <figcaption className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {block.caption ?? "Output"}
                </figcaption>
                <pre className="overflow-x-auto rounded-lg border border-slate-300 bg-slate-100 p-3 font-mono text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                  {block.text}
                </pre>
              </figure>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="ml-5 list-decimal space-y-1 text-slate-700 dark:text-slate-300">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="ml-5 list-disc space-y-1 text-slate-700 dark:text-slate-300">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="my-4 overflow-x-auto">
                <table className="w-full border-collapse overflow-hidden rounded-lg text-sm">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      {block.headers.map((header, j) => (
                        <th
                          key={j}
                          className="border border-slate-200 px-3 py-2 text-left font-semibold dark:border-slate-700"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="even:bg-slate-50 dark:even:bg-slate-900">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className="border border-slate-200 px-3 py-2 dark:border-slate-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "tip":
          case "note":
          case "warning":
            return (
              <aside
                key={i}
                className={`my-4 rounded-lg border-l-4 px-4 py-3 text-sm ${calloutStyles[block.type]}`}
              >
                <span className="mr-2" aria-hidden>
                  {calloutIcon[block.type]}
                </span>
                <Inline text={block.text} />
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
