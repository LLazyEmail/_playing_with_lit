import { z } from 'zod';

/** Optional rendering flags that can be set per campaign. */
export const CampaignOptionsSchema = z.object({
  minify: z.boolean().optional(),
  inlineCss: z.boolean().optional(),
});

const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'primaryColor must be a hex color');

export const CampaignThemeSchema = z.object({
  primaryColor: hexColor.optional(),
  secondaryColor: hexColor.optional(),
  backgroundColor: hexColor.optional(),
  fontFamily: z.string().optional(),
  bannerUrl: z.string().optional(),
});

/** Template payload. Shape is template-specific and validated per-template. */
export const CampaignContentSchema = z.object({}).passthrough();

export const CampaignConfigSchema = z.object({
  id: z.string().min(1, '`id` must not be empty'),
  template: z.string().min(1, '`template` must not be empty'),
  title: z.string().optional(),
  output: z.string().min(1, '`output` must not be empty'),
  theme: CampaignThemeSchema.optional(),
  content: CampaignContentSchema.optional(),
  options: CampaignOptionsSchema.optional(),
});

// TypeScript types derived from schemas
export type CampaignOptions = z.infer<typeof CampaignOptionsSchema>;
export type CampaignTheme = z.infer<typeof CampaignThemeSchema>;
export type CampaignContent = z.infer<typeof CampaignContentSchema>;

// Generic base content type - can be extended with template-specific fields
export type BaseCampaignContent = Record<string, unknown>;

// Generic campaign config that extends base content with template-specific fields
export type CampaignConfig<T = BaseCampaignContent> = Omit<
  z.infer<typeof CampaignConfigSchema>,
  'content'
> & {
  content?: T;
};

export { validateCampaignConfig } from './validateCampaignConfig.js';
