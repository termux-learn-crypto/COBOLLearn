import { courses } from "@/data/courses";
import { allLessons } from "@/data/lessons";
import { glossary } from "@/data/glossary";
import { projects } from "@/data/projects";

export type SearchResultType = "lesson" | "course" | "glossary" | "project";

export interface SearchResult {
  type: SearchResultType;
  title: string;
  snippet: string;
  href: string;
  keyword: string;
}

function flattenLessonText(lesson: (typeof allLessons)[number]): string {
  const parts: string[] = [lesson.title, lesson.description];
  lesson.blocks.forEach((block) => {
    if ("text" in block) parts.push(block.text);
    if (block.type === "list") parts.push(block.items.join(" "));
    if (block.type === "syntax" || block.type === "code") parts.push(block.code);
    if (block.type === "output") parts.push(block.text);
    if (block.type === "table") parts.push(block.rows.flat().join(" "));
  });
  return parts.join(" ").toLowerCase();
}

export function search(query: string, limit = 40): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];

  const results: SearchResult[] = [];

  for (const course of courses) {
    const text = `${course.title} ${course.description} ${course.level}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        type: "course",
        title: `${course.icon} ${course.title}`,
        snippet: course.description,
        href: `/courses/${course.slug}`,
        keyword: course.title,
      });
    }
  }

  for (const lesson of allLessons) {
    const text = flattenLessonText(lesson);
    if (text.includes(q)) {
      results.push({
        type: "lesson",
        title: lesson.title,
        snippet: lesson.description,
        href: `/lessons/${lesson.slug}`,
        keyword: lesson.title,
      });
    }
  }

  for (const term of glossary) {
    const text = `${term.term} ${term.definition} ${term.syntax} ${term.example}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        type: "glossary",
        title: term.term,
        snippet: term.definition,
        href: `/glossary/${term.slug}`,
        keyword: term.term,
      });
    }
  }

  for (const project of projects) {
    const text = `${project.title} ${project.description} ${project.concepts.join(" ")}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        type: "project",
        title: project.title,
        snippet: project.description,
        href: `/projects/${project.slug}`,
        keyword: project.title,
      });
    }
  }

  return results.slice(0, limit);
}
