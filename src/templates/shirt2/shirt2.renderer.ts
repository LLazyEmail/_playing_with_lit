import { renderEmailBody } from '../../rendering/render-email-document.js';
import { shopifyBounceHead } from '../../rendering/email-styles/index.js';
import { SHIRT2_SUBJECT, SHIRT2_PALETTE } from './constants.js';
import type { Shirt2EmailData } from './types.js';
import { shirt2EmailTemplate } from './index.js';

export interface RenderedShirt2Email {
  subject: string;
  html: string;
}

/** Renders the shirt2 (Alex Mill cart-abandonment) email. */
export function renderShirt2Email(data: Shirt2EmailData): RenderedShirt2Email {
  const body = renderEmailBody(shirt2EmailTemplate(data));
  return {
    subject: SHIRT2_SUBJECT,
    html: wrapShirt2Document(body),
  };
}

function wrapShirt2Document(bodyContent: string): string {
  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xml:lang="en">
  ${shopifyBounceHead(SHIRT2_SUBJECT)}
  <body style="padding:0;background-color:${SHIRT2_PALETTE.bodyBg};">
    ${bodyContent}
  </body>
</html>`;
}
