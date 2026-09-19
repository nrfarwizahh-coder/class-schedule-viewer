# Work Card 01 — Project Skeleton

## Goal

Scaffold a Vite + React project with the folder structure from architecture.md and confirm it runs.

## Inputs

- Node.js v24.21.0, npm 11.19.0 confirmed
- Build blueprint specifies Vite + React + plain CSS

## Files likely touched

- `package.json`
- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/styles/main.css`
- `work-cards/01-project-skeleton.md`

## Instructions for the coding agent

1. Run `npm create vite@latest . -- --template react` in the project folder (or equivalent)
2. Install dependencies with `npm install`
3. Create the folder structure: `src/components/`, `src/hooks/`, `src/styles/`
4. Create `src/main.jsx` that renders `<App />`
5. Create a minimal `src/App.jsx` with a heading "Class Schedule Viewer"
6. Create `src/styles/main.css` (empty for now, will be styled in later cards)
7. Run `npm run dev` and confirm the app shell loads with the heading visible

## What not to do

- Do not add any class-related features yet
- Do not install UI libraries (no Material UI, Bootstrap, etc.)
- Do not add CSS framework unless Tailwind is already in use by the session
- Do not connect to any backend or API
- Do not create source folders outside `src/`, `public/`, and project root

## Done when

- `npm run dev` starts without errors
- Browser shows "Class Schedule Viewer" heading
- Folder structure matches architecture.md

## Verification steps

1. `npm run dev` starts successfully
2. App heading "Class Schedule Viewer" is visible in browser
3. `src/components/`, `src/hooks/`, `src/styles/` directories exist
4. No 1px borders used (even in placeholder CSS)
5. **Design check:** App shell placeholder follows design.md mood — clean, generous spacing, no premature styling.

## Localhost test before continuing

After this card, the learner should test:

- `npm run dev` starts and app loads in browser
- "Class Schedule Viewer" heading is visible
- No console errors

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If `npm run dev` fails after 10 minutes, ask trainer for help.

## Status

Not started
