import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { SHIRT4_SUBJECT, SHIRT4_FONTS, SHIRT4_PALETTE } from './constants.js';
import type { Shirt4EmailData } from './types.js';
import { shirt4EmailTemplate } from './index.js';

export interface RenderedShirt4Email {
  subject: string;
  html: string;
}

/**
 * Renders the shirt4 (Orlebar Brown / Ometria) email.
 *
 * Keeps the original HTML5 + VML document shell, the Google Roboto link,
 * the `@font-face` block for Gothic720, and the responsive utility classes
 * (`.hide`, `.show`, `.tal`, `.tac`, `.w33`, `.fluid`, etc.) so the output
 * stays byte-compatible with `sandbox/shirt4.html`.
 */
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

    <style type="text/css">
      html { font-size: 16px; }
      body { margin: 0; padding: 0; }
      table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
      th { font-weight: normal; }
      a { text-decoration: none; }
      a img { border: none; outline: none; text-decoration: none; }
      strong, b { font-weight: bold; }
      th, td, ol, ul, li, h1, h2, h3, h4, h5, h6, p { margin: 0; padding: 0; }
      h1, h2, h3, h4, h5, h6 { border: none; display: block; }
      a[href^="mailto:"], a[href^="tel:"],
      #root [x-apple-data-detectors=true],
      a[x-apple-data-detectors=true],
      #MessageViewBody a, .body a, u+.body a {
        color: inherit; font-family: inherit; font-size: inherit;
        font-weight: inherit; line-height: inherit; text-decoration: none;
      }
      div[style*="margin:16px 0"] { margin: 0 !important; }
      span.MsoHyperlink { mso-style-priority: 99; color: inherit; }
      span.MsoHyperlinkFollowed { mso-style-priority: 99; color: inherit; }
      ol, ul { list-style-position: inside; }
      th, td, ol, ul, li, h1, h2, h3, h4, h5, h6, p, a, a:link, a:hover { color: #000000; }
      h1, h2, h3, h4, h5, h6, p, li { line-height: 150%; }
      h1 { font-size: 28px; } h2 { font-size: 26px; } h3 { font-size: 24px; }
      h4 { font-size: 20px; } h5 { font-size: 18px; } h6 { font-size: 16px; }
      p, li { font-size: 14px; }
    </style>

    <style type="text/css">
      @media only screen and (max-width:480px) {
        #MessageViewBody, #MessageWebViewDiv { min-width: 100vw; margin: 0 !important; zoom: 1 !important; }
        u+.body { width: 100vw !important; max-width: 100% !important; }
        div>u+.body { width: 100% !important; }
        .hide { display: none !important; }
        .show { display: block !important; max-height: inherit !important; max-width: inherit !important; overflow: visible !important; visibility: inherit !important; }
        .tal { text-align: left !important; }
        .tac { text-align: center !important; }
        .tar { text-align: right !important; }
        .p0 { padding: 0 !important; }
        .pt0 { padding-top: 0 !important; }
        .pb0 { padding-bottom: 0 !important; }
        .pb20 { padding-bottom: 20px !important; }
        .pl0 { padding-left: 0 !important; }
        .pr0 { padding-right: 0 !important; }
        .plr0 { padding-left: 0 !important; padding-right: 0 !important; }
        .plr10 { padding-left: 10px !important; padding-right: 10px !important; }
        .plr15 { padding-left: 15px !important; padding-right: 15px !important; }
        .w25 { width: 25% !important; max-width: 25% !important; height: auto !important; }
        .w33 { width: 33.333333333333336% !important; max-width: 33.333333333333336% !important; height: auto !important; }
        #MessageViewBody .w33 { width: 33% !important; max-width: 33% !important; }
        .w50 { width: 50% !important; max-width: 50% !important; height: auto !important; }
        .w66 { width: 66.666666666666672% !important; max-width: 66.666666666666672% !important; height: auto !important; }
        #MessageViewBody .w66 { width: 67% !important; max-width: 67% !important; }
        .w75 { width: 75% !important; max-width: 75% !important; height: auto !important; }
        .wf, .fw { width: 100% !important; min-width: 100% !important; max-width: 100% !important; height: auto !important; }
        .fw { display: block !important; }
        .wr { display: block !important; }
        .col { display: inline-block !important; }
        .hauto { height: auto !important; }
        .fs24 { font-size: 24px !important; } .fs22 { font-size: 22px !important; }
        .fs20 { font-size: 20px !important; } .fs18 { font-size: 18px !important; }
        .fs16 { font-size: 16px !important; } .fs15 { font-size: 15px !important; }
        .fs14 { font-size: 14px !important; } .fs13 { font-size: 13px !important; }
        .fs12 { font-size: 12px !important; } .fs11 { font-size: 11px !important; }
        .fs10 { font-size: 10px !important; }
        .column { display: block !important; width: 100% !important; }
        .column-top { display: table-header-group !important; width: 100% !important; }
        .column-bottom { display: table-footer-group !important; width: 100% !important; }
        .column-w33 { display: inline-block !important; width: 33.333% !important; }
        .column-w50 { display: inline-block !important; width: 50% !important; }
        .fluid { width: 100% !important; max-width: 100% !important; height: auto !important; }
      }
    </style>

    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com" media="screen" rel="preconnect" />
    <link href="https://fonts.gstatic.com" media="screen" rel="preconnect" />
    <link href="${SHIRT4_FONTS.googleHref}" media="screen" rel="stylesheet" />
    <!--<![endif]-->

    <style type="text/css">
      @font-face {
        font-family: 'Gothic720';
        src: url('${SHIRT4_FONTS.gothicRegularWoff2}') format('woff2');
        font-display: auto;
        font-stretch: normal;
        font-weight: normal;
        mso-generic-font-family: swiss;
        mso-font-alt: 'Arial';
      }
      @font-face {
        font-family: 'Gothic720';
        src: url('${SHIRT4_FONTS.gothicBoldWoff2}') format('woff2');
        font-display: auto;
        font-stretch: normal;
        font-weight: bold;
        mso-generic-font-family: swiss;
        mso-font-alt: 'Arial';
      }
      .Gothic720, .Gothic720 a { font-family: 'font-name', Arial, sans-serif !important; }
      th, td, img, ol, ul, li, p, a { font-family: 'Gothic720', Arial, sans-serif; font-weight: normal; }
      .title, h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a { font-family: 'Gothic720', Arial, sans-serif; font-weight: bold; }
      .mso th, .mso td, .mso img, .mso ol, .mso ul, .mso li, .mso p, .mso a { font-family: Arial, sans-serif; font-weight: normal; }
      .mso .title, .mso h1, .mso h1 a,