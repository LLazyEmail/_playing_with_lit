import { z } from 'zod';

const nonEmpty = z.string().min(1, 'must not be empty');

export const articleItemSchema = z.object({
  imageUrl: nonEmpty,
  imageAlt: nonEmpty,
  title: nonEmpty,
  excerpt: nonEmpty,
  url: nonEmpty,
});

export const emailDataSchema = z.object({
  recipientName: nonEmpty,
  brandName: nonEmpty,
  logoUrl: nonEmpty,
  heroSubtitle: nonEmpty,
  bodyText: nonEmpty,
  ctaLabel: nonEmpty,
  ctaUrl: nonEmpty,
  articles: z.array(articleItemSchema),
  year: z.number().int(),
  unsubscribeUrl: nonEmpty,
  privacyUrl: nonEmpty,
  contactUrl: nonEmpty,
});

export const hackernoonEmailDataSchema = z.object({
  title: nonEmpty,
  preheaderText: nonEmpty,
  year: z.number().int(),
});

export const recipeItemSchema = z.object({
  imageUrl: nonEmpty,
  imageAlt: nonEmpty,
  title: nonEmpty,
  subtitle: z.string(),
  linkUrl: nonEmpty,
});

export const nomoretogoEmailDataSchema = z.object({
  title: nonEmpty,
  date: nonEmpty,
  weeklyMenuUrl: nonEmpty,
  introText: nonEmpty,
  signature: nonEmpty,
  recipes: z.array(recipeItemSchema),
  ctaUrl: nonEmpty,
  ingredientsSpotlight: nonEmpty,
  weekendPrepText: nonEmpty,
  makeAheadText: nonEmpty,
  facebookGroupUrl: nonEmpty,
  helpUrl: nonEmpty,
  unsubscribeUrl: nonEmpty,
});

export const productItemSchema = z.object({
  imageUrl: nonEmpty,
  imageAlt: nonEmpty,
  meta: nonEmpty,
  title: nonEmpty,
  description: nonEmpty,
  previousPrice: nonEmpty,
  price: nonEmpty,
  buyUrl: nonEmpty,
});

export const footerColumnSchema = z.object({
  title: nonEmpty,
  description: nonEmpty,
});

export const mailchimpEmailDataSchema = z.object({
  title: nonEmpty,
  preheaderText: nonEmpty,
  viewInBrowserUrl: nonEmpty,
  brandName: nonEmpty,
  navLinks: z.array(
    z.object({
      label: nonEmpty,
      url: nonEmpty,
    })
  ),
  heroImageUrl: nonEmpty,
  heroImageAlt: nonEmpty,
  contentHeading: nonEmpty,
  contentBody: nonEmpty,
  productRows: z.array(z.tuple([productItemSchema, productItemSchema])),
  footerColumns: z.tuple([
    footerColumnSchema,
    footerColumnSchema,
    footerColumnSchema,
  ]),
  companyName: nonEmpty,
  companyAddress: nonEmpty,
  unsubscribeUrl: nonEmpty,
  updateProfileUrl: nonEmpty,
});
