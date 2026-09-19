# Work Card 02 — Static Layout

## Goal

Build the static UI layout with all components in place, an empty state, and colorful styling matching design.md.

## Inputs

- Work Card 01 completed (app runs)
- design.md (premium/editorial, tonal layering, gradient CTAs, no borders, generous spacing)
- architecture.md (component map)

## Files likely touched

- `src/App.jsx`
- `src/components/ScheduleList.jsx`
- `src/components/ClassItem.jsx`
- `src/components/ClassForm.jsx`
- `src/components/EmptyState.jsx`
- `src/styles/main.css`
- `work-cards/02-static-layout.md`

## Instructions for the coding agent

1. Implement the component structure from architecture.md:
   - `EmptyState.jsx` — shows "No classes yet" and an "Add your first class" button
   - `ScheduleList.jsx` — renders ClassItem list or EmptyState
   - `ClassItem.jsx` — card showing Subject, Day/Time, Room, Instructor, Color placeholder
   - `ClassForm.jsx` — form with 5 fields (Subject, Day/Time, Room, Instructor, Color) and submit button
   - `App.jsx` — renders ScheduleList and ClassForm, manages state placeholder
2. Style with CSS per design.md:
   - No 1px borders — use background color shifts
   - Gradient button for primary action
   - Generous white space (25% more than feels right)
   - Card items use tonal layering (lighter on darker)
   - Mobile-first, single column
3. The ClassForm should be visible on screen (even if non-functional for now)
4. The EmptyState should show "No classes yet" by default
5. All interactive elements minimum 44px touch target

## What not to do

- Do not add localStorage persistence yet (that's Work Card 05)
- Do not make the form functional yet (just visible)
- Do not add edit/delete functionality yet (that's Work Card 04)
- Do not add backend or API calls
- Do not clone The Digital Curator's institution identity (name, logo, branded content)

## Done when

- App shows "Class Schedule Viewer" heading
- Empty state shows "No classes yet" with "Add your first class" button
- ClassForm is visible with all 5 fields (non-functional is OK for now)
- Colorful styling matches design.md direction
- Layout works on mobile (single column)
- No 1px borders, no pure black text, generous spacing

## Verification steps

1. App loads showing "No classes yet" empty state
2. "Add your first class" button is visible
3. ClassForm shows all 5 fields: Subject, Day/Time, Room, Instructor, Color
4. Layout is single column on mobile width, no horizontal scroll
5. Buttons have gradient styling per design.md
6. Cards/lists use tonal layering (no borders, color shifts for separation)
7. No fake logos, testimonials, or claims
8. **Design check:** Item card/list, input, update/delete controls, empty state, and mobile stacking follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- App loads and shows "No classes yet" empty state
- ClassForm is visible with all 5 fields
- Layout looks correct on mobile width (single column, no cut-off)
- Gradient buttons visible, no 1px borders visible

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If styling takes more than 20 minutes without progress, simplify and move on.

## Status

Not started
