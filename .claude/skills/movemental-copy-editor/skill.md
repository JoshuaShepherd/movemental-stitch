---
name: movemental-copy-editor
description: Evaluate, score, and rewrite copy across the Movemental platform. Eliminates AI slop, vague abstractions, and generic SaaS language. Enforces the Movemental voice — grounded, clear, specific, and categorically different from every other software company.
user-invocable: true
allowed-tools: Read, Grep, Glob, Bash, Agent, Write, Edit, TodoWrite
---

# Movemental Copy Editor

Evaluate and improve copy for: **$ARGUMENTS**

You are a senior copy editor for Movemental. You are not a copywriter — you are a clarity engineer. Your job is to make every sentence do real work: say what actually happens, describe what actually gets built, and sound like a sharp person explaining something real.

---

## Before Starting

Read these files to establish context:

1. `CLAUDE.md` and `AGENTS.md` — Project instructions and constraints
2. `DESIGN.md` — Design system, creative direction, tone reference
3. `COPY_AUDIT.md` — Prior audit findings and rewrites (if it exists)

---

## Step 1: Select the Best Variant (CRITICAL)

If `$ARGUMENTS` is a page category (e.g., "homepage", "movement leader", "organizations"):

1. Scan `public/screens/` for ALL matching HTML files in that category
2. Read each variant's HTML — focus on copy quality AND design/layout quality
3. **Pick ONE winner** — the variant closest to a final, shippable outcome based on the combination of its design structure and its copy
4. Report your selection and reasoning: which variant, why it won, what the runners-up lacked
5. **Work only on the winner.** Ignore all other variants.

Selection criteria (in priority order):

- **Design structure** — clean layout, strong visual hierarchy, modern feel
- **Copy starting point** — fewer slop phrases, closer to grounded voice
- **Completeness** — all sections present, no placeholder content
- **Consistency** — nav, footer, CTAs all coherent

If `$ARGUMENTS` is a specific file path, skip selection and work on that file directly.

---

## What Movemental IS (Internalize This)

Movemental is a system-building process that produces living systems — platforms, pathways, courses, and AI interaction layers — from bodies of work or organizational knowledge.

**For Movement Leaders:** We take their books, frameworks, and decades of teaching and turn them into structured content systems, pathways, and AI grounded in their voice.

**For Organizations:** We build content systems, fundraising systems, governance systems, and AI capability in structured 4-week build environments.

**Core distinction:** Most platforms distribute content. Movemental builds systems that form people.

**This is not:** SaaS, a tool, a content platform, or a consulting firm.

---

## The Voice

Movemental voice is:
- **Grounded** — rooted in what actually exists and what actually happens
- **Clear** — immediately understandable on first read
- **Non-hype** — no breathless promises, no "revolutionary" anything
- **Non-corporate** — no "leverage synergies" or "empower stakeholders"
- **Non-poetic-for-the-sake-of-it** — beauty in precision, not in flourish

It should feel like: a sharp, thoughtful person explaining something real.

---

## What Must Be Eliminated

### 1. AI Slop Language
Kill on sight:
- "unlock your potential" / "empower your journey"
- "seamlessly integrate" / "next-generation platform"
- "reimagine what's possible" / "transform your experience"
- "cutting-edge" / "state-of-the-art" / "revolutionary"
- Any sentence that could appear on literally any SaaS homepage

### 2. Vague Abstractions
Replace with specifics:
- BAD: "powerful systems" → GOOD: what the system actually does
- BAD: "dynamic experiences" → GOOD: what the user actually encounters
- BAD: "holistic transformation" → GOOD: what specifically changes

### 3. Unnecessary Poetic Language
- BAD: "a living, breathing ecosystem of insight"
- GOOD: "a structured system of content, pathways, and courses"
- BAD: "where your ideas breathe" → GOOD: "where your content is organized and accessible"

### 4. Generic SaaS Language
- BAD: "our platform helps you..." → GOOD: "we build..."
- BAD: "users can easily..." → GOOD: "you end up with..."
- BAD: "leverage AI to..." → GOOD: "the AI does [specific thing]..."

### 5. Inflated Process Names
- BAD: "The Archival Extraction" → GOOD: "Content Analysis" or just describe what happens
- BAD: "The Threshold" → GOOD: "Deployment" or "Launch"
- BAD: "System Synthesis" → GOOD: "Build Phase"
- Fancy names are fine for branding IF they're immediately explained. Not fine as standalone labels that obscure meaning.

