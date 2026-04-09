# Design System Specification: Editorial Intelligence

## 1. Overview & Creative North Star: The Modern Archivist
This design system is anchored in the "Modern Archivist" philosophy—a visual language that balances the gravitas of a traditional newsroom with the fluid, rhythmic energy of digital-first curation. It rejects the "templated" look of modern SaaS in favor of a high-end editorial experience.

**The Creative North Star:**
*   **Intentional Asymmetry:** Avoid perfect centers. Use staggered grid placements and varying column widths to create a sense of human curation rather than algorithmic placement.
*   **Tonal Architecture:** Structure is defined by shifts in light and pigment, never by strokes.
*   **High-Contrast Sophistication:** The tension between the organic Warm Cream (`#fbf9f4`) and the electric Deep Amethyst (`#5300b7`) creates a premium, "intellectual" energy.

---

## 2. Colors & Surface Logic
The palette is a strict study in Deep Amethyst, Charcoal, Warm Cream, and a subtle accent of `#ccc9c6`. All brown-leaning neutrals have been purged to ensure a crisp, high-fidelity finish.

### Core Palette
*   **Base Foundation:** `surface` (#fbf9f4) — A breathable, warm cream that reduces eye strain and feels like premium paper stock.
*   **The Signature:** `primary_container` (#5300b7) — Use this for high-impact brand moments, focal points, and immersive hero sections.
*   **The Ink:** `on_surface` (#1b1c19) — A deep charcoal used for all primary legibility. Never use pure black.
*   **The Accent:** `#ccc9c6` — A subtle, cool-toned neutral for complementary elements, subtle dividers, or secondary states.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. 
*   **Boundary Definition:** Transition between sections using background shifts (e.g., moving from `surface` to `surface_container_low`).
*   **The Layering Principle:** Treat the UI as stacked sheets of fine paper. A card does not have an outline; it is simply a `surface_container_lowest` (#ffffff) element sitting on a `surface_container` (#f0eee9) background.

### Signature Textures & Gradients
To avoid a "flat" appearance, use subtle gradients for primary CTAs and deep-focus areas:
*   **Deep Linear Gradient:** `primary` (#380080) to `primary_container` (#5300b7) at a 135-degree angle. This adds a "jewel-toned" depth that feels bespoke.
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` at 80% opacity with a `24px` backdrop blur. This allows the Deep Amethyst and Charcoal content to bleed through softly, maintaining layout integration.

---

### 3. Typography: The Editorial Pair
The system uses a high-contrast typographic scale to establish a clear hierarchy of information.

*   **Display & Headlines (Newsreader):** Use this serif for all "Storytelling" elements. It provides an authoritative, editorial voice.
    *   *Rule:* Use negative letter-spacing (-0.02em) on `display-lg` to create a tighter, custom-set look.
*   **UI & Utility (Inter):** Use this sans-serif for "Actionable" elements, navigation, and long-form body copy. It provides a clean, modern counter-balance to the serif.

**The Hierarchy:**
- **Display LG (Newsreader, 3.5rem):** Reserved for hero titles. Always pair with an asymmetrical layout.
- **Headline MD (Newsreader, 1.75rem):** Section headers.
- **Body LG (Inter, 1rem):** Primary reading weight. Line height should be a generous 1.6 to emphasize the "Cream" foundation.

---

## 4. Elevation & Depth
In a world without lines, depth is the primary way we communicate hierarchy.

*   **Tonal Layering:** 
    *   Level 0: `surface` (The Floor)
    *   Level 1: `surface_container_low` (In-page grouping)
    *   Level 2: `surface_container_lowest` (Interactive cards/Active elements)
*   **Ambient Shadows:** If a component must float (e.g., a dropdown), use a "Shadow Tint." Instead of grey, use `on_surface` at 4% opacity with a `40px` blur and `12px` Y-offset. This mimics natural light falling on cream paper.
*   **The "Ghost Border" Fallback:** In extreme cases where accessibility requires a boundary, use `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components & Primitive Styling

### Buttons
*   **Primary:** Deep Amethyst gradient (as defined in Sec 2). Sharp 0px corners. White text.
*   **Secondary:** Charcoal (`on_secondary_fixed`) text on a `secondary_container` background. 0px corners.
*   **Interaction:** On hover, the primary button should shift slightly in hue towards `primary_fixed_dim`, rather than using a standard "grey-out" overlay.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Implementation:** Use vertical whitespace (32px, 48px, or 64px, reflecting a `spacing` level of 2 which supports normal density) to separate list items. For cards, use a subtle shift from `surface` to `surface_container_highest` on hover to indicate interactivity.
*   **Asymmetry:** In card grids, alternate between 2-column and 3-column widths to break the "standard grid" monotony.

### Input Fields
*   **State:** The resting state is a simple underline in `outline_variant` (2px). On focus, the underline transforms into a `primary` (#380080) bar that expands from the center. No box-styling.

---

## 6. Do’s and Don’ts

### Do
*   **Do** embrace negative space. If a layout feels crowded, increase the `surface` area, while maintaining a normal `spacing` (level 2) for component density.
*   **Do** use Newsreader for any text that is meant to be "absorbed" and Inter for text meant to be "utilized."
*   **Do** align elements to a baseline grid, but break the horizontal grid intentionally to create visual interest.

### Don't
*   **Don’t** use any brown or tan hex codes. If a neutral is needed, lean into the Charcoal or the "Cooling" effects of the Amethyst-tinted variants (`on_surface_variant`).
*   **Don’t** use rounded corners (`0px` across the entire system). Hard edges convey precision and editorial discipline.
*   **Don’t** use 1px borders. Ever. If you feel you need a line, use a 16px gap of a different surface color instead.

---

**Director’s Note:** This system is not a template; it is a framework for curation. Every screen should feel like a page from a high-end journal—where the silence (the cream foundation) is just as important as the noise (the amethyst content).