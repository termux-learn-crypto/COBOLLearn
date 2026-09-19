"use client";

import { useCallback, useEffect, useState } from "react";
import type { Progress } from "@/types";

const STORAGE_KEY = "cobol-progress-v1";

const emptyProgress: Progress = {
  completedLessons: [],
  quizScores: {},
  currentLesson: null,
  streak: 0,
  lastActive: null,
};

export function loadProgress(): Progress {
  if (typeof window === "undefined") return emptyProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      completedLessons: parsed.completedLessons ?? [],
      quizScores: parsed.quizScores ?? {},
      currentLesson: parsed.currentLesson ?? null,
      streak: parsed.streak ?? 0,
      lastActive: parsed.lastActive ?? null,
    };
  } catch {
    return emptyProgress;
  }
}

function persist(progress: Progress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("cobol-progress-change"));
}

function touchStreak(progress: Progress): Progress {
  const today = new Date().toDateString();
  if (progress.lastActive === today) return progress;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const streak =
    progress.lastActive === yesterday ? progress.streak + 1 : 1;
  return { ...progress, streak, lastActive: today };
}

export function markLessonComplete(slug: string) {
  const progress = touchStreak(loadProgress());
  if (!progress.completedLessons.includes(slug)) {
    progress.completedLessons = [...progress.completedLessons, slug];
  }
  progress.currentLesson = slug;
  persist(progress);
}

export function saveQuizScore(lessonSlug: string, score: number) {
  const progress = touchStreak(loadProgress());
  const existing = progress.quizScores[lessonSlug] ?? 0;
  progress.quizScores[lessonSlug] = Math.max(existing, score);
  persist(progress);
}

export function setCurrentLesson(slug: string) {
  const progress = loadProgress();
  progress.currentLesson = slug;
  persist(progress);
}

export function resetProgress() {
  persist({ ...emptyProgress });
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);

  const refresh = useCallback(() => setProgress(loadProgress()), []);

  useEffect(() => {
    refresh();
    window.addEventListener("cobol-progress-change", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("cobol-progress-change", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  return {
    progress,
    refresh,
    markComplete: markLessonComplete,
    saveScore: saveQuizScore,
    setCurrent: setCurrentLesson,
    reset: () => {
      resetProgress();
      refresh();
    },
  };
}

export function completionPercent(
  completed: number,
  total: number
): number {
  if (total <= 0) return 0;
  return Math.round((completed / total) * 100);
}
