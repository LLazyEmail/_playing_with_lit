// Single source of truth for campaign configuration
import { z } from 'zod';

/** Optional rendering flags that can be set per campaign. */
export const CampaignOptionsSchema = z.object({
  minify: z.boolean().optional(),
  inlineCss: z.boolean().optional(),
});

export const CampaignConfigSchema = z.object({
  id: z.string().min(1, '`id` must not be empty'),
  template: z.string().min(1, '`template` must not be empty'),
  output: z.string().min(1, '`output` must not be empty'),
  options: CampaignOptionsSchema.optional(),
});

// TypeScript types derived from schemas
export type CampaignOptions = z.infer<typeof CampaignOptionsSchema>;
export type CampaignConfig = z.infer<typeof CampaignConfigSchema>;

// Generic base content type - can be extended with template-specific fields
export type BaseCampaignContent = Record<string, unknown>;

export { validateCampaignConfig } from './validateCampaignConfig.js';
