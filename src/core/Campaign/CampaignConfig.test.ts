import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {
  validateCampaignConfig,
  campaignConfigSchema,
  themeSchema,
} from './CampaignConfig.js';
import { hackernoonEmailDataSchema } from '../../validation/schemas.js';

describe('CampaignConfig', () => {
  it('validates a complete campaign config with theme and content schema', () => {
    const raw = {
      id: 'hn-automation-2021',
      template: 'hackernoon',
      title: 'Magic Behind Test Automation',
      theme: {
        primaryColor: '#00ff00',
        fontFamily: 'Courier New, monospace',
      },
      content: {
        headline: 'Automating the web',
        issueNumber: 42,
      },
    };

    const contentSchema = z.object({
      headline: z.string(),
      issueNumber: z.number(),
    });

    const config = validateCampaignConfig(raw, contentSchema);
    expect(config.id).toBe('hn-automation-2021');
    expect(config.template).toBe('hackernoon');
    expect(config.content.headline).toBe('Automating the web');
  });

  it('validates a minimal config without theme', () => {
    const raw = {
      id: 'minimal-1',
      template: 'newsletter',
      content: 'simple string body',
    };
    const config = validateCampaignConfig(raw);
    expect(config.id).toBe('minimal-1');
    expect(config.template).toBe('newsletter');
    expect(config.theme).toBeUndefined();
    expect(config.content).toBe('simple string body');
  });

  it('rejects missing or empty id and template', () => {
    expect(() =>
      campaignConfigSchema.parse({
        id: '',
        template: 'hackernoon',
        content: {},
      })
    ).toThrow(/must not be empty/);

    expect(() =>
      campaignConfigSchema.parse({
        id: 'valid-id',
        template: '',
        content: {},
      })
    ).toThrow(/must not be empty/);
  });

  it('validates theme tokens schema', () => {
    const validTheme = {
      primaryColor: '#232547',
      secondaryColor: '#ffffff',
      bannerUrl: 'https://example.com/banner.jpg',
    };

    const parsed = themeSchema.parse(validTheme);
    expect(parsed.primaryColor).toBe('#232547');
  });

  describe('campaign JSON files', () => {
    it('validates campaigns/hackernoon/flat-file-7.json against Hackernoon schema', () => {
      const filePath = path.resolve(
        process.cwd(),
        'campaigns/hackernoon/flat-file-7.json'
      );
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const config = validateCampaignConfig(raw, hackernoonEmailDataSchema);

      expect(config.id).toBe('flat-file-7');
      expect(config.template).toBe('hackernoon');
      expect(config.content?.title).toBe('Magic Behind Test Automation');
    });

    it('validates campaigns/hackernoon/mysterium.json against Hackernoon schema', () => {
      const filePath = path.resolve(
        process.cwd(),
        'campaigns/hackernoon/mysterium.json'
      );
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const config = validateCampaignConfig(raw, hackernoonEmailDataSchema);

      expect(config.id).toBe('hackernoon-mysterium');
      expect(config.template).toBe('hackernoon');
      expect(config.content?.title).toBe(
        'Mysterium Network: Decentralized VPN'
      );
    });
  });
});
