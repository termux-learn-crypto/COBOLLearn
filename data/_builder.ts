import type { ContentBlock, Lesson } from "@/types";

interface LessonInput {
  slug: string;
  courseId: string;
  title: string;
  description: string;
  objectives: string[];
  blocks: ContentBlock[];
  examples?: Lesson["examples"];
  commonMistakes?: string[];
  practice?: string;
  quizId?: string;
  readMinutes?: number;
  prerequisites?: string[];
  edgeCases?: Lesson["edgeCases"];
  debugging?: Lesson["debugging"];
  bestPractices?: string[];
  exercises?: Lesson["exercises"];
  interviewQA?: Lesson["interviewQA"];
  glossaryTerms?: Lesson["glossaryTerms"];
  summaryPoints?: string[];
  nextTopic?: string;
}

const counters: Record<string, number> = {};

export function lesson(input: LessonInput): Lesson {
  const order = (counters[input.courseId] = (counters[input.courseId] ?? 0) + 1);
  return {
    id: input.slug,
    slug: input.slug,
    courseId: input.courseId,
    title: input.title,
    description: input.description,
    objectives: input.objectives,
    blocks: input.blocks,
    examples: input.examples ?? [],
    commonMistakes: input.commonMistakes ?? [],
    practice: input.practice ?? "",
    quizId: input.quizId ?? `${input.slug}-quiz`,
    order,
    readMinutes: input.readMinutes ?? Math.max(4, Math.round(input.blocks.length / 2) + 2),
    prerequisites: input.prerequisites,
    edgeCases: input.edgeCases,
    debugging: input.debugging,
    bestPractices: input.bestPractices,
    exercises: input.exercises,
    interviewQA: input.interviewQA,
    glossaryTerms: input.glossaryTerms,
    summaryPoints: input.summaryPoints,
    nextTopic: input.nextTopic,
  };
}

export const p = (text: string): ContentBlock => ({ type: "paragraph", text });
export const h = (text: string): ContentBlock => ({ type: "heading", text });
export const syn = (code: string, caption?: string): ContentBlock => ({
  type: "syntax",
  code,
  caption,
});
export const code = (code: string, caption?: string): ContentBlock => ({
  type: "code",
  code,
  caption,
});
export const out = (text: string, caption?: string): ContentBlock => ({
  type: "output",
  text,
  caption,
});
export const list = (items: string[], ordered = false): ContentBlock[] =>
  [{ type: "list", items, ordered }];
export const tip = (text: string): ContentBlock => ({ type: "tip", text });
export const note = (text: string): ContentBlock => ({ type: "note", text });
export const warn = (text: string): ContentBlock => ({ type: "warning", text });
export const table = (headers: string[], rows: string[][]): ContentBlock => ({
  type: "table",
  headers,
  rows,
});
