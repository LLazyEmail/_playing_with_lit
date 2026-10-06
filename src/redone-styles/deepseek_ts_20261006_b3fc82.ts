import { MOBILE_RESET_BASE } from './shared.js';

/**
 * Klaviyo mobile block (`@media only screen and (max-width:480px)`)
 * used by shirt1 and shirt5.
 */
export const KLAVIYO_MOBILE_CSS = `
  @media only screen and (max-width:480px) {
    ${MOBILE_RESET_BASE}
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
`;

/** MSO overrides for `.templateContainer`. */
export const KLAVIYO_MSO_CSS = `
  .templateContainer { border: 0px none #aaaaaa; background-color: #FFF; border-radius: 0px; }
  #brandingContainer { background-color: transparent !important; border: 0; }
  .templateContainerInner { padding: 0px; }
`;

/**
 * Klaviyo's "global reset" style block — appears in both shirt1 and shirt5,
 * just with different color values.
 */
export function klaviyoGlobalReset(opts: {
  pageBg: string;
  cardBg: string;
  headingColor: string;
  bodyColor: string;
  headingFont: string;
  bodyFont: string;
  linkColor: string;
}): string {
  const {
    pageBg,
    cardBg,
    headingColor,
    bodyColor,
    headingFont,
    bodyFont,
    linkColor,
  } = opts;
  return `
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
    #bodyCell { padding-top: 50px; padding-left: 20px; padding-bottom: 20px; padding-right: 20px; border-top: 0 }
    body, #bodyTable { background-color: ${pageBg} }
    .templateContainer { border: 0 none #F00; background-color: ${cardBg}; border-radius: 0 }
    .brandingContainer { background-color: transparent; border: 0 }
    .templateContainerInner { padding: 0 }
    h1, h2, h3, h4 { color: ${headingColor} !important; font-family: ${headingFont}; font-weight: normal; line-height: 1.1; letter-spacing: 0; text-align: left }
    h1 { font-size: 40px; margin: 0 0 20px 0 }
    h2 { font-size: 32px; font-weight: bold; margin: 0 0 16px 0 }
    h3 { font-size: 24px; font-weight: bold; margin: 0 0 12px 0 }
    h4 { font-size: 18px; margin: 0 0 9px 0 }
    .rowContainer .kmTextContent { color: ${bodyColor}; font-family: ${bodyFont}; font-size: 12px; line-height: 1.3; letter-spacing: 0; text-align: left; max-width: 100%; word-wrap: break-word }
    .rowContainer .kmTextContent a,
    .rowContainer .kmTextContent a:link,
    .rowContainer .kmTextContent a:visited,
    .rowContainer .kmTextContent a .yshortcuts { color: ${linkColor}; font-weight: lighter; text-decoration: underline }
    .rowContainer .kmTextContent .kmParagraph { padding-bottom: 9px }
    .kmImageContent { padding: 0; font-size: 0 }
    .kmImage { padding-bottom: 0; display: inline !important; vertical-align: top; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; font-size: 12px; width: 100% }
    .kmMobileOnly { display: none }
    .kmHide { display: none }
  `;
}