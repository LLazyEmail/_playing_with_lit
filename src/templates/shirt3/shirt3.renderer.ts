import { renderEmailBody } from '../../rendering/render-email-document.js';
import { shopifyBounceHead } from '../../rendering/email-styles/index.js';
import { SHIRT3_SUBJECT, SHIRT3_PALETTE } from './constants.js';
import type { Shirt3EmailData } from './types.js';
import { shirt3EmailTemplate } from './index.js';

export interface RenderedShirt3Email {
  subject: string;
  html: string;
}

/** Renders the shirt3 (Alex Mill cart-abandonment) email. */
export function renderShirt3Email(data: Shirt3EmailData): RenderedShirt3Email {
  const body = renderEmailBody(shirt3EmailTemplate(data));
  return {
    subject: SHIRT3_SUBJECT,
    html: wrapShirt3Document(body),
  };
}

function wrapShirt3Document(bodyContent: string): string {
  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xml:lang="en">
  ${shopifyBounceHead(SHIRT3_SUBJECT)}
  <body style="padding:0;background-color:${SHIRT3_PALETTE.bodyBg};">
    ${bodyContent}
  </body>
</html>`;
}
