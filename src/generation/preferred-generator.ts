/**
 * Preferred generation path.
 *
 * Replaces the local BuildPipeline + manual write pattern with
 * `@llazyemail/generate-template`'s createGenerator.
 *
 * Each catalog entry's `render` calls an existing Lit renderer (after the
 * local Lit-to-string adapter). Payload and write handling come from the
 * package.
 *
 * This file is the starting point for removing duplicated generation logic.
 * Existing scripts can migrate to it incrementally.
 */

import { createGenerator } from '@llazyemail/generate-template';
import type { TemplateCatalogEntry } from '@llazyemail/generate-template';

// Example shape — wire real renderers from src/templates/* and the registry
// as the migration proceeds.
export function createLitGenerator(
  catalog: TemplateCatalogEntry[],
  samplePayloads?: Record<string, unknown>
) {
  return createGenerator({
    catalog,
    samplePayloads,
  });
}

// Usage sketch (not wired into npm scripts yet):
// const generate = createLitGenerator([
//   {
//     ids: ['hackernoon'],
//     render: async (payload) => {
//       // call existing hackernoon renderer + renderEmailBody
//       return '<html>...</html>';
//     },
//   },
// ]);
// await generate.run({ templateId: 'hackernoon', payload: sampleData });
