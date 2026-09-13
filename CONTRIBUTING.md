# Contributing to _playing_with_lit

This document captures the design rules and patterns that guide development in this repository.

## Design Principles

We follow six core design rules to keep the codebase maintainable and scalable as templates grow:

### 1. One section = one file

Keep each section file under ~200 lines to maintain readability.

- Each section (header, footer, body, etc.) lives in its own `.section.ts` file.
- When a section grows beyond 200 lines, consider breaking it into smaller sub-sections.
- Example: `src/templates/hackernoon/sections/logo.section.ts`

### 2. `index.ts` is a composer only

The main template file at `src/templates/{template}/index.ts` **must only compose and assemble sections**.

- No raw HTML markup should live in the composer.
- Import section functions and call them in order.
- The composer's only job is to wire sections together.
- Example: `src/templates/hackernoon/index.ts` imports and calls `logoSection()`, `headerSection()`, etc.

### 3. Promote reusable parts to `shared/blocks/`

When the same component (CTA buttons, social rows, date headers) appears in multiple templates:

- Extract it to `src/templates/shared/blocks/{component}.ts`.
- Import and reuse it across templates.
- Document the component's props and expected data shape in its module.
- This reduces duplication and makes updates easier.

### 4. Separate content model from rendering

Type definitions and data contracts live in `types.ts`; rendering logic lives in sections.

- Each template folder has a `types.ts` that exports the data model for that template.
- Example: `src/templates/hackernoon/types.ts` exports `HackernoonEmailData`.
- Sections receive typed data and focus only on rendering.
- This enforces compile-time safety and makes contracts explicit.

### 5. No magic constants in section files

All URLs, spacing values, brand colors, and other constants go in `constants.ts`.

- Each template folder has a `constants.ts` for template-specific constants.
- Example: `src/templates/hackernoon/constants.ts` holds logo URLs, sponsor links, etc.
- This makes constants easily discoverable and maintainable.
- Encourages reuse and prevents hard-coded values scattered throughout sections.

### 6. Test per section and snapshot the full template

Testing strategy:

- Write unit tests for individual section functions (especially data transformations).
- Maintain at least one snapshot test of the assembled output to catch regressions.
- Snapshot tests verify that the full email template renders without unexpected changes.
- Run tests before submitting PRs to ensure sections work in isolation and together.

## Code Style

We use **ESLint** and **Prettier** to enforce consistent formatting.

### Running linters

```bash
# Check code for style and logical issues
npm run lint

# Fix issues automatically
npm run lint -- --fix

# Format code with Prettier
npm run format

# Check formatting without making changes
npm run format:check
```

## Folder Structure

```
src/
  templates/
    {template-name}/              # One folder per template
      index.ts                    # Composer – imports and assembles sections
      types.ts                    # Data model for the template
      constants.ts                # URLs, IDs, brand constants
      sections/
        {section}.section.ts      # Individual section (keep <200 lines)
        {section}/                # Subcomponents for a section if needed
          {component}.ts
    shared/
      blocks/
        {component}.ts            # Reusable components across templates
renderer.ts                       # Rendering pipeline (DOM shim, SSR, marker stripping)
index.ts                          # Entry point
types.ts                          # Global type definitions
```

---

## Reference Files

The original HTML email templates are stored in the `reference/` directory:

- `reference/hackernoon.html` — Golden source for Hacker Noon template
- `reference/nomoretogo.html` — Golden source for No More To-Go template
- `reference/mailchimp.html` — Golden source for Mailchimp-style template

These serve as:

- Visual and structural reference during development.
- Regression detection — compare rendered output against the original.
- Documentation — show what the final email should look like.

They are not the primary source of truth for the component code; rather, they document the expected visual output.

## Before You Submit a PR

- Run linters: `npm run lint -- --fix`
- Format code: `npm run format`
- Run tests: `npm test` (once tests are set up)
- Build: `npm run build`
- Render templates: `npm run render` to verify output is correct
- Update the README if you've changed the project structure or added new templates

## Questions?

Refer to the README for detailed walkthroughs of how the rendering pipeline works and how to add new templates.
