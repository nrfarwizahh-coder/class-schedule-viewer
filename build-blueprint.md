# Build Blueprint

## Source Files

- `project-brief.md` — Class Schedule Viewer, browser-local tool, student users, view/edit, colorful, within scope
- `architecture.md` — Vite + React + plain CSS, localStorage, class entry with 5 fields, single-page app
- `design.md` — The Digital Curator (premium/editorial), tonal layering, ghost shadows, gradient CTAs, no borders, generous spacing

## Project Identity

Class Schedule Viewer — a colorful browser-local tool where students can view and edit their class schedule, with all data persisting in the browser.

## Build Shape

Browser-local tool — main value is adding/changing one data type (classes) and keeping it after refresh via localStorage.

## Version-One Promise

A student can open the app, see their class schedule, add or edit classes through a form with 5 fields (Subject, Day/Time, Room, Instructor, Color), delete classes via swipe (mobile) or button (desktop), and have all changes persist after refresh. The app is colorful, mobile-friendly, and requires no backend.

## Scope Lock

### Now

- View class schedule entries
- Add class via form (5 fields)
- Edit class via pre-filled form
- Delete class (swipe mobile, button desktop)
- localStorage persistence (key: `class-schedule`)
- Colorful, premium/editorial visual design
- Mobile-first responsive layout
- Empty state ("No classes yet")
- Refresh persistence proof

### Later

- Export/import schedule
- Color-coded subjects or categories
- Weekly/daily view toggle
- Reminders or notifications
- Drag-and-drop reordering

### Never

- Backend server or database
- Login / authentication
- Payments
- Multi-user sync
- Live API calls
- No fake logos, testimonials, or stats

## Architecture Summary

- **Build tool:** Vite
- **UI library:** React
- **Styling:** Plain CSS, mobile-first
- **Persistence:** localStorage (browser-native)
- **No backend, auth, database, payment, or live API**
- Single-page app, no routing needed

Structure:

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

## Data / State / Storage Rules

- **Storage key:** `class-schedule`
- **State shape:** Array of class objects: `{ id, subject, dayTime, room, instructor, color }`
- **Read:** `localStorage.getItem("class-schedule")` on load, parse JSON, default to empty array
- **Write:** `localStorage.setItem("class-schedule", JSON.stringify(classes))` on every add/edit/delete
- **ID generation:** `Date.now().toString()` or `crypto.randomUUID()`
- **No server sync, no cookies, no session storage**

## Design Direction Summary

### Borrow from The Digital Curator:

- Tonal layering and surface nesting (lighter containers on darker backgrounds)
- Ghost shadows (ultra-diffused, ambient)
- Gradient CTAs (deep red to lighter red)
- "No-Line" rule — no 1px borders, use color shifts
- Public Sans/Inter typography pairing (or equivalent display + body fonts)
- Generous white space — 25% more than you think
- Asymmetric, editorial layout feel
- Glassmorphism for navigation/overlays (if applicable)

### Must NOT copy:

- Universidad Panamericana name, logo, or institutional identity
- "Digital Curator" name or branding
- Exact color hex codes as brand colors
- Any branded content, photos, testimonials, or claims
- Specific institution's academic data

## Implementation Rules

- Mobile-first CSS
- Touch targets minimum 44px
- Color contrast meets WCAG AA
- No 1px borders anywhere — use background color shifts
- No pure black text
- All interactive elements keyboard accessible
- ARIA labels on icon-only buttons
- One clear primary action per screen
- Readable on phone width (no horizontal scroll)
- Smooth transitions for add/edit/delete
- Delete requires confirmation

## File and Folder Expectations

| Path | Purpose |
|------|---------|
| `index.html` | Vite entry point |
| `src/main.jsx` | React mount |
| `src/App.jsx` | Root component, state holder |
| `src/components/ScheduleList.jsx` | Renders class list or empty state |
| `src/components/ClassItem.jsx` | Individual class card with edit/delete |
| `src/components/ClassForm.jsx` | Add/edit form with 5 fields |
| `src/components/EmptyState.jsx` | "No classes yet" placeholder |
| `src/hooks/useClassSchedule.js` | State management + localStorage sync |
| `src/styles/main.css` | All styles, mobile-first |
| `package.json` | Vite, React dependencies |

## Work Card Plan

Work cards will be generated after this blueprint is confirmed. Expected work cards based on architecture:

1. **Work Card 01** — Project scaffold (Vite + React + folder structure)
2. **Work Card 02** — Data layer (useClassSchedule hook, localStorage CRUD)
3. **Work Card 03** — UI components (ScheduleList, ClassItem, EmptyState)
4. **Work Card 04** — Class form (add/edit form with 5 fields)
5. **Work Card 05** — Styling and polish (colorful theme, responsive, mobile, anti-slop)

## Review Mirror

After building, run `prompts/07-review-mirror.md` and make the single smallest useful fix.

## Proof Ladder

1. App loads with no classes → shows "No classes yet"
2. Add a class via form → appears in list
3. Refresh page → class still visible (localStorage persistence)
4. Edit a class → changes persist after refresh
5. Delete a class → removed, does not return after refresh
6. Mobile viewport → single column, no horizontal scroll, 44px touch targets
7. No fake data, logos, testimonials, or claims in the app

## 60-Second Explanation Template

"Class Schedule Viewer is a browser-local tool where students can view and edit their class schedule. All data stays in the browser using localStorage — refresh and your classes are still there. It's built with Vite and React, styled with a premium/editorial design approach with colorful cards, generous spacing, and gradient accents. No login, no backend, no database. Just open it and manage your schedule."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing
- Implement only the current work card; do not jump ahead
- Stop after verification; do not proceed to next card without confirmation
- Update `build-status.md` after each work card
- Do not add backend/auth/database/API unless this blueprint explicitly allows it
- Do not add secrets or keys to code
- Do not invent claims, testimonials, logos, or real numbers
- Apply guardrails for confirmed build shape (browser-local tool): localStorage only, no multi-user, no upload, no admin system
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping
- No fake logos, testimonials, stats, or "lorem ipsum" in final proof
