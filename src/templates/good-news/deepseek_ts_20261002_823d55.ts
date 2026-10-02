import type { GoodNewsEmailData } from './types.js';
import { GOOD_NEWS_SUBJECT } from './constants.js';
import { goodNewsEmailTemplate } from './index.js';

export interface GoodNewsTemplateRegistration {
  id: 'good-news';
  subject: string;
  build: (data: GoodNewsEmailData) => unknown;
}

/**
 * Registers the good-news template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const goodNewsRegistration: GoodNewsTemplateRegistration = {
  id: 'good-news',
  subject: GOOD_NEWS_SUBJECT,
  build: (data) => goodNewsEmailTemplate(data),
};