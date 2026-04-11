# Design System Specification: Digital Breadboard

## 1. Overview & Creative North Star
**Creative North Star: The Schematic Architect**

This design system is not a traditional interface; it is a high-fidelity hardware debugging environment translated into a digital experience. It moves away from the "flat web" toward a tactile, technical workspace. The aesthetic celebrates the raw precision of an Integrated Development Environment (IDE) and the physical structure of a circuit breadboard.

By leveraging **intentional asymmetry**, **schematic linework**, and **tonal depth**, we avoid the generic "admin dashboard" look. We favor "active" UI states that feel powered-on and functional. The layout should feel engineered, with elements connected by invisible logic gates and grounded by a heavy, technical foundation.

---

## 2. Colors & Surface Logic

The palette is rooted in the "Dark Room" philosophy—minimizing eye strain while highlighting critical data with luminescent phosphors.

### The Color Palette
*   **Background (Primary Void):** `#111318` (surface) / `#0C0E12` (surface-container-lowest).
*   **The Glow (Primary):** `#00FF41` (circuit-green). Used for "Active" states and data flow.
*   **The Warning (Secondary/Amber):** `#FFB000` (secondary-container). Used for "High Alert" or specialized data categories.
*   **The Neutral (Monitors):** `#e2e2e8` (on-surface). For high-readability data points.

### The "No-Line" Rule
Traditional 1px solid borders for layout sectioning are strictly prohibited. Instead, define spatial boundaries through:
1.  **Background Shifts:** Use `surface-container-low` against `surface` to denote a sidebar.
2.  **Thin Grid Lines:** Use `outline-variant` at 10% opacity to create a background "blueprint" grid that elements snap to.

### The Glass & Gradient Rule
To move beyond a static look, CTAs and hero elements must utilize **Signature Textures**. 
*   **Action Gradients:** Transition from `primary-fixed-dim` (`#00e639`) to `primary-container` (`#00ff41`) at a 135-degree angle.
*   **Glassmorphism:** For overlays or "Floating Modules," use `surface-container-high` with an 80% opacity and a `24px` backdrop-blur. This simulates a glass terminal hovering over the hardware.

---

## 3. Typography: The Engineering Font Stack

The typographic system contrasts "System Data" (Monospace) with "Interface Logic" (Sans-Serif).

*   **Display & Headlines (Space Grotesk):** High-tech, wide-kerning sans-serif. Use for section titles and massive headers. This provides a "branded" editorial feel.
*   **Data & Labels (JetBrains Mono / Fira Code):** Monospace is mandatory for all technical values, code snippets, and terminal headers. It communicates precision.
*   **Body (Inter):** A clean sans-serif for long-form reading, ensuring that documentation or descriptions are accessible and legible.

**Hierarchy Identity:**
*   **Display LG (3.5rem):** Reserved for hero names or system versions.
*   **Label MD (0.75rem):** All-caps Monospace with 0.1em letter spacing for "Status" indicators.

---

## 4. Elevation & Depth: Tonal Layering

We reject traditional drop shadows. Depth in this system is achieved through "Physical Stacking" and Neumorphic principles applied to dark surfaces.

*   **The Layering Principle:** 
    *   **Base:** `surface` (#111318)
    *   **Recessed (Input fields/Wells):** `surface-container-lowest` (#0c0e12)
    *   **Raised (Cards/Modules):** `surface-container-low` (#1a1c20)
*   **Ambient Shadows:** If a floating effect is required (e.g., a modal), use a diffuse glow rather than a black shadow. Use `surface-tint` (#00e639) at 5% opacity with a 40px blur to simulate the "glow" of a CRT monitor.
*   **The "Ghost Border":** For card containment, use the `outline-variant` token at 15% opacity. It should feel like a faint pencil line on a blueprint, not a structural wall.

---

## 5. Components

### Buttons (The "Switch" Variant)
*   **Primary:** Solid `primary-container` (#00ff41) with `on-primary` (#003907) text. Apply a subtle "pressed" inner shadow on active states.
*   **Secondary (Schematic):** Transparent background with a 1px `ghost border` and Monospace text. 
*   **Tertiary:** No border, all-caps monospace text with a leading `>` character.

### Terminal Inputs
*   **Styling:** Background-color `surface-container-lowest`. 
*   **Focus State:** A 2px left-side border using `primary` (#ebffe2). No full-box glow.
*   **The "Blinking Cursor":** Inputs should feature a 500ms pulse animation on the caret to mimic a command-line interface.

### Chips (Logic Gates)
*   **Style:** Rectangular with `sm` (0.125rem) roundedness. 
*   **Visuals:** Use `surface-variant` for the background. Labels are `label-sm` in Monospace. 
*   **IoT Context:** Add a "status dot" to chips—green for active hardware, amber for standby.

### Cards & Lists
*   **Strict Rule:** No horizontal dividers. 
*   **Separation:** Use `8px` of vertical space and a background shift to `surface-container-low`.
*   **The "Breadboard" Detail:** Add a small decorative "mounting hole" icon (circle, 4px) in the top-right corner of cards to lean into the hardware metaphor.

---

## 6. Do's and Don'ts

### Do
*   **DO** use asymmetric layouts. Place technical metadata (uptime, status) in the top-right and primary actions in the bottom-left.
*   **DO** use "Circuit Lines." Use thin `outline-variant` lines to visually "wire" a card to its header.
*   **DO** use Monospace for any number or technical unit (e.g., `99.2%`, `MCU-01`).

### Don'ts
*   **DON'T** use soft, bubbly corners. Stick to the `sm` (0.125rem) or `none` (0px) roundedness scale for a rigid, engineered feel.
*   **DON'T** use 100% opaque white text. Use `on-surface` (#e2e2e8) to prevent "retina burn" against the dark background.
*   **DON'T** use standard "Information" blue. All functional feedback must be in Green (Go), Amber (Warning), or Red (Error).

---

## 7. Implementation Note for Junior Designers
When building pages, think like an engineer laying out a PCB. Components should feel "soldered" into place. Every element should have a clear purpose; if a component doesn't display data or provide a control, question its existence. The beauty of this system lies in its technical density and its "glowing" logic.