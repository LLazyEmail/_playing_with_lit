import { z } from 'zod';

/**
 * Visual styling tokens and brand assets for a campaign.
 */
export interface Theme {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  fontFamily?: string;
  bannerUrl?: string;
}

/**
 * High-level configuration contract for an email campaign.
 * Encapsulates campaign metadata, theme overrides, and template-specific content.
 */
export interface CampaignConfig<TContent = unknown> {
  id: string;
  template: string;
  title?: string;
  theme?: Theme;
  content: TContent;
}

export const themeSchema = z.object({
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
  backgroundColor: z.string().optional(),
  fontFamily: z.string().optional(),
  bannerUrl: z.string().optional(),
});

export const campaignConfigSchema = z.object({
  id: z.string().min(1, 'id must not be empty'),
  template: z.string().min(1, 'template must not be empty'),
  title: z.string().optional(),
  theme: themeSchema.optional(),
  content: z.unknown(),
});

/**
 * Validates a campaign configuration object against the base schema and optional content schema.
 */
export function validateCampaignConfig<T>(
  data: unknown,
  contentSchema?: z.ZodType<T>
): CampaignConfig<T> {
  const base = campaignConfigSchema.parse(data);
  if (contentSchema) {
    const validatedContent = contentSchema.parse(base.content);
    return { ...base, content: validatedContent };
  }
  return base as CampaignConfig<T>;
}
