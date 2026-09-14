export interface TemplateManifestEntry {
  name: string;
}

export interface TemplateManifest {
  generatedAt: string;
  templates: TemplateManifestEntry[];
}

/**
 * Builds a name-only manifest of registered templates.
 * Does not inspect markup or write HTML.
 */
export class ManifestGenerator {
  generate(names: string[], now = new Date()): TemplateManifest {
    return {
      generatedAt: now.toISOString(),
      templates: names.map((name) => ({ name })),
    };
  }
}
