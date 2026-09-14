import { describe, expect, it } from 'vitest';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { BuildPipeline } from './build-pipeline.js';
import { SilentLogger } from './logger.js';
import { templateRegistry } from './template-registry.js';

describe('BuildPipeline', () => {
  it('returns errors for an unknown template name', async () => {
    const pipeline = new BuildPipeline(templateRegistry, new SilentLogger(), async () =>
      '/dev/null'
    );
    const result = await pipeline.run({
      templateName: 'mysterium',
      data: hackernoonData,
    });
    expect(result.success).toBe(false);
    expect(result.errors?.[0]).toMatch(/Unknown template/);
  });

  it('returns errors when schema validation fails', async () => {
    const pipeline = new BuildPipeline(templateRegistry, new SilentLogger(), async () =>
      '/dev/null'
    );
    const result = await pipeline.run({
      templateName: 'hackernoon',
      data: { title: '' },
    });
    expect(result.success).toBe(false);
    expect(result.errors?.[0]).toMatch(/Invalid Hacker Noon|Schema validation/);
  });

  it('renders a known template and writes via the injected writer', async () => {
    const pipeline = new BuildPipeline(
      templateRegistry,
      new SilentLogger(),
      async ({ fileName, dir }) => `${dir}/${fileName}`
    );
    const result = await pipeline.run({
      templateName: 'hackernoon',
      data: hackernoonData,
      fileName: 'hackernoon-email.html',
    });
    expect(result.success).toBe(true);
    expect(result.outputPath).toBe('generated/hackernoon-email.html');
  });
});
