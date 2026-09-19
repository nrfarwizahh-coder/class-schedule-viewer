# Work Card 07 — GitHub and Vercel Proof

## Goal

Publish the app to GitHub and deploy to Vercel (or provide fallback proof) to demonstrate the project exists and is accessible.

## Inputs

- All previous work cards completed
- App is functional with full CRUD + persistence
- GitHub account confirmed
- Vercel account confirmed and connected to GitHub

## Files likely touched

- `README.md`
- GitHub repository (new or existing)
- `work-cards/07-github-vercel-proof.md`

## Instructions for the coding agent

1. Create a `README.md` in the project root with:
   - Project name: Class Schedule Viewer
   - Brief description (from 60-second explanation template in build-blueprint.md)
   - Tech stack (Vite, React, plain CSS, localStorage)
   - How to run locally (`npm install`, `npm run dev`)
   - Build shape note: browser-local tool, all data in localStorage
2. Initialize Git (if not already done): `git init`, `git add .`, `git commit -m "Initial commit"`
3. Create a GitHub repository and push the code
4. Connect the repository to Vercel and deploy
5. Record the deployed URL
6. If Vercel fails, use the fallback from `prompts/08-github-vercel-proof.md`

## What not to do

- Do not add environment variables or secrets to the code
- Do not deploy before all work cards are done
- Do not add a backend or server-side rendering for deployment
- Do not commit node_modules
- Do not push without a .gitignore

## Done when

- GitHub repository created with code pushed
- Vercel deployment successful (or fallback proof documented)
- README.md complete
- Deployed URL recorded in build-status.md

## Verification steps

1. GitHub repo exists and contains the code
2. Vercel deployment is live (or fallback proof is documented)
3. README.md has project name, description, stack, and run instructions
4. No secrets or keys in any committed file
5. Deployed app works — add a class, refresh, confirm it persists
6. **Design check:** Deployed app follows design.md — colorful, responsive, no fake content.

## Localhost test before continuing

After this card, the learner should test:

- Open deployed URL → app loads → shows "No classes yet" or saved classes
- Add a class in deployed version → refresh → class persists (localStorage works on deployed domain)

If all tests pass, reply `continue`.
If anything fails, reply `fix` and describe the issue.

## Stop condition

If GitHub or Vercel setup fails, document the error and ask trainer for assistance.

## Status

Not started
