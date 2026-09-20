import { readJson } from 'markup-generator';
import { CampaignConfigSchema } from './campaign-config.js';
import type { CampaignConfig } from './campaign-config.js';

/**
 * Read and validate a campaign config from a JSON file.
 *
 * File I/O goes through `markup-generator`'s `readJson` (typed JSON_READ /
 * JSON_PARSE errors). Schema failures still throw ZodError with field paths.
 *
 * @example
 * ```ts
 * const config = loadCampaignConfig('campaigns/hackernoon/default.json');
 * ```
 */
export function loadCampaignConfig(jsonPath: string): CampaignConfig {
  const raw = readJson<unknown>(jsonPath);
  return CampaignConfigSchema.parse(raw);
}
