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

/** Data passed to the Hacker Noon newsletter email template. */
export interface HackernoonEmailData {
  /** Article / issue title shown in the <title> tag and the main headline. */
  title: string;
  /** Hidden preview text shown in email clients before the email is opened. */
  preheaderText: string;
  /** Year shown in the footer copyright notice. */
  year: number;
}

/** A single recipe card shown in the No More To-Go weekly menu grid. */
export interface RecipeItem {
  /** URL for the recipe photo. */
  imageUrl: string;
  /** Alt text for the recipe photo. */
  imageAlt: string;
  /** Bold recipe name (e.g. "Korean Barbecue Beef"). */
  title: string;
  /** Short description / accompaniments shown below the title. */
  subtitle: string;
  /** URL the image and title link to. */
  linkUrl: string;
}

/** A single product card shown in the Mailchimp product grid. */
export interface ProductItem {
  /** URL for the product image. */
  imageUrl: string;
  /** Alt text for the product image. */
  imageAlt: string;
  /** Short availability / delivery note shown above the title. */
  meta: string;
  /** Product name. */
  title: string;
  /** Short product description. */
  description: string;
  /** Original / crossed-out price (e.g. "$1599"). */
  previousPrice: string;
  /** Current / sale price (e.g. "$1299"). */
  price: string;
  /** URL the "Buy Now" button links to. */
  buyUrl: string;
}

/** A single column in the three-column footer of the Mailchimp template. */
export interface FooterColumn {
  /** Column heading. */
  title: string;
  /** Column body text. */
  description: string;
}

/** Data passed to the Mailchimp-style email template. */
export interface MailchimpEmailData {
  /** Email subject / issue title shown in the &lt;title&gt; tag. */
  title: string;
  /** Short preview text shown in email clients before the email is opened. */
  preheaderText: string;
  /** URL for the "View this e-mail in your browser" link. */
  viewInBrowserUrl: string;
  /** Brand / company name shown in the header. */
  brandName: string;
  /** Navigation links shown in the header bar. */
  navLinks: Array<{ label: string; url: string }>;
  /** URL for the full-width hero image. */
  heroImageUrl: string;
  /** Alt text for the hero image. */
  heroImageAlt: string;
  /** Main content heading (H1). */
  contentHeading: string;
  /** Main content body paragraph. */
  contentBody: string;
  /** Rows of two product cards each. */
  productRows: Array<[ProductItem, ProductItem]>;
  /** Three footer columns (left, centre, right). */
  footerColumns: [FooterColumn, FooterColumn, FooterColumn];
  /** Company name shown in the disclaimer. */
  companyName: string;
  /** Physical company address shown in the disclaimer. */
  companyAddress: string;
  /** URL for the unsubscribe link. */
  unsubscribeUrl: string;
  /** URL for the update-profile link. */
  updateProfileUrl: string;
}

/** Data passed to the No More To-Go newsletter email template. */
export interface NomoretogoEmailData {
  /** Email subject / issue title shown in the &lt;title&gt; tag. */
  title: string;
  /** Date string displayed in the navigation bar (e.g. "April 22nd, 2021"). */
  date: string;
  /** URL for the "Weekly Menu" navigation link. */
  weeklyMenuUrl: string;
  /** Introductory welcome paragraph for the week's menu. */
  introText: string;
  /** Closing signature line. */
  signature: string;
  /** Six recipe cards displayed in a 3-row × 2-column grid. */
  recipes: RecipeItem[];
  /** URL the "Get This Week's Menu" CTA button points to. */
  ctaUrl: string;
  /** Highlighted ingredient note shown in the prep-info section. */
  ingredientsSpotlight: string;
  /** Weekend prep tips paragraph. */
  weekendPrepText: string;
  /** Make-ahead instructions paragraph. */
  makeAheadText: string;
  /** URL for the members-only Facebook group. */
  facebookGroupUrl: string;
  /** URL for the "How Can We Help" support link. */
  helpUrl: string;
  /** Unsubscribe link URL. */
  unsubscribeUrl: string;
}
