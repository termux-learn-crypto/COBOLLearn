"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  caption?: string;
  language?: string;
}

export default function CodeBlock({
  code,
  caption,
  language = "cobol",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
        <figcaption className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-3 py-1.5">
          <span className="font-mono text-xs uppercase tracking-wide text-slate-400">
            {caption ?? language}
          </span>
          <button
            type="button"
            onClick={copy}
            className="rounded px-2 py-1 text-xs font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
            aria-label="Copy code"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </figcaption>
        <pre className="codeblock m-0">
          <code>{code}</code>
        </pre>
      </div>
    </figure>
  );
}
