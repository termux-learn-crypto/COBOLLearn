import type { MetadataRoute } from "next";
import { allLessons, courses, glossary, projects } from "@/lib/content";

const base = "https://cobol-learn.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/courses",
    "/practice",
    "/projects",
    "/glossary",
    "/search",
    "/progress",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${base}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const lessonRoutes = allLessons.map((lesson) => ({
    url: `${base}/lessons/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const glossaryRoutes = glossary.map((term) => ({
    url: `${base}/glossary/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...lessonRoutes,
    ...glossaryRoutes,
    ...projectRoutes,
  ];
}
