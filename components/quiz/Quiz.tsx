"use client";

import { useState } from "react";
import type { Quiz as QuizType } from "@/types";
import { saveQuizScore } from "@/lib/progress";

export default function Quiz({ quiz, lessonSlug }: { quiz: QuizType; lessonSlug: string }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = quiz.questions.length;
  const correctCount = quiz.questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;
  const score = total ? Math.round((correctCount / total) * 100) : 0;
  const passed = score >= quiz.passingScore;
  const allAnswered = quiz.questions.every((q) => answers[q.id] !== undefined);

  const submit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
    saveQuizScore(lessonSlug, score);
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="my-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          📝 Quiz
        </h2>
        <span className="text-xs text-slate-500">
          Passing: {quiz.passingScore}%
        </span>
      </div>

      <ol className="mt-4 space-y-5">
        {quiz.questions.map((question, qi) => {
          const selected = answers[question.id];
          return (
            <li key={question.id}>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                {qi + 1}. {question.question}
              </p>
              <div className="mt-2 space-y-2">
                {question.options.map((option, oi) => {
                  const isSelected = selected === oi;
                  const isCorrect = submitted && oi === question.correctAnswer;
                  const isWrong =
                    submitted && isSelected && oi !== question.correctAnswer;
                  return (
                    <label
                      key={oi}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                        isCorrect
                          ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950"
                          : isWrong
                          ? "border-rose-400 bg-rose-50 dark:bg-rose-950"
                          : isSelected
                          ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
                          : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        checked={isSelected}
                        disabled={submitted}
                        onChange={() =>
                          setAnswers((prev) => ({ ...prev, [question.id]: oi }))
                        }
                        className="accent-blue-700"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <p className="mt-2 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {question.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted ? (
        <button
          type="button"
          onClick={submit}
          disabled={!allAnswered}
          className="btn-primary mt-5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p
            className={`text-lg font-bold ${
              passed ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
            }`}
          >
            {passed ? "🎉 Passed!" : "😅 Try Again"} — {score}%
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {correctCount} / {total} correct
          </p>
          <button type="button" onClick={retry} className="btn-secondary mt-3">
            Retry Quiz
          </button>
        </div>
      )}
    </section>
  );
}
