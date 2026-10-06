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

/** Google Store shipment confirmation. Field names follow the original email. */
export interface GoogleEmailData {
  preheader: string;
  greeting: string;
  intro: string;
  order: {
    number: string;
    orderedAt: string;
    orderedFrom: string[];
    shippingAddress: string[];
  };
  progress: {
    orderedDate: string;
    shippedDate: string;
    deliveredDate: string;
  };
  item: {
    name: string;
    image: string;
    idNumber: string;
    price: string;
    quantity: number;
  };
  shipment: {
    carrier: string;
    trackingNumber: string;
    trackingUrl: string;
  };
  totals: {
    shipping: string;
    discount: string;
    tax: string;
    total: string;
  };
  payment: {
    method: string;
  };
  footer: {
    year: number;
    addressLine: string;
    copyright: string;
    links: {
      account: string;
      orderHistory: string;
      contactUs: string;
      termsOfSale: string;
      termsOfService: string;
    };
  };
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

/** hnst-tee announcement (shirt1). Types are re-exported from the template. */
export interface Shirt1EmailData {
  preheaderText: string;
  browserNotice: {
    text: string;
    label: string;
    url: string;
  };
  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  headline: string;
  hero: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
  };
}

/** Alex Mill cart-abandonment offer (shirt2). */
export interface Shirt2Product {
  image: { src: string; alt: string };
  url: string;
  name: string;
  color: string;
  price: string;
  cta: { label: string; url: string };
}

/** Alex Mill cart-abandonment offer (shirt2). Types are re-exported from the template. */
export interface Shirt2EmailData {
  preheaderText: string;
  title: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    cta: { label: string; url: string };
  };
  products: Shirt2Product[];
  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}

/** Alex Mill cart-abandonment (shirt3). Types are re-exported from the template. */
export interface Shirt3Product {
  image: { src: string; alt: string };
  url: string;
  name: string;
  color: string;
  price: string;
  cta: { label: string; url: string };
}

export interface Shirt3EmailData {
  preheaderText: string;
  title: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    cta: { label: string; url: string };
  };
  products: Shirt3Product[];
  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}

/** Orlebar Brown new-shirts (shirt4). Types are re-exported from the template. */
export interface Shirt4NavLink {
  label: string;
  url: string;
}

export interface Shirt4Product {
  image: { src: string; alt: string };
  url: string;
  name: string;
  price: string;
  cta: { label: string; url: string };
}

export interface Shirt4EmailData {
  preheaderText: string;
  title: string;
  topBar: {
    stripColor: string;
    message: string;
  };
  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  nav: Shirt4NavLink[];
  hero: {
    image: { src: string; alt: string; width: number };
    url: string;
  };
  intro: {
    headline: string;
    body: string;
    cta: { label: string; url: string };
  };
  products: Shirt4Product[];
  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}

/** Buck Mason short-sleeves (shirt5). Types are re-exported from the template. */
export interface Shirt5Image {
  src: string;
  alt: string;
  width: number;
  url: string;
  /** Optional per-block padding override; Klaviyo emits per-block tweaks. */
  padding?: string;
  /** Optional background color (Klaviyo sometimes tints individual blocks). */
  bgColor?: string;
}

export interface Shirt5EmailData {
  preheaderText: string;
  /** Long invisible spacer Klaviyo appends after the preheader for preview text alignment. */
  preheaderSpacer?: string;
  images: Shirt5Image[];
  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}
