/** Data passed to the newsletter email template. */
export interface EmailData {
  /** Recipient's display name. */
  recipientName: string;
  /** Brand / company name. */
  brandName: string;
  /** URL for the logo image. */
  logoUrl: string;
  /** Hero headline (greeting already excluded – that's auto-generated). */
  heroSubtitle: string;
  /** Main body copy. */
  bodyText: string;
  /** Label on the CTA button. */
  ctaLabel: string;
  /** URL the CTA button points to. */
  ctaUrl: string;
  /** List of articles / stories to feature. */
  articles: ArticleItem[];
  /** Year shown in the footer copyright notice. */
  year: number;
  /** Unsubscribe URL. */
  unsubscribeUrl: string;
  /** Privacy-policy URL. */
  privacyUrl: string;
  /** Contact URL. */
  contactUrl: string;
}

/** A single featured article / story. */
export interface ArticleItem {
  /** Thumbnail image URL. */
  imageUrl: string;
  /** Alt text for the thumbnail. */
  imageAlt: string;
  /** Article headline (rendered as a link). */
  title: string;
  /** Short description / excerpt. */
  excerpt: string;
  /** URL the headline links to. */
  url: string;
}
