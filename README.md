# Retro Cybersecurity Learning Platform (Cyber-Sec)

An interactive, retro terminal–style learning app that teaches practical cybersecurity topics through bite-sized learning modules, quizzes, and progression mechanics. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## Project Overview

**Cyber-Sec** provides a gamified learning experience for cybersecurity fundamentals and practical topics. Users create a simple handle/pin, complete modules (videos, articles, and quizzes), earn points and badges, and appear on a local leaderboard powered by browser storage.

Key highlights:
- Retro terminal UI and audio cues for a nostalgic experience 🔊
- Rich library of learning modules covering phishing, authentication, malware, networking, and more ✅
- Quizzes with scoring, progress tracking, and leveling mechanics 🎯
- Leaderboard stored in `localStorage` for quick local competition 🏆

---

## Features

- Terminal-styled UI with loading animation and header/footer
- Login / session persisted in `localStorage` (`cyberSecUser`)
- Learning modules with videos, reading links, and quizzes
- Scoring system and per-module max score calculation
- Local leaderboard (`leaderboard`) sorted by `totalScore`
- Sound feedback using Web Audio API (beeps, success, error)

---

## 🧰 Tech Stack

- React + TypeScript
- Vite (dev server and build)
- Tailwind CSS for styling
- Lucide icons

---

## ⚙️ Getting Started

Prerequisites:
- Node.js (recommended v18+)
- npm (or yarn)

Install and run locally:

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview

# lint the codebase
npm run lint
```

Open http://localhost:5173 (or the URL provided by Vite) in your browser.

---

## 📁 Project Structure (high level)

- `src/`
  - `App.tsx` — Application root and view routing
  - `components/` — UI components (Dashboard, LearningModule, Leaderboard, LoginScreen, etc.)
  - `data/modules.ts` — All learning modules and quizzes
  - `utils/sounds.ts` — Web Audio helpers for UI feedback
  - `types.ts` — Shared TypeScript interfaces

---

## 🔧 Development Notes

- To add a new module, update `src/data/modules.ts` with a new `LearningModuleData` entry (id, title, difficulty, article links, quiz questions, and `maxScore`).
- Progress and leaderboard data are stored in `localStorage`. Keys used:
  - `cyberSecUser` — current user/session
  - `leaderboard` — array of users for the leaderboard
- Sound utilities are in `src/utils/sounds.ts` and use the Web Audio API. There are simple helpers: `playBeep`, `playSuccess`, `playError`.

---

## ✅ Contributing

Contributions are welcome! Suggested workflow:
1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description of changes

Please run `npm run lint` before opening a PR.

If you plan to add a new learning module, include: videos (if available), authoritative article links, and at least a 3–5 question quiz with `points` and `explanation` fields.

---

## 📚 Credits & Resources

This project references standard cybersecurity resources and guides such as OWASP, NIST, and SANS for content accuracy and further reading.

---

## 📄 License

This repository does not include a license file yet. If you'd like to open-source it, add a `LICENSE` (e.g., MIT) file to clarify usage terms.

---

If you'd like, I can also add a short contributing guide, example module template, or a `LICENSE` file (MIT) — tell me which and I'll add it. ✨
