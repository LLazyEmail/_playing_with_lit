import { readJson } from 'markup-generator';
import { CampaignConfigSchema } from './CampaignConfig.js';
import type { CampaignConfig } from './CampaignConfig.js';

/**
 * Read and validate a campaign config from a JSON file.
 */
export function loadCampaignConfig(jsonPath: string): CampaignConfig {
  const raw = readJson<unknown>(jsonPath);
  return CampaignConfigSchema.parse(raw);
}
