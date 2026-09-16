import { z } from 'zod';

/**
 * Optional rendering flags that can be set per campaign.
 * All fields are optional — defaults are handled by the pipeline.
 */
export const CampaignOptionsSchema = z.object({
  /** Run html-minifier after rendering. Defaults to the MINIFY env flag when absent. */
  minify: z.boolean().optional(),
  /** Inline CSS via juice before writing. Reserved for future pipeline integration. */
  inlineCss: z.boolean().optional(),
});

/**
 * Top-level campaign configuration schema.
 *
 * A campaign config describes *how* a template run is wired up:
 * - which template to invoke (must match a key in the PipelineRegistry)
 * - where to write the rendered output
 * - any optional rendering flags
 *
 * It deliberately does NOT carry template *data* — that is supplied separately
 * by the caller or loaded from a corresponding data file.
 */
export const CampaignConfigSchema = z.object({
  /** Unique, URL-safe slug. Used for logging and referencing configs. */
  id: z.string().min(1, '`id` must not be empty'),

  /**
   * Template identifier — must match a registered key in the BuildPipeline
   * registry (e.g. "hackernoon", "nomoretogo", "mailchimp").
   */
  template: z.string().min(1, '`template` must not be empty'),

  /**
   * Output filename written under the `generated/` directory.
   * Example: "hackernoon-email.html"
   */
  output: z.string().min(1, '`output` must not be empty'),

  /** Per-campaign rendering overrides. All fields are optional. */
  options: CampaignOptionsSchema.optional(),
});

export type CampaignOptions = z.infer<typeof CampaignOptionsSchema>;
export type CampaignConfig = z.infer<typeof CampaignConfigSchema>;
