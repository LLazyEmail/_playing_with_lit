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

/** Template payload. Shape is template-specific; Hacker Noon uses these three. */
export const CampaignContentSchema = z
  .object({
    title: z.string().optional(),
    preheaderText: z.string().optional(),
    year: z.number().int().optional(),
  })
  .passthrough();

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
export type CampaignConfig<T = unknown> = z.infer<typeof CampaignConfigSchema> & {
  content?: T;
};

export { validateCampaignConfig } from './validateCampaignConfig.js';
