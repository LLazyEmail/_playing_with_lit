import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import {
  SHOPIFY_BOUNCE_FONTS_CSS,
  SHOPIFY_BOUNCE_RESET_CSS,
  SHOPIFY_BOUNCE_RESPONSIVE_CSS,
} from '../../rendering/email-styles/index.js';
import { SHIRT3_SUBJECT, SHIRT3_PALETTE } from './constants.js';
import type { Shirt3EmailData } from './types.js';
import { shirt3EmailTemplate } from './index.js';

export interface RenderedShirt3Email {
  subject: string;
  html: string;
}

const SHOPIFY_BOUNCE_MSO_PIXELS = `<xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>`;

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
  <head>
    <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <![if !mso]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <![endif]>
    <title>${SHIRT3_SUBJECT}</title>
    <style>
      ${SHOPIFY_BOUNCE_FONTS_CSS}
      ${SHOPIFY_BOUNCE_RESET_CSS}
      ${SHOPIFY_BOUNCE_RESPONSIVE_CSS}
    </style>
    <!--[if gte mso 9]>${SHOPIFY_BOUNCE_MSO_PIXELS}<![endif]-->
  </head>
  <body style="padding:0;background-color:${SHIRT3_PALETTE.bodyBg};">
    ${bodyContent}
  </body>
</html>`;
}