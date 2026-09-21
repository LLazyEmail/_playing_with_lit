import { readJson } from 'markup-generator';
import { CampaignDataSchema } from './CampaignData.js';
import type { CampaignData } from './CampaignData.js';

/**
 * Read and validate campaign data from a JSON file.
 */
export function loadCampaignData(jsonPath: string): CampaignData {
  const raw = readJson<unknown>(jsonPath);
  return CampaignDataSchema.parse(raw);
}
