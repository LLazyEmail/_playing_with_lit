import { CampaignConfigSchema } from './CampaignConfig.js';
import type { CampaignConfig } from './CampaignConfig.js';
import { readJsonFile } from './readJsonFile.js';

/**
 * Read and validate a campaign config from a JSON file.
 * This loads only the configuration (id, template, output, options).
 * Use loadCampaignData() to load the associated data (title, theme, content).
 */
export function loadCampaignConfig(jsonPath: string): CampaignConfig {
  const raw = readJsonFile<unknown>(jsonPath);
  return CampaignConfigSchema.parse(raw);
}
