# Work Card 04 — Update and Delete Item

## Goal

Implement edit (pre-filled form) and delete (swipe mobile, button desktop) behaviors for class items.

## Inputs

- Work Card 03 completed (add works, items appear in list)
- ClassItem card displays Subject, Day/Time, Room, Instructor, Color

## Files likely touched

- `src/components/ClassItem.jsx`
- `src/components/ClassForm.jsx`
- `src/hooks/useClassSchedule.js`
- `work-cards/04-update-delete-item.md`

## Instructions for the coding agent

1. Add edit button to ClassItem (ghost style secondary button per design.md)
2. On edit click, open ClassForm pre-filled with the item's current values
3. ClassForm should detect edit mode (has an `id` to update vs. add mode)
4. On form submit in edit mode, call hook's update function with the item's id and new values
5. Add delete button to ClassItem (desktop: ghost button with confirmation)
6. Delete should show a simple confirmation dialog: "Remove this class?" with Cancel / Confirm
7. On confirm, call hook's delete function with the item's id
8. Mobile: implement swipe-to-delete on ClassItem (touch events: track touch start/move/end, show delete area on swipe left, confirm on release)
9. After delete, list updates and empty state shows if last item removed

## What not to do

- Do not add undo after delete (confirmation is the safeguard)
- Do not add admin panel or bulk actions
- Do not add backend deletion
- Do not add soft-delete or recycle bin
- Do not make delete require more than one confirmation step

## Done when

- Each ClassItem has edit and delete buttons
- Clicking edit opens pre-filled form, saving updates the item
- Clicking delete removes the item after confirmation
- Mobile: swipe left on a card to delete
- After edit/delete, localStorage reflects the change

## Verification steps

1. Add a class, then click edit → form pre-fills → change a field → save → item updates in list
2. Add a class, click delete → confirm → item removed from list
3. Mobile viewport: swipe a card left → delete confirmed → item removed
4. Edit and delete both persist after refresh (localStorage confirmed)
5. **Design check:** Update/delete controls, edit state, and empty state follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- Add a class → click edit → change Subject → save → subject updated in card
- Add a class → click delete → confirm → card removed
- On mobile: swipe a card → delete confirmed → card removed
- Refresh page → edits/deletes persisted

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If swipe-to-delete doesn't work after 15 minutes, simplify to delete button only for both mobile and desktop.

## Status

Not started
