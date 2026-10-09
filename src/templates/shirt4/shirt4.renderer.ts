import { renderEmailBody } from '../../rendering/render-email-document.js';
import { shirt4Heads } from '../../rendering/email-styles/index.js';
import { SHIRT4_SUBJECT, SHIRT4_FONTS, SHIRT4_PALETTE } from './constants.js';
import type { Shirt4EmailData } from './types.js';
import { shirt4EmailTemplate } from './index.js';

export interface RenderedShirt4Email {
  subject: string;
  html: string;
}

/** Renders the shirt4 (Orlebar Brown / Ometria) email. */
export function renderShirt4Email(data: Shirt4EmailData): RenderedShirt4Email {
  const body = renderEmailBody(shirt4EmailTemplate(data));
  return {
    subject: SHIRT4_SUBJECT,
    html: wrapShirt4Document(body),
  };
}

function wrapShirt4Document(bodyContent: string): string {
  return `<!DOCTYPE html> <!-- /*********************/
/ Crafted by Ometria.com /
/***********************/
 -->
<!DOCTYPE html>
<html dir="ltr" lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  ${shirt4Heads({
    title: SHIRT4_SUBJECT,
    googleHref: SHIRT4_FONTS.googleHref,
    gothicRegularWoff2: SHIRT4_FONTS.gothicRegularWoff2,
    gothicBoldWoff2: SHIRT4_FONTS.gothicBoldWoff2,
    pageBg: SHIRT4_PALETTE.pageBg,
    black: SHIRT4_PALETTE.black,
  })}
  <body class="body" style="background-color:${SHIRT4_PALETTE.pageBg}; margin:0; padding:0; word-spacing:normal; word-wrap:normal; text-align:center;" xml:lang="en">
    ${bodyContent}
  </body>
</html>`;
}
