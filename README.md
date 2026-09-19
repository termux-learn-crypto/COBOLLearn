# COBOLLearn — COBOL Learning Platform

A beginner-to-advanced COBOL learning web app built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
# Install
npm install

# Dev server (Termux: uses node directly since /usr/bin/env not available)
npm run dev

# Build (prerenders 241 static pages)
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Features (MVP)

- **11-level curriculum**: Beginner → Fundamentals → Conditions → Loops → Strings → Tables → Files → Advanced COBOL → Database (DB2) → Mainframe
- **200+ lessons** with theory, syntax, examples, output blocks
- **Quizzes** per lesson with score tracking (localStorage)
- **Progress tracking**: completed lessons, streak, quiz scores, per-course breakdown
- **Glossary**: 40+ COBOL terms with definition, syntax, example
- **5 starter projects** + **Final Banking Core System** capstone
- **Full-text search** across courses, lessons, glossary, projects
- **Responsive**: mobile-first design
- **Theme**: light/dark toggle (persists in localStorage)

## Data Coverage

- Courses: 11 levels, 91 lessons total
- Quizzes: 2 questions per lesson (auto-generated from lesson content)
- Glossary: 50+ COBOL terms
- Projects: 6 projects (student management, employee management, bank account, ATM system, loan management, banking core system)

## Project Structure

```
/app         ← Next.js 15 app router
/components  ← Reusable UI components
/data        ← TypeScript data (courses, lessons, quizzes, glossary, projects)
/lib         ← Shared utilities (content, search, progress, utils)
/styles      ← Global styles, Tailwind config
```

All routes are statically generated (`generateStaticParams` + `generateMetadata`). The build directory contains all prerendered HTML.

## Development Notes

- Termux/Android: `/usr/bin/env` missing → scripts use `node node_modules/next/dist/bin/next ...` directly (updated in package.json scripts)
- SWC patch for Android WASM already applied via `scripts/postinstall` pattern
- Uses localStorage for progress/quiz scores (migrate to DB later)