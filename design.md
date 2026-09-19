# Design Direction

## Design Inspiration URL

Design spec: "The Digital Curator" (Digital Curator design system, Universidad Panamericana style). Inspiration translated — institution name, logo, colors-as-brand, and identity are NOT copied.

## What We Borrow

- Intentional asymmetry and tonal depth (editorial feel over template look)
- Tonal layering: surfaces stack like physical layers (lighter on darker for lift)
- Ghost shadows for floating elements (ultra-diffused, ambient)
- Glassmorphism for navigation/overlays (semi-transparent + backdrop-blur)
- Gradient CTAs (primary to primary-container at 135 degrees)
- "No-Line" rule: no 1px solid borders — color shifts define sections
- Public Sans for display/headlines, Inter for body/functional text
- Generous white space — if you think there's enough, add 25% more
- Nested surface hierarchy for depth
- Asymmetric grids — left-aligned text, elements can break/bleed the grid

## What We Do Not Copy

- No Universidad Panamericana name, logo, colors-as-brand, or institutional identity
- No "Digital Curator" name or branding
- No branded content, photos, testimonials, or claims
- No specific institution's academic calendar or course data

## Visual Mood

Premium / editorial with an official/institutional tone. Feels like a curated academic legacy — intentional, permanent, and breathing room over density. Rich surfaces and gradients add depth without feeling heavy.

## Layout Rules

- Left-aligned text, elements can break or bleed off-edge for editorial look
- Asymmetric grid — not a standard 3-column template
- Generous vertical white space between sections
- Nested surfaces: lighter containers on darker backgrounds for physical depth
- No 1px borders anywhere — use background color shifts for section boundaries

## Color / Contrast Rules

- No pure black — use dark gray (#1a1c1c) for text
- Primary gradient: deep red to lighter red (135 degrees) for CTAs — inspired by spec but not matching institution hex codes exactly
- Surface hierarchy: base (#F9F9F9), container-low (#f3f3f3), container-lowest (#ffffff)
- Ghost border fallback only at 15% opacity if accessibility requires it
- High contrast for readability

## Typography Feel

- Headlines: Display font (Public Sans or serif equivalent), tight letter-spacing on large sizes, generous line-height (never collapse)
- Body: Inter, body-lg size, 1.5 line-height for readability
- Labels: Small caps, tracked-out, Inter — used for metadata
- Display-large: 3.5rem, leading 1.1
- Headline-medium: 1.75rem, leading 1.2

## Component Style

### Buttons
- Primary: Gradient fill (deep red to lighter red), white text, medium corner radius, no shadow
- Secondary: Ghost style, no background, primary text color, hover state with surface-container-high

### Cards & List Items
- No horizontal divider lines between items
- Items separated by 1.5rem vertical white space or tonal background shift
- Hover: transition from container-lowest to container-bright + ambient shadow lift

### Input Fields
- Filled style only (surface-container-high background), no bottom line
- Focus state: 3px left-accent border in primary color
- Labels: small, muted variant color

## Input Form Placement

- Class form appears as an overlay card or inline section at the top of the schedule list
- Add mode: empty form with 5 fields and a primary "Add Class" button
- Edit mode: same form pre-filled with existing data, button reads "Save Changes"
- Form uses filled input style with left-accent focus border

## Item Card / List Style

- Each class displayed as a card (surface-container-lowest on surface-container-low background)
- Card shows: Subject (display font, large), Day/Time, Room, Instructor, Color indicator
- Hover: lift effect via tonal shift + ghost shadow
- Cards stacked vertically with generous spacing

## Update / Mark State Style

- Edit button on each card (small, ghost style secondary button)
- Tapping edit opens the same form pre-filled
- After saving, card updates with smooth transition
- No "pending" or "loading" fake states — simple inline update

## Delete Affordance

- Desktop: Delete button on each card (ghost style, subtle red/muted color)
- Mobile: Swipe-to-delete gesture on card
- Confirm dialog before deletion (simple "Remove this class?" with Cancel/Confirm)
- No undo — deletion is final after confirmation

## Empty State

- Message: "No classes yet"
- Primary action button: "Add your first class" (gradient primary button)
- Centered, generous white space around it
- Feels intentional, not like an error

## Refresh Proof Visibility

- After adding a class, a subtle confirmation appears (e.g., "Class added") near the form
- Data visibly persists — after refresh, classes are still displayed
- No fake "Saved!" animation — actual persistence is the proof
- The localStorage sync is reliable by design (write on every change)

## Mobile Stacking Rules

- Single column layout always
- Cards stack vertically, full width with side padding
- Form stacks fields vertically, no side-by-side
- Swipe-to-delete enabled on mobile cards
- Touch targets: minimum 44px tap area for all buttons
- Typography scales down for mobile but stays readable

## Accessibility Basics

- All interactive elements keyboard accessible
- Focus states visible on all inputs and buttons
- ARIA labels for icon-only buttons (edit, delete)
- Color contrast meets WCAG AA minimum
- No information conveyed by color alone (text labels on all cards)
- Screen reader friendly: list structure with proper roles

## Anti-Slop Rules

- No fake logos
- No fake testimonials
- No fake stats unless clearly marked as sample data
- No "lorem ipsum" in final proof
- One clear primary action per screen (Add Class button)
- Readable on phone width (single column, no horizontal scroll)

## Design Verification Checklist

- [ ] No 1px borders used anywhere — sections defined by color shifts
- [ ] No pure black text — dark gray (#1a1c1c) used
- [ ] Generous white space maintained throughout
- [ ] Gradient CTA buttons present on primary actions
- [ ] Cards show hierarchy via tonal layering (no fake shadows)
- [ ] Glassmorphism used only for navigation/overlays, not abused
- [ ] Typography has proper leading — no collapsed line-height
- [ ] Input fields use filled style with left-accent focus
- [ ] Empty state with primary action button
- [ ] Delete affordance works on mobile (swipe) and desktop (button)
- [ ] Form placement is clear and accessible
- [ ] Mobile layout is single column, no horizontal scroll
- [ ] No cloned institution identity (name, logo, branded content)
- [ ] Color contrast meets WCAG AA
