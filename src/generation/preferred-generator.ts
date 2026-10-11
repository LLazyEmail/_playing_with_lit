/**
 * Preferred generation path.
 *
 * Builds a catalog for `@llazyemail/generate-template`'s createGenerator from
 * the existing templateRegistry. Each entry's render calls the registered
 * Lit renderer (which already goes through the local Lit-to-string adapter).
 *
 * Validation stays with the existing Zod validators for now. This reduces
 * the local BuildPipeline surface without forcing a full rewrite.
 */

import { createGenerator } from '@llazyemail/generate-template';
import type { TemplateCatalogEntry } from '@llazyemail/generate-template';
import { templateRegistry } from '../rendering/template-registry.js';
import { finalizeHtml } from '../pipeline/index.js';

export function createLitGenerator(
  catalog?: TemplateCatalogEntry[],
  samplePayloads?: Record<string, unknown>
) {
  return createGenerator({
    catalog: catalog ?? buildCatalogFromRegistry(),
    samplePayloads,
  });
}

export function buildCatalogFromRegistry(): TemplateCatalogEntry[] {
  return templateRegistry.list().map((name) => {
    const entry = templateRegistry.get(name);
    return {
      ids: [name],
      render: async (payload: unknown) => {
        const parsed = entry.validator.parse(payload);
        const html = entry.renderer.render(parsed);
        return finalizeHtml(html);
      },
    };
  });
}

/**
 * Pilot helper: run one registered template through createGenerator.
 * Callers can migrate from runCampaign one script at a time.
 */
export async function runViaGenerator(options: {
  templateId: string;
  payload: unknown;
  outDir?: string;
  fileName?: string;
}): Promise<string> {
  const generate = createLitGenerator();
  const result = await generate.run({
    templateId: options.templateId,
    payload: options.payload,
    write: {
      out: options.outDir ?? 'generated',
    },
  });
  return result.html;
}
