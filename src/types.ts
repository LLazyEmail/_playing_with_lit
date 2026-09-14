import type { TemplateResult } from 'lit';

/** Shared contract for every `*.section.ts` export. Markup stays per-template. */
export type Section<T> = (data: T) => TemplateResult;

/** Fields that mean the same thing on every issue-style template. */
export interface BaseEmailData {
  title: string;
}

/** Preview text as used by Hacker Noon, Mailchimp, and Zurb. */
export interface PreviewEmailData extends BaseEmailData {
  preheaderText: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface ImageRef {
  imageUrl: string;
  imageAlt: string;
}

/** Data passed to the newsletter email template. */
export interface EmailData {
  recipientName: string;
  brandName: string;
  logoUrl: string;
  heroSubtitle: string;
  bodyText: string;
  ctaLabel: string;
  ctaUrl: string;
  articles: ArticleItem[];
  year: number;
  unsubscribeUrl: string;
  privacyUrl: string;
  contactUrl: string;
}

export interface ArticleItem {
  imageUrl: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface HackernoonEmailData extends PreviewEmailData {
  year: number;
}

export interface RecipeItem {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  linkUrl: string;
}

export interface ProductItem {
  imageUrl: string;
  imageAlt: string;
  meta: string;
  title: string;
  description: string;
  previousPrice: string;
  price: string;
  buyUrl: string;
}

export interface FooterColumn {
  title: string;
  description: string;
}

export interface MailchimpEmailData extends PreviewEmailData {
  viewInBrowserUrl: string;
  brandName: string;
  navLinks: Link[];
  heroImageUrl: string;
  heroImageAlt: string;
  contentHeading: string;
  contentBody: string;
  productRows: Array<[ProductItem, ProductItem]>;
  footerColumns: [FooterColumn, FooterColumn, FooterColumn];
  companyName: string;
  companyAddress: string;
  unsubscribeUrl: string;
  updateProfileUrl: string;
}

export interface NomoretogoEmailData extends BaseEmailData {
  date: string;
  weeklyMenuUrl: string;
  introText: string;
  signature: string;
  recipes: RecipeItem[];
  ctaUrl: string;
  ingredientsSpotlight: string;
  weekendPrepText: string;
  makeAheadText: string;
  facebookGroupUrl: string;
  helpUrl: string;
  unsubscribeUrl: string;
}

export interface ZurbFeature {
  title: string;
  body: string;
}

/** Foundation for Emails 2 announcement — not a Hacker Noon campaign. */
export interface ZurbEmailData extends PreviewEmailData {
  year: number;
  heroHeading: string;
  heroBody: string;
  logo: ImageRef;
  homeLink: Link;
  cta: Link;
  features: ZurbFeature[];
  unsubscribe: Link;
}
