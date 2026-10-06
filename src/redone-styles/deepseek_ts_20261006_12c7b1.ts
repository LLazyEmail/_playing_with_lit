import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import {
  SHOPIFY_BOUNCE_FONTS_CSS,
  SHOPIFY_BOUNCE_RESET_CSS,
  SHOPIFY_BOUNCE_RESPONSIVE_CSS,
  msoStyle,
  styleTag,
} from '../../rendering/email-styles/index.js';
import { SHIRT2_SUBJECT, SHIRT2_PALETTE } from './constants.js';
import type { Shirt2EmailData } from './types.js';
import { shirt2EmailTemplate } from './index.js';

export interface RenderedShirt2Email {
  subject: string;
  html: string;
}

const SHOPIFY_BOUNCE_MSO_PIXELS = `<xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>`;

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
  <head>
    <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <![if !mso]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <![endif]>
    <title>${SHIRT2_SUBJECT}</title>
    <style>
      ${SHOPIFY_BOUNCE_FONTS_CSS}
      ${SHOPIFY_BOUNCE_RESET_CSS}
      ${SHOPIFY_BOUNCE_RESPONSIVE_CSS}
    </style>
    <!--[if gte mso 9]>${SHOPIFY_BOUNCE_MSO_PIXELS}<![endif]-->
  </head>
  <body style="padding:0;background-color:${SHIRT2_PALETTE.bodyBg};">
    ${bodyContent}
  </body>
</html>`;
}