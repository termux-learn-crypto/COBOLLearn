import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url)).replace(/\/$/, "");
const require = createRequire(fileURLToPath(import.meta.url));
const jiti = require("jiti")(import.meta.url, {
  alias: { "@": ROOT },
});

const { allLessons } = jiti(ROOT + "/data/lessons/index.ts");
const { allQuizzes } = jiti(ROOT + "/data/quizzes/index.ts");
const { glossary } = jiti(ROOT + "/data/glossary.ts");

const words = (s = "") =>
  s
    .replace(/[*_`#>]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0 && /[A-Za-z0-9]/.test(w)).length;

function lessonWordCount(lesson) {
  let count = 0;
  count += words(lesson.title);
  count += words(lesson.description);
  lesson.objectives.forEach((o) => (count += words(o)));
  lesson.blocks.forEach((b) => {
    if (typeof b.text === "string") count += words(b.text);
    if (b.code) count += words(b.code);
    if (b.items) b.items.forEach((i) => (count += words(i)));
    if (b.headers) b.headers.forEach((h) => (count += words(h)));
    if (b.rows) b.rows.forEach((r) => r.forEach((c) => (count += words(c))));
  });
  lesson.examples.forEach((e) => {
    count += words(e.title);
    if (e.code) count += words(e.code);
    if (e.output) count += words(e.output);
  });
  lesson.commonMistakes.forEach((m) => (count += words(m)));
  if (lesson.practice) count += words(lesson.practice);
  if (lesson.prerequisites) lesson.prerequisites.forEach((i) => (count += words(i)));
  if (lesson.edgeCases) lesson.edgeCases.forEach((e) => { count += words(e.problem); count += words(e.explanation); });
  if (lesson.debugging) lesson.debugging.forEach((d) => { count += words(d.error); count += words(d.reason); count += words(d.fix); });
  if (lesson.bestPractices) lesson.bestPractices.forEach((i) => (count += words(i)));
  if (lesson.exercises) lesson.exercises.forEach((e) => { count += words(e.task); if (e.hint) count += words(e.hint); });
  if (lesson.interviewQA) lesson.interviewQA.forEach((i) => { count += words(i.question); count += words(i.answer); });
  if (lesson.glossaryTerms) lesson.glossaryTerms.forEach((g) => { count += words(g.term); count += words(g.definition); });
  if (lesson.summaryPoints) lesson.summaryPoints.forEach((i) => (count += words(i)));
  if (lesson.nextTopic) count += words(lesson.nextTopic);
  return count;
}

const MIN_WORDS = Number(process.env.MIN_WORDS ?? 3000);

const results = allLessons.map((lesson) => {
  const count = lessonWordCount(lesson);
  const quiz = allQuizzes.find((q) => q.lessonId === lesson.slug);
  return {
    slug: lesson.slug,
    courseId: lesson.courseId,
    title: lesson.title,
    count,
    pass: count >= MIN_WORDS,
    quizQuestions: quiz ? quiz.questions.length : 0,
  };
});

const passing = results.filter((r) => r.pass);
const failing = results.filter((r) => !r.pass);

console.log(
  `CONTENT CHECK — ${passing.length}/${results.length} lessons >= ${MIN_WORDS} words`
);
console.log("=".repeat(60));
for (const r of results) {
  const mark = r.pass ? "PASS" : "FAIL";
  const quizNote = r.quizQuestions >= 5 ? "quiz-ok" : "quiz-short";
  console.log(
    `[${mark}] ${r.count}/${MIN_WORDS}  ${r.slug.padEnd(30)} (${
      r.courseId
    }) ${quizNote}(${r.quizQuestions})`
  );
}
console.log("=".repeat(60));

// Section-presence check for the most important headings
const REQUIRED_HEADINGS = [
  "Prerequisit",
  "Syntax",
  "Basic Example",
  "Line-by-Line",
  "Intermediate",
  "Advanced Example",
  "Real-World",
  "Common Mistakes",
  "Edge Case",
  "Debugging",
  "Best Practice",
  "Quiz",
  "Interview",
  "Glossary",
  "Summary",
  "Next Topic",
];

const sectionResults = allLessons.map((lesson) => {
  const headingText = lesson.blocks
    .filter((b) => b.type === "heading")
    .map((b) => b.text)
    .join(" | ");
  const missing = REQUIRED_HEADINGS.filter((h) => !headingText.includes(h));
  return { slug: lesson.slug, missing };
});

console.log("\nSECTION CHECK (required headings per topic)");
for (const s of sectionResults) {
  const status = s.missing.length === 0 ? "PASS" : `MISSING: ${s.missing.join(", ")}`;
  console.log(`${s.slug.padEnd(32)} ${status}`);
}

console.log("\nGLOSSARY TERMS:", glossary.length);

const exitCode = failing.length > 0 ? 1 : 0;
console.log(`\nExit code → ${exitCode}`);
process.exit(exitCode);