import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { SHIRT2_SUBJECT } from './constants.js';
import type { Shirt2EmailData } from './types.js';
import { shirt2EmailTemplate } from './index.js';

export interface RenderedShirt2Email {
  subject: string;
  html: string;
}

/**
 * Renders the shirt2 (Alex Mill cart-abandonment) email.
 *
 * Keeps the original Shopify/Bounce Exchange document shell
 * (HTML5 doctype, VML namespaces, `LinetoCircularWeb` / `PitchSansWeb`
 * @font-face, responsive `.full` / `.hide` / `.show` grid) so the output
 * stays byte-compatible with `sandbox/shirt2.html`.
 */
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
      @font-face {
        font-family: 'LinetoCircularWeb';
        src: url('https://cdn.shopify.com/s/files/1/0295/5521/t/19/assets/lineto-circular-book.woff2') format('woff2');
        font-weight: 400;
      }
      @font-face {
        font-family: 'LinetoCircularWeb';
        src: url('https://cdn.shopify.com/s/files/1/0295/5521/t/19/assets/lineto-circular-bold.woff2') format('woff2');
        font-weight: 700;
      }
      @font-face {
        font-family: 'PitchSansWeb';
        src: url('https://cdn.shopify.com/s/files/1/0295/5521/t/19/assets/PitchSansWeb-Medium.woff2') format('woff2');
        font-weight: 400;
      }
      [style*="LinetoCircularWeb"] { font-family: 'LinetoCircularWeb', Helvetica, Arial, sans-serif !important; }
      [style*="PitchSansWeb"] { font-family: 'PitchSansWeb', 'Courier New', Courier, monospace !important; }
      body { margin: 0 !important; }
      div[style*="margin: 16px 0"] { margin: 0 !important; }
      a { text-decoration: none; color: inherit; }
      .footer a { color: #0F1B55 !important; }
      .cta { transition: 0.2s !important; }
      .hero .cta:hover, .firstItem .cta:hover { background-color: #0F1B55 !important; transition: 0.2s !important; }
      .prod:hover .cta { background-color: #0F1B55 !important; transition: 0.2s !important; }
      .cat:hover a { text-decoration: underline !important; }
      @media screen and (min-device-width: 768px) and (max-device-width:1024px) {
        .props div.ipad { width: 548px !important; }
      }
      @media screen and (min-device-width: 10px) and (max-width:640px) {
        .full { width: 100% !important; height: auto !important; }
        .hide { width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; overflow: hidden !important; float: left !important; display: none !important; }
        .show { display: block !important; width: 100% !important; height: auto !important; overflow: visible !important; float: none !important; clear: both !important; }
        .footer br.show { display: inline !important; }
        table.show { display: table !important; }
        .block { display: block !important; }
        .center { margin: 0 auto !important; text-align: center !important; float: none !important; clear: both !important; }
        .box { width: 90% !important; }
        .yahooHero { padding: 40px 0 !important; }
        .yahooHalf { padding: 20px 0 !important; }
        .prodCopy { padding: 13px 0 !important; font-size: 15px !important; line-height: 19px !important; }
        .noPad { padding: 0 !important; }
        .noBord { border: 0 !important; }
        .footer { line-height: 19px !important; }
        .footer .height { line-height: 30px !important; }
      }
      @media screen and (min-device-width:10px) and (max-width:450px) {
        .fullSm { width: 100% !important; height: auto !important; }
        .boxSm { width: 90% !important; }
        .header { padding: 20px 0 15px !important; }
        .hero .pad { padding-top: 25px !important; }
        h1 { font-size: 33px !important; line-height: 1.2 !important; }
      }
      @media screen and (min-device-width:10px) and (max-width:380px) {
        .props .yahooHalf { line-height: 25px !important; }
      }
    </style>
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <style type="text/css">
      .ibx_no_webview { display: none !important; }
    </style>
  </head>
  <body style="padding:0;background-color:#f6f6f6;">
    ${bodyContent}
  </body>
</html>`;
}