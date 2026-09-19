import type { Question, Quiz } from "@/types";

export type QuestionTuple = [string, string[], number, string];

export function quiz(slug: string, questions: QuestionTuple[]): Quiz {
  const qs: Question[] = questions.map(([question, options, correctAnswer, explanation], i) => ({
    id: `${slug}-q${i + 1}`,
    question,
    options,
    correctAnswer,
    explanation,
  }));
  return {
    id: `${slug}-quiz`,
    lessonId: slug,
    questions: qs,
    passingScore: 60,
  };
}
