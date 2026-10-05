import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { SHIRT1_SUBJECT } from './constants.js';
import type { Shirt1EmailData } from './types.js';
import { shirt1EmailTemplate } from './index.js';

export interface RenderedShirt1Email {
  subject: string;
  html: string;
}

/**
 * Renders the shirt1 (hnst-tee) email.
 *
 * Keeps the original Klaviyo document shell (XHTML transitional doctype,
 * `#bodyTable` / `#bodyCell` IDs, mso template-container conditionals, and
 * the desktop/mobile typography block) so the output stays byte-compatible
 * with the source `sandbox/shirt1.html`.
 */
export function renderShirt1Email(data: Shirt1EmailData): RenderedShirt1Email {
  const body = renderEmailBody(shirt1EmailTemplate(data));
  return {
    subject: SHIRT1_SUBJECT,
    html: wrapShirt1Document(body),
  };
}

function wrapShirt1Document(bodyContent: string): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>${SHIRT1_SUBJECT}</title>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: none !important }
        body { width: 100% !important; min-width: 100% !important }
        #bodyCell { padding: 10px !important }
        table.kmMobileHide { display: none !important }
        table.kmDesktopOnly, td.kmDesktopOnly, th.kmDesktopOnly,
        tr.kmDesktopOnly, td.kmDesktopWrapHeaderMobileNone { display: none !important }
        table.kmMobileOnly { display: table !important }
        tr.kmMobileOnly { display: table-row !important }
        td.kmMobileOnly, td.kmDesktopWrapHeader, th.kmMobileOnly { display: table-cell !important }
        table.kmTextContentContainer { width: 100% !important }
        table.kmBoxedTextContentContainer { width: 100% !important }
        td.kmImageContent { padding-left: 0 !important; padding-right: 0 !important }
        img.kmImage { width: 100% !important }
        td.kmMobileStretch { padding-left: 0 !important; padding-right: 0 !important }
        table.templateContainer, div.templateContainer, table.templateRow {
          max-width: 600px !important;
          width: 100% !important
        }
        h1 { font-size: 40px !important; line-height: 1.1 !important }
        h2 { font-size: 32px !important; line-height: 1.1 !important }
        h3 { font-size: 24px !important; line-height: 1.1 !important }
        h4 { font-size: 18px !important; line-height: 1.1 !important }
        td.kmTextContent { font-size: 14px !important; line-height: 1.3 !important }
        td.kmTextBlockInner td.kmTextContent {
          padding-right: 18px !important;
          padding-left: 18px !important
        }
      }
    </style>
    <!--[if mso]>
    <style>
      .templateContainer { border: 0px none #FF0000; background-color: #F3F0E7; border-radius: 0px; }
      #brandingContainer { background-color: transparent !important; border: 0; }
      .templateContainerInner { padding: 0px; }
    </style>
    <![endif]-->
    <style>
      #outlook a { padding: 0 }
      .ReadMsgBody { width: 100% }
      .ExternalClass { width: 100% }
      body { margin: 0; padding: 0 }
      a { word-wrap: break-word !important; max-width: 100% }
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; max-width: 100% }
      table, td { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; table-layout: fixed }
      p { margin: 0; padding-bottom: 1em }
      p:last-child { padding-bottom: 0 }
      #bodyTable, #bodyCell { height: 100% !important; margin: 0; width: 100% !important; table-layout: auto }
      #bodyTable { padding: 0 }
      #bodyCell {
        padding-top: 50px; padding-left: 20px;
        padding-bottom: 20px; padding-right: 20px; border-top: 0
      }
      body, #bodyTable { background-color: #F3F0E7 }
      .templateContainer { border: 0 none #F00; background-color: #F3F0E7; border-radius: 0 }
      .brandingContainer { background-color: transparent; border: 0 }
      .templateContainerInner { padding: 0 }
      h1, h2, h3, h4 { color: #F00 !important; font-family: "Palatino Linotype", Palatino, Georgia; font-weight: normal; line-height: 1.1; letter-spacing: 0; text-align: left }
      h1 { font-size: 40px; margin: 0 0 20px 0 }
      h2 { font-size: 32px; font-weight: bold; margin: 0 0 16px 0 }
      h3 { font-size: 24px; font-weight: bold; margin: 0 0 12px 0 }
      h4 { font-size: 18px; margin: 0 0 9px 0 }
      .rowContainer .kmTextContent {
        color: #F00; font-family: "Century Gothic", AppleGothic, Arial;
        font-size: 12px; line-height: 1.3; letter-spacing: 0;
        text-align: left; max-width: 100%; word-wrap: break-word
      }
      .rowContainer .kmTextContent a,
      .rowContainer .kmTextContent a:link,
      .rowContainer .kmTextContent a:visited,
      .rowContainer .kmTextContent a .yshortcuts {
        color: #F00; font-weight: lighter; text-decoration: underline
      }
      .rowContainer .kmTextContent .kmParagraph { padding-bottom: 9px }
      .kmImageContent { padding: 0; font-size: 0 }
      .kmImage {
        padding-bottom: 0; display: inline !important; vertical-align: top;
        border: 0; height: auto; line-height: 100%;
        outline: none; text-decoration: none; font-size: 12px; width: 100%
      }
      .kmMobileOnly { display: none }
      .kmHide { display: none }
    </style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}