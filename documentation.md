# Architecture & SDK Documentation

## 1. Project Overview

`_playing_with_lit` provides a server-side rendering SDK and build pipeline for HTML email templates using Lit tagged templates (`html`) and `@lit-labs/ssr`. It eliminates client hydration and browser dependencies, producing production-ready email markup compatible across major email clients (Gmail, Outlook, Apple Mail).

### Key Goals

- **Modular Composition**: Assemble email templates out of focused, testable section components.
- **Strict Typed Contracts**: Enforce compile-time interfaces and runtime Zod validation for campaign data.
- **Client Compatibility**: Safe HTML generation with table-based layouts, optional CSS inlining/minification, and Outlook polyfill support.
- **Clean Separation of Concerns**: Clear boundaries between core engine abstractions, shared components, template composers, campaign configs, sandbox experiments, and reference sources.

---

## 2. Rendering & Build Pipeline

1. **Ingestion & Validation**: Incoming campaign data is validated against the template's schema via `Validator<T>` / `validateCampaignConfig`.
2. **Template Composition**: The template engine composer (`compose(data)`) evaluates section functions and returns a Lit `TemplateResult`.
3. **SSR Compilation**: Lit's SSR renderer converts the template tree into raw HTML strings.
4. **Hydration Comment Stripping**: `stripLitMarkers()` removes Lit hydration comments (`<!--lit-part-->`, etc.) to prevent email client rendering artifacts.
5. **Document Shell Wrapping**: The document chrome (`<!DOCTYPE html>`, `<head>`, `<style>`, `<title>`) is merged outside the Lit parser.
6. **Pipeline Post-Processing & Output**: Optional HTML minification (`minifyHtml`) and file emission to `dist/` or `generated/` via `BuildPipeline`.

---

## 3. Core Typed Abstractions (`src/core/`)

| Abstraction | Purpose | Definition / Export |
|---|---|---|
| `TemplateEngine<T>` | Abstract composer turning typed campaign data into a Lit `TemplateResult` | `src/core/TemplateEngine/TemplateEngine.ts` |
| `CampaignConfig<T>` | Typed configuration contract encapsulating campaign metadata, theme overrides, and content payload | `src/core/Campaign/CampaignConfig.ts` |
| `Theme` | Visual design tokens (colors, font family, banner assets) for campaigns | `src/core/Campaign/CampaignConfig.ts` |
| `Renderer<T>` | Base class wrapping template composition, document decoration, and SSR output | `src/rendering/renderer.ts` |
| `Validator<T>` | Schema validation contract wrapping Zod schemas for runtime payload safety | `src/core/Validator/Validator.ts` |
| `Compiler` | Compiles Lit template fragments into HTML body strings | `src/core/Compiler/Compiler.ts` |
| `ManifestGenerator` | Emits JSON manifests summarizing registered templates and build metadata | `src/core/ManifestGenerator/ManifestGenerator.ts` |
| `BuildPipeline` | Orchestrates template rendering, logging, validation, and file output | `src/core/BuildPipeline/BuildPipeline.ts` |

---

## 4. Directory Architecture

```
_playing_with_lit/
├── campaigns/                    # Campaign JSON configurations adhering to CampaignConfig
│   ├── hackernoon/
│   └── zurb/
├── reference/                    # Sources of truth (original, unmodified email markup)
│   ├── hackernoon/
│   ├── nomoretogo.html
│   ├── email-template-mailchimp.html
│   └── zurb.html
├── sandbox/                      # Exploratory markup and raw HTML prototypes
│   ├── eyes.html
│   └── google.html
└── src/
    ├── core/                     # Reusable typed abstractions (Engine, Compiler, Validator, Pipeline)
    │   ├── BuildPipeline/
    │   ├── Campaign/
    │   ├── Compiler/
    │   ├── ManifestGenerator/
    │   ├── TemplateEngine/
    │   └── Validator/
    ├── errors/                   # Structured domain errors and error codes
    ├── logging/                  # Debug logging and diagnostic utilities
    ├── pipeline/                 # Post-processing utilities (e.g. HTML minification)
    ├── rendering/                # SSR execution, document wrapper, and template registry
    ├── scripts/                  # Standalone render scripts and sample content
    ├── templates/                # Production email templates
    │   ├── hackernoon/
    │   ├── mailchimp/
    │   ├── nomoretogo/
    │   ├── zurb/
    │   └── shared/blocks/        # Reusable design system UI components (footer, logo, CTA)
    └── validation/               # Zod schemas and runtime validators
```

### Template Layout Rules

Each template lives in `src/templates/<name>/`:
- `index.ts`: Composer function only. Assembles sections in visual order.
- `types.ts`: Re-exports template data contract from `src/types.ts`.
- `constants.ts`: Shared URLs, colors, and layout constants.
- `sections/*.section.ts`: Individual section rendering functions (one section per file).

---

## 5. Scaling & Authoring

- **Adding a New Campaign**: Place a validated JSON file in `campaigns/<template>/<campaign-name>.json` matching the `CampaignConfig` schema.
- **Template Reusability**: Reusable UI blocks live in `src/templates/shared/blocks/` and can be imported across templates.
- **Safety First**: Run `npm run build` and `npm test` after modifying templates or schemas to ensure contract compliance.

---

## 6. Related Documentation

- [AGENTS.md](file:///c:/Users/Laptop/Documents/GitHub/_playing_with_lit/AGENTS.md) — Coding agent rules: where to edit, what is already shipped, and what to leave alone.
- [`.grok/`](file:///c:/Users/Laptop/Documents/GitHub/_playing_with_lit/.grok) — Grok-only session rules and pre-approved verify commands.
- [PLATFORM.md](file:///c:/Users/Laptop/Documents/GitHub/_playing_with_lit/PLATFORM.md) — Technical platform guidelines and client quirks.
- [CONTRIBUTING.md](file:///c:/Users/Laptop/Documents/GitHub/_playing_with_lit/CONTRIBUTING.md) — Contribution workflows and style guide.
- [docs/zurb-zones.md](file:///c:/Users/Laptop/Documents/GitHub/_playing_with_lit/docs/zurb-zones.md) — Layout zone mapping for Foundation/Zurb email template.
