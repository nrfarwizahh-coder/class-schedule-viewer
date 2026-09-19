# Work Card 06 — Review and Fix

## Goal

Run the Review Mirror and make the single smallest useful fix.

## Inputs

- All previous work cards completed
- `build-status.md`, `build-blueprint.md`, current work card
- App is fully functional (add, edit, delete, persist)

## Files likely touched

- Whatever the review mirror identifies
- `build-status.md`
- `work-cards/06-review-and-fix.md`

## Instructions for the coding agent

1. Run `prompts/07-review-mirror.md` — follow its instructions exactly
2. Review the app against the checklist in the review mirror
3. Identify the single most impactful issue (not a nitpick — the biggest useful fix)
4. Make only that one fix
5. Test the fix
6. Do not refactor, improve, or add features beyond the single fix

## What not to do

- Do not make multiple fixes — only one smallest useful fix
- Do not refactor code for readability
- Do not add new features
- Do not change styling unless the review identifies a visual blocker
- Do not modify work cards or planning files

## Done when

- Review mirror has been run
- The single smallest useful fix has been applied
- The fix has been verified

## Verification steps

1. Run the review mirror checklist
2. Identify one issue
3. Fix it
4. Verify the fix resolves the issue
5. **Design check:** After fix, confirm no design.md rules are violated.

## Localhost test before continuing

After this card, the learner should test:

- The specific fix from the review mirror is working
- No regressions introduced by the fix
- Add/edit/delete/refresh still work as expected

If all tests pass, reply `continue`.
If anything fails, reply `fix` and describe the issue.

## Stop condition

If the review mirror finds no issues, state that and move on. Do not invent issues to fix.

## Status

Not started
