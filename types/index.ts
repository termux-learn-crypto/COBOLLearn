export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "syntax"; code: string; caption?: string }
  | { type: "code"; code: string; caption?: string }
  | { type: "output"; text: string; caption?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "tip" | "note" | "warning"; text: string };

export interface Course {
  id: string;
  slug: string;
  title: string;
  level: string;
  description: string;
  icon: string;
  order: number;
  lessons: string[];
}

export interface LessonExercise {
  level: "beginner" | "intermediate" | "advanced" | "debugging";
  task: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  courseId: string;
  title: string;
  description: string;
  objectives: string[];
  blocks: ContentBlock[];
  examples: { title: string; code: string; output?: string }[];
  commonMistakes: string[];
  practice: string;
  quizId: string;
  order: number;
  readMinutes: number;
  prerequisites?: string[];
  edgeCases?: { problem: string; explanation: string }[];
  debugging?: { code: string; error: string; reason: string; fix: string; correctCode: string }[];
  bestPractices?: string[];
  exercises?: LessonExercise[];
  interviewQA?: { question: string; answer: string }[];
  glossaryTerms?: { term: string; definition: string }[];
  summaryPoints?: string[];
  nextTopic?: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Question[];
  passingScore: number;
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  syntax: string;
  example: string;
  relatedLessons: string[];
}

export interface ProjectStep {
  title: string;
  body: string;
  code?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: string;
  concepts: string[];
  requirements: string[];
  steps: ProjectStep[];
  finalCode: string;
  expectedOutput: string;
}

export interface Progress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  currentLesson: string | null;
  streak: number;
  lastActive: string | null;
}