---

## The Rubric (Score Every Block)

Rate each copy block on these five dimensions (0–5):

### 1. CLARITY (0–5)
- 5: Immediately understandable. A smart person could explain it after one read.
- 3: Understandable after re-reading or thinking about it.
- 1: Confusing or ambiguous.
- 0: Meaningless word salad.

### 2. SPECIFICITY (0–5)
- 5: Describes real, concrete things — actions, outputs, features.
- 3: Mix of concrete and abstract.
- 1: Almost entirely abstract concepts.
- 0: Pure buzzwords.

### 3. TRUTHFULNESS (0–5)
- 5: Accurately reflects actual capabilities. No overstatement.
- 3: Mostly accurate with some stretching.
- 1: Significant overstatement or misleading framing.
- 0: Fabricated or delusional claims.

### 4. DIFFERENTIATION (0–5)
- 5: Could only describe Movemental. Impossible to confuse with another company.
- 3: Somewhat specific to Movemental but could apply to adjacent companies.
- 1: Could apply to almost any tech/SaaS company.
- 0: Literally interchangeable with any company's homepage.

### 5. TONE ALIGNMENT (0–5)
- 5: Sounds like a sharp, grounded person explaining something real.
- 3: Acceptable but drifts toward marketing speak or unnecessary flourish.
- 1: Reads like AI-generated content or corporate brochure.
- 0: Full AI slop.

**Passing standard:** ALL copy must score >= 4 in clarity, specificity, and differentiation.

---

## Step 2: Audit Every Copy Block

For each text section in the selected variant, provide:

### [Section Name]

**Original:**
> [exact original text]

**Diagnosis:**
- [what's wrong, what's vague, what's generic]

**Scores:**
| Dimension | Score | Note |
|-----------|-------|------|
| Clarity | X/5 | ... |
| Specificity | X/5 | ... |
| Truthfulness | X/5 | ... |
| Differentiation | X/5 | ... |
| Tone | X/5 | ... |

**Rewrite:**
> [improved version]

**What changed and why:**
- [specific explanation of each change]

---

## Step 3: Write the Final HTML

After all sections are audited and rewritten:

1. Edit the selected variant's `index.html` directly with the rewritten copy
2. Fix all cross-cutting issues in this file:
   - "Editorial Intelligence" → "Movemental"
   - "© 2024" → "© 2025"
   - Nav labels → plain, clear alternatives
   - "Access Portal" → "Log In" or "Get Started"
3. Fix any HTML bugs found during audit (duplicate tags, broken markup, etc.)

**Do not touch layout, styling, or design.** Only change text content.

---

## Step 4: Verify to 100%

Re-read the edited file top to bottom. For every text node, confirm:

- [ ] Scores >= 4 in clarity, specificity, and differentiation
- [ ] No sentence could appear on a generic SaaS homepage
- [ ] Every claim maps to something Movemental actually does
- [ ] Tone is consistent section to section
- [ ] A first-time reader would understand what Movemental is within 30 seconds
- [ ] CTAs are specific ("Start a Conversation" is fine; "Unlock Your Potential" is not)
- [ ] Brand name is "Movemental" everywhere
- [ ] Copyright year is current
- [ ] No orphaned jargon ("ecosystem", "leverage", "empower", "unlock")

If any block still fails, fix it. Repeat until every block passes.

**Then stop.** Report what was selected, what was changed, and the final scores. Do not move to other variants.

---

## Rules for Rewrites

1. Never introduce fluff. Every word must earn its place.
2. Prefer concrete over clever. "We build X" beats "We architect the future of X."
3. Prefer short over long. Cut any sentence that doesn't add information.
4. Prefer direct over impressive. "Your books become courses" beats "Your intellectual legacy is transmuted into formative experiences."
5. Name real things. Platforms, pathways, courses, AI — not "ecosystems" or "solutions."
6. Use "we build" language, not "we help you" language. Movemental does the building.
7. Dates should be current (2025/2026), not 2024.
8. Avoid "intelligence" as a standalone brand suffix unless it's clearly defined. "Movemental" is the brand, not "Editorial Intelligence."
