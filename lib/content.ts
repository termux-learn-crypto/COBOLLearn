import { courses, getCourse } from "@/data/courses";
import { allLessons, getLesson, lessonsByCourse } from "@/data/lessons";
import { allQuizzes, getQuiz, getQuizByLesson } from "@/data/quizzes";
import { glossary, getGlossaryTerm } from "@/data/glossary";
import { projects, getProject } from "@/data/projects";
import type { Course, GlossaryTerm, Lesson, Project, Quiz } from "@/types";

export { courses, allLessons, allQuizzes, glossary, projects };
export { getCourse, getLesson, lessonsByCourse, getQuiz, getQuizByLesson };
export { getGlossaryTerm, getProject };

export const totalLessons = allLessons.length;

export function courseOfLesson(lesson: Lesson): Course | undefined {
  return getCourse(lesson.courseId);
}

export function nextLesson(slug: string): Lesson | undefined {
  const lesson = getLesson(slug);
  if (!lesson) return undefined;
  const siblings = lessonsByCourse(lesson.courseId);
  const idx = siblings.findIndex((l) => l.slug === slug);
  if (idx < siblings.length - 1) return siblings[idx + 1];
  const courseIdx = courses.findIndex((c) => c.id === lesson.courseId);
  const nextCourse = courses[courseIdx + 1];
  if (!nextCourse) return undefined;
  return lessonsByCourse(nextCourse.id)[0];
}

export function prevLesson(slug: string): Lesson | undefined {
  const lesson = getLesson(slug);
  if (!lesson) return undefined;
  const siblings = lessonsByCourse(lesson.courseId);
  const idx = siblings.findIndex((l) => l.slug === slug);
  if (idx > 0) return siblings[idx - 1];
  const courseIdx = courses.findIndex((c) => c.id === lesson.courseId);
  const prevCourse = courses[courseIdx - 1];
  if (!prevCourse) return undefined;
  const prevSiblings = lessonsByCourse(prevCourse.id);
  return prevSiblings[prevSiblings.length - 1];
}

export function lessonCountForCourse(courseId: string): number {
  return lessonsByCourse(courseId).length;
}

export type { Course, GlossaryTerm, Lesson, Project, Quiz };
