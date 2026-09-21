import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { CampaignDataSchema } from './CampaignData.js';
import { loadCampaignData, loadCampaignDataForConfig } from './CampaignDataLoader.js';

const repoRoot = join(fileURLToPath(import.meta.url), '..', '..', '..', '..');

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

describe('loadCampaignData', () => {
  it('loads and validates campaigns/hackernoon/mysterium.data.json', () => {
    const data = loadCampaignData(
      join(repoRoot, 'campaigns', 'hackernoon', 'mysterium.data.json')
    );

    expect(data.title).toBe('Mysterium Network Issue');
    expect(data.theme?.primaryColor).toBe('#00bb00');
    expect(data.content?.title).toBe('Mysterium Network: Decentralized VPN');
    expect(data.content?.preheaderText).toBe(
      'Explore peer-to-peer privacy and decentralization.'
    );
    expect(data.content?.year).toBe(2021);
  });

  it('loads and validates campaigns/hackernoon/flat-file-7.data.json', () => {
    const data = loadCampaignData(
      join(repoRoot, 'campaigns', 'hackernoon', 'flat-file-7.data.json')
    );

    expect(data.title).toBe('Magic Behind Test Automation');
    expect(data.theme?.primaryColor).toBe('#00bb00');
    expect(data.content?.title).toBe('Magic Behind Test Automation');
    expect(data.content?.preheaderText).toContain('I test, therefore it works');
    expect(data.content?.year).toBe(2021);
  });

  it('loads and validates campaigns/zurb/announcement.data.json', () => {
    const data = loadCampaignData(
      join(repoRoot, 'campaigns', 'zurb', 'announcement.data.json')
    );

    expect(data.title).toBe('Foundation for Emails 2 is Here! 🐙');
    expect(data.theme?.primaryColor).toBe('#232547');
    expect(data.content?.title).toBe('Foundation for Emails 2 is Here! 🐙');
    expect(data.content?.heroHeading).toBe('Foundation for Emails 2');
    expect(data.content?.features).toHaveLength(3);
  });
});

describe('loadCampaignDataForConfig', () => {
  it('loads data file by convention from config path', () => {
    const data = loadCampaignDataForConfig(
      join(repoRoot, 'campaigns', 'hackernoon', 'mysterium.json')
    );

    expect(data.title).toBe('Mysterium Network Issue');
    expect(data.theme?.primaryColor).toBe('#00bb00');
    expect(data.content?.title).toBe('Mysterium Network: Decentralized VPN');
  });

  it('loads data file for flat-file-7 config', () => {
    const data = loadCampaignDataForConfig(
      join(repoRoot, 'campaigns', 'hackernoon', 'flat-file-7.json')
    );

    expect(data.title).toBe('Magic Behind Test Automation');
    expect(data.content?.title).toBe('Magic Behind Test Automation');
  });

  it('loads data file for zurb announcement config', () => {
    const data = loadCampaignDataForConfig(
      join(repoRoot, 'campaigns', 'zurb', 'announcement.json')
    );

    expect(data.title).toBe('Foundation for Emails 2 is Here! 🐙');
    expect(data.content?.heroHeading).toBe('Foundation for Emails 2');
  });
});
