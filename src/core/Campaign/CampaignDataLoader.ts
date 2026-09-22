import { CampaignDataSchema } from './CampaignData.js';
import type { CampaignData } from './CampaignData.js';
import { readJsonFile } from './readJsonFile.js';

/**
 * Read and validate campaign data from a JSON file.
 * This loads the data (title, theme, content) separate from configuration.
 */
export function loadCampaignData(jsonPath: string): CampaignData {
  const raw = readJsonFile<unknown>(jsonPath);
  return CampaignDataSchema.parse(raw);
}

/**
 * Load campaign data by convention from a .data.json file next to the config.
 * Given a config path like 'campaigns/hackernoon/mysterium.json',
 * this will load 'campaigns/hackernoon/mysterium.data.json'.
 */
export function loadCampaignDataForConfig(configPath: string): CampaignData {
  const dataPath = configPath.replace('.json', '.data.json');
  return loadCampaignData(dataPath);
}
