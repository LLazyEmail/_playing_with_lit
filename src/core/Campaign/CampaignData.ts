import { z } from 'zod';

// Re-export base content type from CampaignConfig for consistency
export { BaseCampaignContent } from './CampaignConfig.js';

const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'must be a hex color');

export const CampaignThemeSchema = z.object({
  primaryColor: hexColor.optional(),
  secondaryColor: hexColor.optional(),
  backgroundColor: hexColor.optional(),
  fontFamily: z.string().optional(),
  bannerUrl: z.string().optional(),
});

/** Template payload. Shape is template-specific and validated per-template. */
export const CampaignContentSchema = z.object({}).passthrough();

/** Campaign data: title, theme, and content - separate from configuration */
export const CampaignDataSchema = z.object({
  title: z.string().optional(),
  theme: CampaignThemeSchema.optional(),
  content: CampaignContentSchema.optional(),
});

// TypeScript types derived from schemas
export type CampaignTheme = z.infer<typeof CampaignThemeSchema>;
export type CampaignContent = z.infer<typeof CampaignContentSchema>;
export type CampaignData = z.infer<typeof CampaignDataSchema>;

// Generic campaign data with template-specific content
export type CampaignDataWithContent<T = BaseCampaignContent> = Omit<
  CampaignData,
  'content'
> & {
  content?: T;
};
