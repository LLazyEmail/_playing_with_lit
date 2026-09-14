import { describe, expect, it } from 'vitest';
import { ManifestGenerator } from './ManifestGenerator.js';

describe('ManifestGenerator', () => {
  it('lists template names only', () => {
    const manifest = new ManifestGenerator().generate(
      ['hackernoon', 'zurb'],
      new Date('2026-01-01T00:00:00.000Z')
    );
    expect(manifest.templates).toEqual([
      { name: 'hackernoon' },
      { name: 'zurb' },
    ]);
    expect(manifest.generatedAt).toBe('2026-01-01T00:00:00.000Z');
  });
});
