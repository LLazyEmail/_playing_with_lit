import { z } from 'zod';

const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'primaryColor must be a hex color');

export interface Theme {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  fontFamily?: string;
  bannerUrl?: string;
}

export interface CampaignConfig<TContent = unknown> {
  id: string;
  template: string;
  title?: string;
  output?: string;
  theme?: Theme;
  content?: TContent;
}

export const themeSchema = z.object({
  primaryColor: hexColor.optional(),
  secondaryColor: hexColor.optional(),
  backgroundColor: hexColor.optional(),
  fontFamily: z.string().optional(),
  bannerUrl: z.string().optional(),
});

export const campaignConfigSchema = z.object({
  id: z.string().min(1, 'id must not be empty'),
  template: z.string().min(1, 'template must not be empty'),
  title: z.string().optional(),
  output: z.string().optional(),
  theme: themeSchema.optional(),
  content: z.unknown().optional(),
});

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
