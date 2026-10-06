/**
 * Cross‑template reset fragments shared by every email shell.
 * Anything that appears in *more than two* templates belongs here.
 */

export const OUTLOOK_RESET = `
  #outlook a { padding: 0 }
  .ReadMsgBody { width: 100% }
  .ExternalClass { width: 100% }
  body { margin: 0; padding: 0 }
  a { word-wrap: break-word !important; max-width: 100% }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; max-width: 100% }
  table, td { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; table-layout: fixed }
  p { margin: 0; padding-bottom: 1em }
  p:last-child { padding-bottom: 0 }
`;

export const APPLE_DETECTOR_RESET = `
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important }
  u + .body a { color: inherit; text-decoration: none }
  span.MsoHyperlink { color: inherit !important; mso-style-priority: 99 !important }
  span.MsoHyperlinkFollowed { color: inherit !important; mso-style-priority: 99 !important }
  div[style*="margin:16px 0"] { margin: 0 !important }
`;

export const MOBILE_RESET_BASE = `
  body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: none !important }
  body { width: 100% !important; min-width: 100% !important }
`;

/** The usual `<style type="text/css">` wrapper. */
export function styleTag(css: string): string {
  return `<style type="text/css">${css}</style>`;
}

/** Wrap CSS in an mso‑only conditional comment. */
export function msoStyle(css: string): string {
  return `<!--[if mso]><style>${css}</style><![endif]-->`;
}