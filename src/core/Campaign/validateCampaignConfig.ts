import type { z } from 'zod';
import {
  campaignConfigSchema,
  type CampaignConfig,
} from './CampaignConfig.js';

/**
 * Validate a campaign config object against the base schema, then optionally
 * against a template-specific content schema.
 */
export function validateCampaignConfig<T>(
  data: unknown,
  contentSchema?: z.ZodType<T>
): CampaignConfig<T> {
  const base = campaignConfigSchema.parse(data);
  if (contentSchema && base.content !== undefined) {
    const validatedContent = contentSchema.parse(base.content);
    return { ...base, content: validatedContent };
  }
  return base as CampaignConfig<T>;
}
