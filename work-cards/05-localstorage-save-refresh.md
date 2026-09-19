# Work Card 05 — localStorage Save and Refresh

## Goal

Prove that data persists in localStorage after browser refresh. This is the core promise of a browser-local tool.

## Inputs

- Work Card 04 completed (edit and delete work)
- localStorage key: `class-schedule`
- localStorage sync happens on every add/edit/delete via useClassSchedule hook

## Files likely touched

- `src/hooks/useClassSchedule.js`
- `work-cards/05-localstorage-save-refresh.md`

## Instructions for the coding agent

1. Verify the useClassSchedule hook reads from localStorage on initial load
2. Verify it writes to localStorage on every state change (add, edit, delete)
3. Verify data is serialized as JSON and stored under key `class-schedule`
4. Verify data loads correctly on page refresh (read → parse → populate state)
5. Add a visual refresh-proof indicator: after any add/edit/delete, briefly show a small confirmation text near the form (e.g., "Saved") — this reinforces that the save happened
6. Ensure data survives: open app → add classes → refresh browser → classes still displayed

## What not to do

- Do not add sessionStorage as backup (localStorage only)
- Do not add cloud sync or server backup
- Do not add data export/import
- Do not fake persistence with sample data — real localStorage only

## Done when

- Add a class → refresh browser → class still visible
- Edit a class → refresh browser → changes still visible
- Delete a class → refresh browser → item still gone
- "Saved" indicator appears after each operation
- localStorage key `class-schedule` contains all current classes as JSON

## Verification steps

1. Add 2 classes via form
2. Refresh browser (hard refresh, Ctrl+F5)
3. Confirm both classes still visible
4. Edit one class → refresh → confirm edit persisted
5. Delete one class → refresh → confirm deletion persisted
6. Check localStorage in DevTools → key `class-schedule` has correct JSON
7. **Design check:** Refresh proof visibility follows design.md — "Saved" indicator present.

## Localhost test before continuing

After this card, the learner should test:

- Add a class → hard refresh → class still visible
- Edit a class → hard refresh → changes still there
- Delete a class → hard refresh → item still gone
- localStorage shows `class-schedule` key with correct data

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If data does not survive refresh, check: (1) localStorage write on state change, (2) localStorage read on init, (3) JSON parse/stringify correctness.

## Status

Not started
