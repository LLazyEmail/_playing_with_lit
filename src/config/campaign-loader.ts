import { readFileSync } from 'node:fs';
import { CampaignConfigSchema } from './campaign-config.js';
import type { CampaignConfig } from './campaign-config.js';

/**
 * Read and validate a campaign config from a JSON file.
 *
 * Throws a ZodError with field-level messages if the file is invalid,
 * giving developers immediate, actionable feedback in CI logs.
 *
 * @example
 * ```ts
 * const config = loadCampaignConfig('campaigns/hackernoon/default.json');
 * // config.id, config.template, config.output are all typed & validated
 * ```
 */
export function loadCampaignConfig(jsonPath: string): CampaignConfig {
  const raw: unknown = JSON.parse(readFileSync(jsonPath, 'utf-8'));
  return CampaignConfigSchema.parse(raw);
}
