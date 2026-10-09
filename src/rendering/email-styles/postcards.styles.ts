import { APPLE_DETECTOR_RESET } from './shared.js';

/**
 * Styles for the Postcards/Designmodo shell — `lottie`.
 */

export const POSTCARDS_RESET_CSS = `
  #outlook a { padding: 0; }
  .ReadMsgBody, .ExternalClass { width: 100%; }
  .ExternalClass, .ExternalClass p, .ExternalClass td,
  .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height: 100%; }
  div[style*="margin: 14px 0"], div[style*="margin: 16px 0"] { margin: 0 !important; }
  table, td { mso-table-lspace: 0; mso-table-rspace: 0; }
  table, tr, td { border-collapse: collapse; }
  body, td, th, p, div, li, a, span { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; }
  img { border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; }
  ${APPLE_DETECTOR_RESET}
  body { margin: 0; padding: 0; width: 100% !important; -webkit-font-smoothing: antialiased; }
  .pc-gmail-fix { display: none; display: none !important; }
  @media screen and (min-width: 621px) {
    .pc-email-container { width: 620px !important; }
  }
`;

export const POSTCARDS_SM_CSS = `
  @media screen and (max-width:620px) {
    .pc-sm-p-20-25-35 { padding: 20px 25px 35px !important }
    .pc-sm-mw-100pc { max-width: 100% !important }
    .pc-sm-w-100pc { width: 100% }
    .pc-sm-ta-center { text-align: center !important }
    .pc-sm-p-30-10-15 { padding: 20px 10px 15px !important }
    .pc-sm-mw-50pc { max-width: 50% !important }
    .pc-sm-p-25-10-15 { padding: 25px 10px 15px !important }
    .pc-sm-p-20-20-0 { padding: 20px 20px 0 !important }
    .pc-sm-p-16-20-20 { padding: 16px 20px 20px !important }
    .pc-sm-p-35-30 { padding: 35px 30px !important }
    .pc-sm-p-35-25-30 { padding: 35px 25px 30px !important }
    .pc-sm-p-38-30-40 { padding: 38px 30px 40px !important }
    .pc-sm-p-34-30-55 { padding: 34px 30px 55px !important }
    .pc-sm-h-53 { height: 53px !important }
  }
`;

export const POSTCARDS_XS_CSS = `
  @media screen and (max-width:525px) {
    .pc-xs-p-15 { padding: 15px !important }
    .pc-xs-fs-30 { font-size: 30px !important }
    .pc-xs-lh-42 { line-height: 42px !important }
    .pc-xs-br-disabled br { display: none !important }
    .pc-xs-p-20-0-5 { padding: 20px 0 5px !important }
    .pc-xs-mw-100pc { max-width: 100% !important }
    .pc-xs-m-0-auto { float: none !important; margin: 0 auto !important }
    .pc-xs-w-100pc { width: 100% !important }
    .pc-xs-p-15-0-5 { padding: 15px 0 5px !important }
    .pc-xs-p-10-0 { padding: 10px 0 !important }
    .pc-xs-p-25-20 { padding: 25px 20px !important }
    .pc-xs-p-25-15-20 { padding: 25px 15px 20px !important }
    .pc-xs-fs-24 { font-size: 24px !important }
    .pc-xs-lh-34 { line-height: 34px !important }
    .pc-xs-fs-14 { font-size: 14px !important }
    .pc-xs-p-25-20-20 { padding: 25px 20px 20px !important }
    .pc-xs-h-43 { height: 43px !important }
  }
`;

export function postcardsKarlaFontFaces(
  weights: readonly { weight: number; woff: string; woff2: string }[]
): string {
  return weights
    .map(
      (w) => `@font-face {
        font-family: 'Karla';
        font-style: normal;
        font-weight: ${w.weight};
        src: url('${w.woff}') format('woff'), url('${w.woff2}') format('woff2');
      }`
    )
    .join('\n');
}

/**
 * The two URL‑encoded comment markers Postcards uses to preserve its
 * own conditional comments. Kept as constants so the renderer stays
 * readable and the encoded strings live in exactly one place.
 */
export const POSTCARDS_ENCODED_IF_NOT_MSO =
  '<!--{C}%3C!%2D%2D%7BC%7D%253C!%252D%252D%257BC%257D%25253C!%25252D%25252D%25255Bif%252520!mso%25255D%25253E%25253C!%25252D%25252D%25253E%252D%252D%253E%2D%2D%3E-->';
export const POSTCARDS_ENCODED_ENDIF =
  '<!--{C}%3C!%2D%2D%7BC%7D%253C!%252D%252D%257BC%257D%25253C!%25252D%25252D%25253C!%25255Bendif%25255D%25252D%25252D%25253E%252D%252D%253E%2D%2D%3E-->';
export const POSTCARDS_ENCODED_MSO_STYLE =
  '<!--{C}%3C!%2D%2D%7BC%7D%253C!%252D%252D%257BC%257D%25253C!%25252D%25252D%25255Bif%252520mso%25255D%25253E%25250A%252520%252520%252520%252520%25253Cstyle%252520type%25253D%252522text%25252Fcss%252522%25253E%25250A%252520%252520%252520%252520%252520%252520%252520%252520.pc-fb-font%252520%25257B%25250A%252520%252520%252520%252520%252520%252520%252520%252520%252520%252520%252520%252520font-family%25253A%252520Helvetica%25252C%252520Arial%25252C%252520sans-serif%252520!important%25253B%25250A%252520%252520%252520%252520%252520%252520%252520%252520%25257D%25250A%252520%252520%252520%252520%25253C%25252Fstyle%25253E%25250A%252520%252520%252520%252520%25253C!%25255Bendif%25255D%25252D%25252D%25253E%252D%252D%253E%2D%2D%3E-->';
export const POSTCARDS_ENCODED_MSO_PIXELS =
  '<!--{C}%3C!%2D%2D%7BC%7D%253C!%252D%252D%257BC%257D%25253C!%25252D%25252D%25255Bif%252520gte%252520mso%2525209%25255D%25253E%25253Cxml%25253E%25253Co%25253AOfficeDocumentSettings%25253E%25253Co%25253AAllowPNG%25252F%25253E%25253Co%25253APixelsPerInch%25253E96%25253C%25252Fo%25253APixelsPerInch%25253E%25253C%25252Fo%25253AOfficeDocumentSettings%25253E%25253C%25252Fxml%25253E%25253C!%25255Bendif%25255D%25252D%25252D%25253E%252D%252D%253E%2D%2D%3E-->';