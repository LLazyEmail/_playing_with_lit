import type { TemplateResult } from 'lit';
import { GOOGLE_SUBJECT } from './constants.js';
import type { GoogleEmailData } from './types.js';
import { renderGoogleTemplate } from './google.template.js';
import { renderEmailBody } from '../../rendering/render-email-document.js';

export interface RenderedGoogleEmail {
  subject: string;
  html: string;
}

/**
 * Renders the Google Store shipment-confirmation email.
 * Keeps the original Google document shell (MSO comments, Roboto font stack,
 * apple-links / unlink_text helpers) so the output stays byte-compatible
 * with what Google ships.
 */
export function renderGoogleEmail(data: GoogleEmailData): RenderedGoogleEmail {
  const body = renderEmailBody(renderGoogleTemplate(data));
  return {
    subject: GOOGLE_SUBJECT,
    html: wrapGoogleDocument(body),
  };
}

function wrapGoogleDocument(bodyContent: string): string {
  return `<!doctype html public "-//w3c//dtd html 4.01 transitional//en" "http://www.w3.org/tr/html4/loose.dtd">
<html dir="ltr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>${GOOGLE_SUBJECT}</title>
    <style>
      .unlink_text, .unlink_text a, .unlink_text a:-webkit-any-link { cursor: text !important; color: #777777 !important; }
      .unlink_text, .unlink_text strong, .unlink_text span, .unlink_text font { cursor: text !important; color: #777777 !important; text-decoration: none !important; }
      a { text-decoration: none !important; }
      .appleLinksWhite a { color: #898989 !important; text-decoration: none !important; cursor: default !important; pointer-events: none !important; }
      @media screen and (max-width: 599px) { div[class=display] { display: none !important; } }
      @media screen and (max-width: 320px) { div[class=display] { display: none !important; } }
      @media screen and (max-width: 375px) { div[class=display] { display: none !important; } }
    </style>
    <!--[if mso]>
      <style> span, td, table, div, a, p { font-family: Arial, serif !important; } </style>
    <![endif]-->
  </head>
  <body
    class="body"
    dir="ltr"
    bgcolor="#ffffff"
    width="100%"
    style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background-color:#ffffff; border:0; font-family:arial; font-size:16px; font-weight:normal; margin:0; padding:0; width:100%;"
  >
    ${bodyContent}
  </body>
</html>`;
}