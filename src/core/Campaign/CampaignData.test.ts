import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { loadCampaignData } from './CampaignDataLoader.js';

const repoRoot = join(fileURLToPath(import.meta.url), '..', '..', '..', '..');

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
