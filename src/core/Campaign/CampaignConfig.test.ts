import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { CampaignConfigSchema } from './CampaignConfig.js';
import { CampaignDataSchema } from './CampaignData.js';
import { loadCampaignConfig } from './CampaignLoader.js';

const repoRoot = join(fileURLToPath(import.meta.url), '..', '..', '..', '..');

describe('CampaignConfigSchema', () => {
  it('accepts a valid config with all fields', () => {
    const result = CampaignConfigSchema.parse({
      id: 'hackernoon-default',
      template: 'hackernoon',
      output: 'hackernoon-email.html',
      options: { minify: false },
    });

    expect(result.id).toBe('hackernoon-default');
    expect(result.template).toBe('hackernoon');
    expect(result.output).toBe('hackernoon-email.html');
    expect(result.options?.minify).toBe(false);
  });

  it('accepts a config without options (options is optional)', () => {
    const result = CampaignConfigSchema.parse({
      id: 'nomoretogo-default',
      template: 'nomoretogo',
      output: 'nomoretogo-email.html',
    });

    expect(result.options).toBeUndefined();
  });

  it('strips unknown fields (Zod default behaviour)', () => {
    const result = CampaignConfigSchema.parse({
      id: 'test',
      template: 'hackernoon',
      output: 'out.html',
      bogusField: 'should be stripped',
    });
    expect((result as Record<string, unknown>)['bogusField']).toBeUndefined();
  });

  it('throws when id is missing', () => {
    expect(() =>
      CampaignConfigSchema.parse({
        template: 'hackernoon',
        output: 'out.html',
      })
    ).toThrow();
  });

  it('throws when id is an empty string', () => {
    expect(() =>
      CampaignConfigSchema.parse({
        id: '',
        template: 'hackernoon',
        output: 'out.html',
      })
    ).toThrow();
  });

  it('throws when template is missing', () => {
    expect(() =>
      CampaignConfigSchema.parse({
        id: 'x',
        output: 'out.html',
      })
    ).toThrow();
  });

  it('throws when output is missing', () => {
    expect(() =>
      CampaignConfigSchema.parse({
        id: 'x',
        template: 'hackernoon',
      })
    ).toThrow();
  });

  it('throws when options.minify is not a boolean', () => {
    expect(() =>
      CampaignConfigSchema.parse({
        id: 'x',
        template: 'hackernoon',
        output: 'out.html',
        options: { minify: 'yes' },
      })
    ).toThrow();
  });
});

describe('CampaignDataSchema', () => {
  it('accepts a valid data with all fields', () => {
    const result = CampaignDataSchema.parse({
      title: 'Test Campaign',
      theme: { primaryColor: '#00bb00' },
      content: { title: 'Content Title', year: 2021 },
    });

    expect(result.title).toBe('Test Campaign');
    expect(result.theme?.primaryColor).toBe('#00bb00');
    expect(result.content?.title).toBe('Content Title');
  });

  it('accepts data with only title', () => {
    const result = CampaignDataSchema.parse({
      title: 'Test Campaign',
    });

    expect(result.title).toBe('Test Campaign');
    expect(result.theme).toBeUndefined();
    expect(result.content).toBeUndefined();
  });

  it('throws when theme.primaryColor is not a hex color', () => {
    expect(() =>
      CampaignDataSchema.parse({
        title: 'Test',
        theme: { primaryColor: 'green' },
      })
    ).toThrow(/hex color/i);
  });

  it('accepts arbitrary content fields (validated per-template)', () => {
    const result = CampaignDataSchema.parse({
      content: { title: 't', preheaderText: 'p', year: 2021, customField: 'value' },
    });
    expect(result.content).toEqual({
      title: 't',
      preheaderText: 'p',
      year: 2021,
      customField: 'value',
    });
  });
});

describe('loadCampaignConfig', () => {
  it('loads and validates campaigns/hackernoon/default.json', () => {
    const config = loadCampaignConfig(
      join(repoRoot, 'campaigns', 'hackernoon', 'default.json')
    );
    expect(config.id).toBe('hackernoon-default');
    expect(config.template).toBe('hackernoon');
    expect(config.output).toBe('hackernoon-email.html');
  });

  it('loads and validates campaigns/hackernoon/mysterium.json (config only)', () => {
    const config = loadCampaignConfig(
      join(repoRoot, 'campaigns', 'hackernoon', 'mysterium.json')
    );

    expect(config.id).toBe('hackernoon-mysterium');
    expect(config.template).toBe('hackernoon');
    expect(config.output).toBe('hackernoon-mysterium.html');
    expect(config.options?.minify).toBe(false);
  });

  it('loads and validates campaigns/nomoretogo/default.json', () => {
    const config = loadCampaignConfig(
      join(repoRoot, 'campaigns', 'nomoretogo', 'default.json')
    );
    expect(config.id).toBe('nomoretogo-default');
    expect(config.template).toBe('nomoretogo');
  });

  it('throws a ZodError with a field-level message for an invalid JSON file', () => {
    expect(() =>
      CampaignConfigSchema.parse({ id: '', template: 'x', output: 'x.html' })
    ).toThrow(/empty/i);
  });
});
