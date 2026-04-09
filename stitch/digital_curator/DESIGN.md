```markdown
# Design System Specification: The Digital Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** It envisions a digital environment that mirrors the permanence and intentionality of a modern stone-and-glass library. This is not a transient interface; it is institutional, authoritative, and designed to house knowledge for the long term.

To move beyond the "template" look, the system leans into **Quiet Authority**. We achieve this through:
*   **Intentional Asymmetry:** Breaking the rigid 12-column grid to allow for editorial whitespace, making the content feel curated rather than procedurally generated.
*   **Tonal Depth:** Replacing harsh structural lines with a sophisticated hierarchy of warm surfaces.
*   **Typographic Tension:** The interplay between the intellectual heritage of Newsreader (Serif) and the clinical clarity of Inter (Sans-Serif).

---

## 2. Colors & Surface Logic

### The Palette
The palette is rooted in a "Warm Cream" base to reduce ocular strain and provide a "fine paper" feel, contrasted with "Charcoal" for permanence. "Deep Amethyst" serves as our intellectual spark—a color reserved for moments of primary action and scholarly significance.

*   **Background:** `#fbf9f4` (Warm Cream)
*   **On-Background / Surface:** `#1b1c19` (Charcoal)
*   **Primary:** `#380080` (Deep Amethyst) | **Primary Container:** `#5300b7`
*   **Tertiary Container:** `#722a00` (Used for "Formation" states)

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
*   Boundaries must be defined solely through background shifts.
*   Use `surface_container_low` (`#f5f4ee`) to define cards or sections against the `surface` (`#fbf9f4`) background.
*   If a visual break is needed, use **Generous Whitespace** (32px, 48px, or 64px increments) rather than a divider.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers.
*   **Level 0 (Base):** `surface` (`#fbf9f4`)
*   **Level 1 (Sections):** `surface_container_low` (`#f5f4ee`)
*   **Level 2 (Cards/Interaction):** `surface_container` (`#efeee8`)
*   **Level 3 (High Prominence):** `surface_container_highest` (`#e4e2dd`)

### Glass & Gradient Rule
For floating elements (modals, dropdowns), use **Glassmorphism**. Apply a semi-transparent `surface` color with a 12px-20px backdrop-blur. For Primary CTAs, utilize a subtle linear gradient from `primary` (#380080) to `primary_container` (#5300b7) at a 135° angle to provide a "lit from within" professional polish.

---

## 3. Typography
The typographic system establishes a hierarchy that feels both historical and futuristic.

### Editorial Display (Newsreader)
*   **Usage:** Display, Headline.
*   **Characteristics:** Scholarly, authoritative, -1% to -2% tracking.
*   **Scale:** 
    *   `display-lg`: 3.5rem / 1.1 LH
    *   `headline-lg`: 2rem / 1.2 LH

### Functional Interface (Inter)
*   **Usage:** Title, Body, Label.
*   **Characteristics:** Clear, modern, 0% tracking.
*   **Scale:**
    *   `body-lg`: 1rem / 1.6 LH (The "Scholar's Standard" for readability).
    *   `title-md`: 1.125rem / 1.4 LH.
    *   `label-md`: 0.75rem / Upper Case / +2% tracking.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved by "stacking" tonal values. Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f5f4ee) section to create a soft, natural lift without a shadow.

### Ambient Shadows
When a floating effect is required (e.g., a modal or floating navigation), use the **Ambient Shadow**:
*   **Color:** `on_surface` (`#1b1c19`) at 6% opacity.
*   **Blur:** 32px to 64px.
*   **Spread:** -4px.
*   This mimics natural light diffusal in a physical gallery.

### The "Ghost Border" Fallback
If accessibility requirements (WCAG) demand a container edge, use the **Ghost Border**: `outline_variant` (#ccc3d7) at 20% opacity. **Forbid 100% opaque borders.**

---

## 5. Components

### Buttons
*   **Primary:** Full-pill (9999px radius). Background: `primary` (#380080); Text: `on_primary` (#ffffff). No borders.
*   **Secondary:** Full-pill. Background: `surface_container_high` (#e9e8e3); Text: `on_surface`.
*   **States:** On hover, shift background color by 5% tonal depth; do not add shadows.

### Clean Cards
*   **Radius:** 1.5rem to 2rem (`md` to `lg`).
*   **Style:** No borders. Background: `surface_container_low` (#f5f4ee).
*   **Padding:** 2rem (32px) minimum.

### Minimalist Inputs
*   **Style:** No box container. Bottom border only (1px, `on_surface` at 20% opacity).
*   **Focus State:** Bottom border becomes `primary` (2px).
*   **Typography:** Labels use `label-md` (Inter).

### Institutional Lists
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use vertical padding (1.5rem between items) and `surface_container_low` hover states for row interaction.

### Signature Component: "Formation Progress" Pill
*   **Purpose:** To track the "formation" or "curation" of data/logic.
*   **Style:** A thick, full-pill track using `surface_container_highest` (#e4e2dd).
*   **Progress Fill:** `tertiary_container` (#722a00). 
*   **Visual Soul:** This high-contrast "earthy" accent breaks the cool purple/cream palette, signaling active institutional work.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts (e.g., a 4-column sidebar with an 8-column content area, but with the content area offset by 1 column).
*   **Do** prioritize whitespace over lines. If the layout feels "loose," increase the contrast between surface tiers.
*   **Do** use `body-lg` for all long-form reading.

### Don't
*   **Don't** use pure black (#000000). Always use Charcoal (`#1b1c19`).
*   **Don't** use 90-degree corners. Even the smallest UI element must have a minimum `sm` (0.5rem) radius.
*   **Don't** use standard "Drop Shadows." Only use the Ambient Shadow specification provided.
*   **Don't** use more than one Serif font. Newsreader is for authority; Inter is for utility. Keep them distinct.```