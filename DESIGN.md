# Design System Strategy: The Scholarly Infrastructure

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system rejects the frantic energy of contemporary "startup" aesthetics in favor of a poised, institutional presence. We are building a platform for formation and infrastructure—it must feel like a modern library or a high-end architectural firm: permanent, intentional, and authoritative.

To achieve "Quiet Authority," we move away from standard grid-locked templates. We embrace **intentional asymmetry** (e.g., wide left margins with offset headers) and **tonal depth**. The experience should feel like reading a bespoke editorial journal where the software gets out of the way of the wisdom it contains. We prioritize the "breathing room" of white space over the clutter of functional density.

---

## 2. Colors & Surface Architecture

### The Palette
The foundation is a dialogue between **Warm Cream (`#fbf9f4`)** and **Charcoal (`#1b1c19`)**, punctuated by **Deep Amethyst (`#5300b7`)**. This is a "High-Contrast, Low-Stress" palette.

*   **Primary:** `primary` (#5300b7) / `primary_container` (#6d28d9) - Use for critical actions and brand markers.
*   **Neutral Foundation:** `background` (#fbf9f4) and `on_background` (#1b1c19).
*   **The Deep Amethyst:** This is our "Intellectual Accent." It should be used sparingly to guide the eye, never as a decorative wash.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Traditional "boxes" make a system look generic and modular. Instead, define boundaries through:
1.  **Background Shifts:** Place a `surface_container_low` section directly against a `surface` background.
2.  **Generous Negative Space:** Use the Spacing Scale to create "gutters of thought" between functional blocks.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
*   **Base:** `surface` (The foundation).
*   **Layer 1:** `surface_container_low` (Subtle groupings).
*   **Layer 2:** `surface_container` (Interactive elements).
*   **Floating/Modal:** `surface_container_lowest` (Pure white for highest prominence).

### The "Glass & Gradient" Rule
To add "soul," use subtle gradients on primary CTAs (transitioning from `primary` to `primary_container`). For floating navigation or temporary overlays, use **Glassmorphism**: `surface` color at 80% opacity with a `24px` backdrop blur. This allows the warm cream tones to bleed through, softening the institutional edge.

---

## 3. Typography: The Editorial Voice

Our typography is "Serious and Directional." It creates a rhythm between scholarly inquiry and structural efficiency.

*   **The Serif (Newsreader):** Used for `display` and `headline` scales. This provides "Scholarly Impact." It signals that the content has been curated and carries weight. Use `display-lg` (3.5rem) for hero moments to create an editorial, "masthead" feel.
*   **The Sans-Serif (Inter):** Used for `title`, `body`, and `label`. This is our "System Infrastructure." It provides clarity, modernism, and high legibility for data and functional labels.

**Typographic Hierarchy Tone:**
- **Headlines:** Tracking should be slightly tighter (-1% to -2%) to feel authoritative.
- **Body:** `body-lg` (1rem) is our standard. Use wide line-heights (1.6) to ensure the eye never feels rushed.

---

## 4. Elevation & Depth

### The Layering Principle
Avoid "Drop Shadows" as a default. Depth is achieved via **Tonal Layering**. 
*   *Example:* Place a `surface_container_highest` card on a `surface` background. The shift in value creates enough "lift" without visual noise.

### Ambient Shadows
When a component must float (e.g., a primary dropdown), use **Ambient Shadows**:
- **Color:** `on_surface` at 6% opacity.
- **Blur:** Large (32px to 64px).
- **Y-Offset:** Subtle (8px).
- This mimics natural light in a gallery setting rather than a computer-generated effect.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use the **Ghost Border**: `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Pill Buttons (Primary/Secondary)
*   **Shape:** `full` (9999px) roundedness.
*   **Styling:** Primary buttons use `primary` with `on_primary` text. No borders.
*   **Hover:** Shift to `primary_container` and apply an Ambient Shadow.

### Clean Cards
*   **Shape:** `md` (1.5rem) or `lg` (2rem) corner radius.
*   **Structure:** No borders. Use `surface_container_low`. 
*   **Interaction:** On hover, the card should transition to `surface_container_lowest` with a subtle lift. Forbid the use of divider lines inside cards; use `body-sm` labels and 24px vertical spacing to separate header from content.

### Input Fields
*   **Style:** Minimalist. Only a bottom-border using `outline` (at 30% opacity) that transforms into a `primary` 2px line on focus.
*   **Typography:** Labels use `label-md` in `on_surface_variant`.

### Institutional Lists
*   **Rules:** No horizontal dividers. Use background-color alternating (`surface` to `surface_container_low`) or simply generous vertical padding (32px+) to distinguish items.

### Signature Component: The "Formation Progress" Pill
A custom chip using `tertiary_container` with `on_tertiary_fixed_variant` text to indicate scholarly progress or system status. It represents the "Movemental" aspect of the platform.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where the headline is offset from the body text.
*   **Do** prioritize `surface-dim` for "Quiet" states.
*   **Do** use `display-md` (Serif) for empty state messaging to make it feel poetic rather than an error.

### Don’t:
*   **Don’t** use pure black (#000000). Always use `on_background` (#1b1c19) for the charcoal feel.
*   **Don’t** use "Alert Red" for anything other than critical errors. Use the Amethyst palette for emphasis.
*   **Don’t** use 90-degree corners. Everything must have at least a `sm` (0.5rem) radius to feel "Human."
*   **Don’t** crowd the screen. If you feel you need a divider line, you probably just need more whitespace.