import type { Lesson } from "@/types";
import { beginnerLessons } from "./beginner";
import { moveLesson } from "./move";
import { fundamentalsLessons } from "./fundamentals";
import { conditionsLessons } from "./conditions";
import { loopsLessons } from "./loops";
import { stringsLessons } from "./strings";
import { tablesLessons } from "./tables";
import { filesLessons } from "./files";
import { advancedLessons } from "./advanced";
import { databaseLessons } from "./database";
import { mainframeLessons } from "./mainframe";

export const allLessons: Lesson[] = [
  ...beginnerLessons,
  moveLesson,
  ...fundamentalsLessons,
  ...conditionsLessons,
  ...loopsLessons,
  ...stringsLessons,
  ...tablesLessons,
  ...filesLessons,
  ...advancedLessons,
  ...databaseLessons,
  ...mainframeLessons,
];

export const getLesson = (slug: string) =>
  allLessons.find((l) => l.slug === slug);

export const lessonsByCourse = (courseId: string) =>
  allLessons
    .filter((l) => l.courseId === courseId)
    .sort((a, b) => a.order - b.order);
