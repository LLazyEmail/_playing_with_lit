import { renderEmailBody } from '../../rendering/render-email-document.js';
import {
  OMETRIA_RESET_CSS,
  OMETRIA_RESPONSIVE_CSS,
  OMETRIA_FONTS_CSS,
  OMETRIA_INTERACTION_CSS,
} from '../../rendering/email-styles/index.js';
import {
  SHIRT4_SUBJECT,
  SHIRT4_FONTS,
  SHIRT4_PALETTE,
} from './constants.js';
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
  <head>
    <!--yahoo-app-fix-->
  </head>
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, user-scalable=yes" name="viewport" />
    <meta content="telephone=no, date=no, address=no, email=no, url=no" name="format-detection" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta content="noindex, nofollow" name="robots" />
    <title>${SHIRT4_SUBJECT}</title>

    <!--[if mso]>
    <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
    <![endif]-->

    <style type="text/css">${OMETRIA_RESET_CSS}</style>
    <style type="text/css">${OMETRIA_RESPONSIVE_CSS}</style>

    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com" media="screen" rel="preconnect" />
    <link href="https://fonts.gstatic.com" media="screen" rel="preconnect" />
    <link href="${SHIRT4_FONTS.googleHref}" media="screen" rel="stylesheet" />
    <!--<![endif]-->

    <style type="text/css">
      ${OMETRIA_FONTS_CSS({
        gothicRegularWoff2: SHIRT4_FONTS.gothicRegularWoff2,
        gothicBoldWoff2: SHIRT4_FONTS.gothicBoldWoff2,
      })}
    </style>
    <style type="text/css">
      ${OMETRIA_INTERACTION_CSS({
        pageBg: SHIRT4_PALETTE.pageBg,
        black: SHIRT4_PALETTE.black,
      })}
    </style>
  </head>
  <body class="body" style="background-color:${SHIRT4_PALETTE.pageBg}; margin:0; padding:0; word-spacing:normal; word-wrap:normal; text-align:center;" xml:lang="en">
    ${bodyContent}
  </body>
</html>`;
}