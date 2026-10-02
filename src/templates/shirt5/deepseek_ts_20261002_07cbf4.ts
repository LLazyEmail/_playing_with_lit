import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { SHIRT5_SUBJECT, SHIRT5_PALETTE } from './constants.js';
import type { Shirt5EmailData } from './types.js';
import { shirt5EmailTemplate } from './index.js';

export interface RenderedShirt5Email {
  subject: string;
  html: string;
}

/**
 * Renders the shirt5 (Buck Mason / Klaviyo) email.
 *
 * Keeps the original XHTML transitional shell, the huge Klaviyo mobile
 * `@media` block, and the MSO `.templateContainer` overrides so the output
 * stays byte-compatible with `sandbox/shirt5.html`.
 */
export function renderShirt5Email(data: Shirt5EmailData): RenderedShirt5Email {
  const body = renderEmailBody(shirt5EmailTemplate(data));
  return {
    subject: SHIRT5_SUBJECT,
    html: wrapShirt5Document(body),
  };
}

function wrapShirt5Document(bodyContent: string): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${SHIRT5_SUBJECT}</title>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: none !important }
        body { width: 100% !important; min-width: 100% !important }
        #bodyCell { padding: 0 !important }
        table.kmMobileHide { display: none !important }
        table.kmDesktopOnly, td.kmDesktopOnly, th.kmDesktopOnly,
        tr.kmDesktopOnly, td.kmDesktopWrapHeaderMobileNone { display: none !important }
        table.kmMobileOnly { display: table !important }
        tr.kmMobileOnly { display: table-row !important }
        td.kmMobileOnly, td.kmDesktopWrapHeader, th.kmMobileOnly { display: table-cell !important }
        tr.kmMobileNoAlign, table.kmMobileNoAlign { float: none !important; text-align: initial !important; vertical-align: middle !important; table-layout: fixed !important }
        tr.kmMobileCenterAlign { float: none !important; text-align: center !important; vertical-align: middle !important; table-layout: fixed !important }
        td.kmButtonCollection { padding: 9px !important }
        td.kmMobileHeaderStackDesktopNone, img.kmMobileHeaderStackDesktopNone,
        td.kmMobileHeaderStack { display: block !important; margin-left: auto !important; margin-right: auto !important; padding-bottom: 9px !important; padding-right: 0 !important; padding-left: 0 !important }
        td.kmMobileWrapHeader, td.kmMobileWrapHeaderDesktopNone { display: inline-block !important }
        td.kmMobileHeaderSpacing { padding-right: 10px !important }
        td.kmMobileHeaderNoSpacing { padding-right: 0 !important }
        table.kmDesktopAutoWidth { width: inherit !important }
        table.kmMobileAutoWidth { width: 100% !important }
        table.kmTextContentContainer { width: 100% !important }
        table.kmBoxedTextContentContainer { width: 100% !important }
        td.kmImageContent { padding-left: 0 !important; padding-right: 0 !important }
        img.kmImage { width: 100% !important }
        td.kmMobileStretch { padding-left: 0 !important; padding-right: 0 !important }
        table.kmSplitContentLeftContentContainer, table.kmSplitContentRightContentContainer,
        table.kmColumnContainer, td.kmVerticalButtonBarContentOuter table.kmButtonBarContent,
        td.kmVerticalButtonCollectionContentOuter table.kmButtonCollectionContent,
        table.kmVerticalButton, table.kmVerticalButtonContent { width: 100% !important }
        td.kmButtonCollectionInner { padding: 9px !important }
        td.kmVerticalButtonIconContent, td.kmVerticalButtonTextContent,
        td.kmVerticalButtonContentOuter { padding-left: 0 !important; padding-right: 0 !important; padding-bottom: 9px !important }
        table.kmSplitContentLeftContentContainer td.kmTextContent,
        table.kmSplitContentRightContentContainer td.kmTextContent,
        table.kmColumnContainer td.kmTextContent,
        table.kmSplitContentLeftContentContainer td.kmImageContent,
        table.kmSplitContentRightContentContainer td.kmImageContent { padding-top: 9px !important }
        td.rowContainer.kmFloatLeft, td.rowContainer.kmFloatLeft.firstColumn,
        td.rowContainer.kmFloatLeft.lastColumn { float: left; clear: both; width: 100% !important }
        table.templateContainer, table.templateContainer.brandingContainer,
        div.templateContainer, div.templateContainer.brandingContainer,
        table.templateRow { max-width: 600px !important; width: 100% !important }
        h1 { font-size: 40px !important; line-height: 1.1 !important }
        h2 { font-size: 32px !important; line-height: 1.1 !important }
        h3 { font-size: 24px !important; line-height: 1.1 !important }
        h4 { font-size: 18px !important; line-height: 1.1 !important }
        td.kmTextContent { font-size: 14px !important; line-height: 1.3 !important }
        td.kmTextBlockInner td.kmTextContent { padding-right: 18px !important; padding-left: 18px !important }
        table.kmTableBlock.kmTableMobile td.kmTableBlockInner { padding-left: 9px !important; padding-right: 9px !important }
        table.kmTableBlock.kmTableMobile td.kmTableBlockInner .kmTextContent { font-size: 14px !important; line-height: 1.3 !important; padding-left: 4px !important; padding-right: 4px !important }
      }
    </style>

    <!--[if mso]>
    <style>
      .templateContainer { border: 0px none #aaaaaa; background-color: ${SHIRT5_PALETTE.pageBg}; border-radius: 0px; }
      #brandingContainer { background-color: transparent !important; border: 0; }
      .templateContainerInner { padding: 0px; }
    </style>
    <![endif]-->
  </head>
  <body style="margin:0;padding:0;background-color:${SHIRT5_PALETTE.pageBg}">
    ${bodyContent}
  </body>
</html>`;
}