import type { Quiz } from "@/types";
import { beginnerQuizzes } from "./beginner";
import { fundamentalsQuizzes } from "./fundamentals";
import { conditionsQuizzes, loopsQuizzes } from "./conditions-loops";
import {
  stringsQuizzes,
  tablesQuizzes,
  filesQuizzes,
} from "./strings-tables-files";
import {
  advancedQuizzes,
  databaseQuizzes,
  mainframeQuizzes,
} from "./advanced-db-mainframe";

export const allQuizzes: Quiz[] = [
  ...beginnerQuizzes,
  ...fundamentalsQuizzes,
  ...conditionsQuizzes,
  ...loopsQuizzes,
  ...stringsQuizzes,
  ...tablesQuizzes,
  ...filesQuizzes,
  ...advancedQuizzes,
  ...databaseQuizzes,
  ...mainframeQuizzes,
];

export const getQuiz = (id: string) => allQuizzes.find((q) => q.id === id);

export const getQuizByLesson = (lessonSlug: string) =>
  allQuizzes.find((q) => q.lessonId === lessonSlug);
