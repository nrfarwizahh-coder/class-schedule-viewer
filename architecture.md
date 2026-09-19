# Architecture

## Build Shape

Browser-local tool — the main value is viewing and editing class schedule data that persists in the browser via localStorage.

## Stack Decision

- **Build tool:** Vite
- **UI library:** React
- **Styling:** Plain CSS (no Tailwind unless session is using it)
- **Persistence:** localStorage (browser-native, no backend)
- **No backend, auth, database, payment, or live API**

## Structure Overview

Single-page React app. All state lives in memory and is synced to localStorage on every change. No routing needed — one page, one data type (classes).

```
class-schedule-app/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   │   ├── ScheduleList.jsx
│   │   ├── ClassItem.jsx
│   │   ├── ClassForm.jsx
│   │   └── EmptyState.jsx
│   ├── hooks/
│   │   └── useClassSchedule.js
│   └── styles/
│       └── main.css
└── package.json
```

## Component Map

| Component | Responsibility |
|-----------|---------------|
| `App.jsx` | Root component, holds state, renders layout |
| `ScheduleList` | Renders all class items, handles empty state |
| `ClassItem` | Displays one class (subject, day/time, room, instructor, color), edit and delete actions |
| `ClassForm` | Form with all 5 fields for adding or editing a class |
| `EmptyState` | Shows "No classes yet" with add prompt |
| `useClassSchedule` | Custom hook managing class list state and localStorage sync |

## Data / State Model

Each class entry has 5 fields:

| Field | Type | Required |
|-------|------|----------|
| Subject | string | Yes |
| DayTime | string | Yes |
| Room | string | Yes |
| Instructor | string | Yes |
| Color | string | Yes (color label/hex code) |

State shape:

```js
[
  {
    id: "unique-id",
    subject: "Math 101",
    dayTime: "Monday 9:00 AM",
    room: "Room 201",
    instructor: "Dr. Smith",
    color: "#3498db"
  }
]
```

## Storage Logic

- **Key:** `class-schedule`
- **Read:** On app load, read from `localStorage.getItem("class-schedule")`. If null, start with empty array.
- **Write:** On every add/edit/delete, write the full array to `localStorage.setItem("class-schedule", JSON.stringify(classes))`.
- **Parse:** JSON parse on read, JSON stringify on write.

## User Flow

1. **Open app** → load classes from localStorage → render list (or empty state)
2. **Add class** → click add → ClassForm opens → fill 5 fields → submit → saved to localStorage → list updates
3. **Edit class** → click edit button on a class → ClassForm opens pre-filled → modify fields → submit → saved to localStorage → list updates
4. **Delete class** → mobile: swipe to delete; desktop: click delete button → confirm → remove from localStorage → list updates
5. **Refresh** → all data reloads from localStorage

## File Expectations

- `index.html` — Vite entry point
- `src/main.jsx` — React mount
- `src/App.jsx` — Root layout and state
- `src/components/ScheduleList.jsx` — Class list + empty state
- `src/components/ClassItem.jsx` — Individual class card
- `src/components/ClassForm.jsx` — Add/edit form (5 fields)
- `src/components/EmptyState.jsx` — "No classes yet" placeholder
- `src/hooks/useClassSchedule.js` — State + localStorage hook
- `src/styles/main.css` — All styles, mobile-first, colorful theme

## Constraints

- All data stored in localStorage only — no server
- Max 5 fields per class entry
- Mobile-first responsive layout
- Swipe-to-delete on mobile, button on desktop
- Colorful visual design per learner preference
- No auth, no backend, no database, no payments, no live API

## Technical Non-Goals

- No user authentication
- No multi-user support
- No server-side storage
- No data export/import
- No calendar integration
- No reminders or notifications

## Verification Notes

- Add a class → refresh → confirm class is still displayed
- Edit a class → confirm changes persist after refresh
- Delete a class → confirm it's removed and doesn't return after refresh
- Empty state shows "No classes yet" when no classes exist
- Layout works on mobile viewport
