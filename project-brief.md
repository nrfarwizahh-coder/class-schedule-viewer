# Project Brief

## Project Identity

Class Schedule Viewer

## One-Sentence Concept

A colorful browser-based class schedule viewer where students can view and edit their own class schedule, with data persisting in the browser.

## Target User

Students who need to view and manage their class schedule.

## User Goal

View current classes and edit the schedule (add, update, or remove classes) with changes saved locally.

## Build Shape

Browser-local tool

## Shape Confirmation

Confirmed: browser-local tool. The main value is viewing and editing class schedule data, which must persist after browser refresh using localStorage. No backend, auth, or database required.

## Version-One Success

A colorful, functional class schedule viewer where a student can view their schedule, add/edit/remove classes, and have those changes persist in the browser after refresh. Mobile-friendly layout.

## Now / Later / Never

### Now

- View class schedule entries
- Add, edit, and delete class entries
- Data persists via localStorage
- Colorful, responsive UI
- Mobile-friendly layout

### Later

- Export/import schedule
- Color-coded subjects
- Weekly/daily view toggle
- Notifications or reminders

### Never

- Backend server or database
- Login / authentication
- Payments
- Multi-user sync
- Live API calls

## Assumptions

- One student uses this on their own browser
- All data stored in localStorage (no server)
- "Colorful" means visually distinct styling, not a full design system
- No specific framework required; vanilla HTML/CSS/JS is sufficient for v1

## Proof Target

A student can open the app in their browser, add a class, refresh, and confirm the class is still there. The layout works on mobile. No backend needed.

## Trainer / Learner Notes

None yet.
