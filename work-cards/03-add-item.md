# Work Card 03 — Add Item

## Goal

Implement the add behavior: fill the 5-field form, submit, and see the new class appear in the list.

## Inputs

- Work Card 02 completed (static layout visible)
- ClassForm with 5 fields (Subject, Day/Time, Room, Instructor, Color)
- architecture.md data model: `{ id, subject, dayTime, room, instructor, color }`

## Files likely touched

- `src/hooks/useClassSchedule.js`
- `src/components/ClassForm.jsx`
- `src/components/ScheduleList.jsx`
- `src/App.jsx`
- `work-cards/03-add-item.md`

## Instructions for the coding agent

1. Implement `useClassSchedule` hook:
   - State: array of class objects
   - Load from `localStorage.getItem("class-schedule")` on init, parse JSON, default to `[]`
   - Add function: takes a class object (with all 5 fields), generates `id` via `Date.now().toString()`, appends to array, writes to localStorage
   - Update function: takes an id and updated object, replaces in array, writes to localStorage
   - Delete function: takes an id, filters it out, writes to localStorage
   - On every change, `localStorage.setItem("class-schedule", JSON.stringify(classes))`
2. Make ClassForm functional:
   - Each field has controlled input with onChange handler
   - On submit, call hook's add function with all 5 field values
   - Clear form fields after successful add
3. Make ScheduleList render actual class items from state (not placeholder)
4. Each ClassItem displays its 5 fields
5. Empty state shows when array is empty, list shows when items exist

## What not to do

- Do not implement edit/delete yet (that's Work Card 04)
- Do not add validation beyond required fields being non-empty
- Do not add backend sync
- Do not add authentication
- Do not add sample data on load (empty by default)

## Done when

- Filling the form and clicking submit adds a class to the list
- Class appears with all 5 fields displayed
- localStorage has the new entry
- Empty state disappears when items exist
- List appears when items exist

## Verification steps

1. Open app, fill form with a sample class (e.g., Subject: "Math", DayTime: "Monday 9AM", Room: "201", Instructor: "Dr. Smith", Color: "#3498db")
2. Click submit — class appears in list
3. Inspect localStorage — key `class-schedule` contains the new entry
4. Empty state is hidden, list is visible
5. **Design check:** Item card/list, input, and empty state follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- Fill form with real values, submit → class appears in list
- Open DevTools → Application tab → localStorage → confirm `class-schedule` key exists with correct data
- Confirm empty state is hidden when items exist

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If form submission doesn't work after 15 minutes, check React state and localStorage integration.

## Status

Not started
