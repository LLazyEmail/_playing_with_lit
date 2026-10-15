import { document } from '@llazyemail/template-runtime-display';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { goodNewsHeads } from '../../rendering/email-styles/index.js';
import { GOOD_NEWS_SUBJECT, GOOD_NEWS_FONTS, GOOD_NEWS_PALETTE } from './constants.js';
import type { GoodNewsEmailData } from './types.js';
import { goodNewsEmailTemplate } from './index.js';

export interface RenderedGoodNewsEmail {
  subject: string;
  html: string;
}

/** Renders the good-news (Simple / Iterable) email. */
export function renderGoodNewsEmail(data: GoodNewsEmailData): RenderedGoodNewsEmail {
  const body = renderEmailBody(goodNewsEmailTemplate(data));
  return {
    subject: GOOD_NEWS_SUBJECT,
    html: wrapGoodNewsDocument(body),
  };
}

/**
 * Full document via `@llazyemail/template-runtime-display`.
 * Requires the next release that adds `lang`, `bodyAttributes`, etc.
 * (fixes the previous double `</body>`).
 */
function wrapGoodNewsDocument(bodyContent: string): string {
  return document({
    lang: false,
    headHtml: goodNewsHeads(GOOD_NEWS_SUBJECT),
    bodyAttributes: `style="background-color: ${GOOD_NEWS_PALETTE.pageBg}; height: 100%; margin: 0; padding: 0;"`,
    mainHtml: bodyContent,
  });
}

/** Re-exported for tests and downstream tooling. */
export const GOOD_NEWS_FONTS_STACK = GOOD_NEWS_FONTS.stack;
