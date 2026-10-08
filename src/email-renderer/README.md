# Email Renderer

Isolated rendering module containing the current Lit SSR implementation and the `Renderer` contract.

## Purpose

This directory exists so the render functionality can be replaced with an external module later without touching the rest of the project.

## Current contents

- `renderer.ts` — abstract `Renderer<T>` contract
- `render-email-document.ts` — Lit `@lit-labs/ssr` helpers (`renderEmailBody`, `renderEmailDocument`, `stripLitMarkers`)
- `index.ts` — public barrel

## How to replace later

1. Publish or consume the external renderer package.
2. Update the re-export files in `src/rendering/renderer.ts` and `src/rendering/render-email-document.ts` to import from the external package instead of `../email-renderer/`.
3. (Optional) Remove or archive this directory once the switch is complete.

Existing imports across the codebase (`../../rendering/renderer.js`, `../../rendering/render-email-document.js`, etc.) will continue to work unchanged.
