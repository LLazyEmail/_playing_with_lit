import type { z } from 'zod';
import {
  CampaignConfigSchema,
  type CampaignConfig,
} from './CampaignConfig.js';
import {
  CampaignDataSchema,
  type CampaignData,
} from './CampaignData.js';

/**
 * Validate a campaign config object against the schema.
 */
export function validateCampaignConfig(data: unknown): CampaignConfig {
  return CampaignConfigSchema.parse(data);
}

/**
 * Validate campaign data against the base schema, then optionally
 * against a template-specific content schema.
 */
export function validateCampaignData<T>(
  data: unknown,
  contentSchema?: z.ZodType<T>
): CampaignData {
  const base = CampaignDataSchema.parse(data);
  if (contentSchema && base.content !== undefined) {
    const validatedContent = contentSchema.parse(base.content);
    return { ...base, content: validatedContent as any };
  }
  return base;
}
