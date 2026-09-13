import type { AppEnv } from './env.js';

export const AssetBucket = {
  HackernoonBrand: 'hackernoon.brand',
  HackernoonMemes: 'hackernoon.memes',
  HackernoonIcons: 'hackernoon.icons',
  NomoretogoImages: 'nomoretogo.images',
  MailchimpPlaceholder: 'mailchimp.placeholder',
} as const;

export type AssetBucket = (typeof AssetBucket)[keyof typeof AssetBucket];

type Catalog = Record<AssetBucket, string>;

const production: Catalog = {
  'hackernoon.brand':
    'https://gitlab.com/hackernoon/newsletters-archive/-/raw/master/content/logos/brand/',
  'hackernoon.memes':
    'https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/october/24.10/',
  'hackernoon.icons': 'https://cdn-images.mailchimp.com/icons/social-block-v2/',
  'nomoretogo.images':
    'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/',
  'mailchimp.placeholder': 'https://placehold.co',
};

const staging: Catalog = { ...production };
const development: Catalog = { ...production };

export const ASSET_CATALOG: Record<AppEnv, Catalog> = {
  production,
  staging,
  development,
};

export const ASSET_ENV_KEYS: Record<AssetBucket, string> = {
  'hackernoon.brand': 'EMAIL_ASSET_BASE_HACKERNOON_BRAND',
  'hackernoon.memes': 'EMAIL_ASSET_BASE_HACKERNOON_MEMES',
  'hackernoon.icons': 'EMAIL_ASSET_BASE_HACKERNOON_ICONS',
  'nomoretogo.images': 'EMAIL_ASSET_BASE_NOMORETOGO_IMAGES',
  'mailchimp.placeholder': 'EMAIL_ASSET_BASE_MAILCHIMP_PLACEHOLDER',
};
