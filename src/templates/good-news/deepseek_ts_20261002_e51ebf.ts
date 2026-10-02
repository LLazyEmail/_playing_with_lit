import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import {
  GOOD_NEWS_SUBJECT,
  GOOD_NEWS_FONTS,
  GOOD_NEWS_PALETTE,
} from './constants.js';
import type { GoodNewsEmailData } from './types.js';
import { goodNewsEmailTemplate } from './index.js';

export interface RenderedGoodNewsEmail {
  subject: string;
  html: string;
}

/**
 * Renders the good-news (Simple / Iterable) email.
 *
 * Keeps the original document shell — including the quirky nested
 * `<head>` / `<body>` pair that Simple's exporter emits, the
 * `@media(min-width:550px)` block, and the fixed 550px column — so the
 * output stays byte-compatible with `sandbox/good-news.html`.
 */
export function renderGoodNewsEmail(
  data: GoodNewsEmailData
): RenderedGoodNewsEmail {
  const body = renderEmailBody(goodNewsEmailTemplate(data));
  return {
    subject: GOOD_NEWS_SUBJECT,
    html: wrapGoodNewsDocument(body),
  };
}

function wrapGoodNewsDocument(bodyContent: string): string {
  return `<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>${GOOD_NEWS_SUBJECT}</title>
</head>

<body>
  <head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <style type="text/css">
    @media(min-width:550px){.hero-image{top:0!important}table[class="body"]{padding-bottom:50px!important;padding-top:50px!important}.email-logo-masthead{display:inline!important;height:35px!important;margin-left:0!important;margin-right:0!important}.email-content{border-left:1px solid #dadfe1!important;border-right:1px solid #dadfe1!important}.email-content-block{padding-left:50px!important;padding-right:50px!important}}.email-social-bar-copy p,.email-social-bar-copy a,.email-social-bar-copy .ios-no-link{color:white!important;text-decoration:none!important}
  </style>
</head>

<body style="background-color: ${GOOD_NEWS_PALETTE.pageBg}; height: 100%; margin: 0; padding: 0;">
${bodyContent}
</body>

</body>
</html>`;
}

/** Re-exported for tests and downstream tooling. */
export const GOOD_NEWS_FONTS_STACK = GOOD_NEWS_FONTS.stack;