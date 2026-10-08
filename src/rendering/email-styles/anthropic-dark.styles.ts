import { APPLE_DETECTOR_RESET } from './shared.js';

/**
 * Dark‑mode + reset CSS for the Anthropic shell — `claude`.
 * The dark rules are emitted twice: once under `@media(prefers-color-scheme:dark)`
 * and once under `[data-ogsc]` (Outlook.com forced dark mode).
 */

export const ANTHROPIC_BASE_CSS = `
  :root { color-scheme: light dark; supported-color-schemes: light dark }
  body { width: 100%; font-family: Georgia, 'Times New Roman', serif; word-wrap: normal; word-spacing: normal }
  div[style*='margin: 16px 0'] { margin: 0 !important }
  #MessageViewBody, #MessageWebViewDiv { min-width: 100vw; margin: 0 !important; zoom: 1 !important; width: 100% !important }
  ${APPLE_DETECTOR_RESET}
`;

export const ANTHROPIC_RESPONSIVE_CSS = `
  @media only screen and (max-width:499px) {
    .full-width { width: 100% !important }
    .pd0 { padding: 0 !important }
    .hide { display: none !important }
    .expand { display: block !important; width: 100% !important }
    .center { text-align: center !important }
    .left { text-align: left !important }
    .block, .show { display: block !important }
    .container { padding-left: 16px !important; padding-right: 16px !important }
    .container-header { padding: 24px 16px !important }
    h1 { font-size: 28px !important; line-height: 34px !important }
    h2 { font-size: 24px !important; line-height: 30px !important }
    h3 { font-size: 18px !important; line-height: 24px !important }
    .p0 { padding: 0 !important }
    .maxWidthFull { max-width: 602px !important }
    .marAuto { margin: 0 auto !important }
    .padLR0 { padding-left: 0 !important; padding-right: 0 !important }
    .padLR16 { padding-left: 16px !important; padding-right: 16px !important }
    .padT0 { padding-top: 0 !important }
    .pt-8 { padding-top: 8px !important }
    .pt-16 { padding-top: 16px !important }
    .pt-24 { padding-top: 24px !important }
    .pt-36 { padding-top: 36px !important }
    .pb-24 { padding-bottom: 24px !important }
    .mGap-16 { height: 16px !important }
    .mGap-24 { height: 24px !important }
    .mGap-36 { height: 36px !important }
    .ev-h-90 { font-size: 48px !important; line-height: 58px !important }
    .ev-h-80 { font-size: 40px !important; line-height: 48px !important }
    .ev-h-70 { font-size: 32px !important; line-height: 38px !important }
    .ev-h-60 { font-size: 24px !important; line-height: 29px !important }
    .ev-h-50 { font-size: 20px !important; line-height: 24px !important }
    .ev-h-40 { font-size: 20px !important; line-height: 24px !important }
    .promptImg { width: 24px !important; max-width: 24px !important; vertical-align: top !important }
    .promptImg img { width: 24px !important; max-width: 24px !important }
    .rm-border { border: none !important }
    .border-bottom { border-bottom: 1px solid #d9d8d5 !important }
    .pt-64 { padding-top: 64px !important }
    .pb-40 { padding-bottom: 40px !important }
    .pb-36 { padding-bottom: 36px !important }
    .container-header-evo { padding: 40px 14px 12px !important }
  }
`;

/**
 * Dark‑mode rules for the Anthropic shell.
 * Same payload is emitted under both selectors so we generate it once.
 */
export function anthropicDarkRules(p: {
  header: string;
  content: string;
  footer: string;
  divider: string;
  muted: string;
  codeBg: string;
  codeBorder: string;
  codeBar: string;
  codeLine: string;
  codeHi: string;
  codeHiBar: string;
  inlineCodeBg: string;
  orange: string;
  cardBg: string;
}): string {
  return `
    .header { background-color: ${p.header} !important }
    .content, .light-bg-primary { background-color: ${p.content} !important }
    .footer { background-color: ${p.footer} !important }
    h1, h2, h3, h4, p, a, ol, li { color: #fff !important }
    .primaryColor { color: ${p.footer} !important }
    .whiteFont { color: #fff !important }
    .orange { color: ${p.orange} !important }
    .footerCopy { color: #b0aea5 !important }
    .dark-logo { display: block !important }
    .light-logo { display: none !important }
    .mainCta { background-color: ${p.cardBg} !important }
    .ev-divider { background-color: ${p.divider} !important }
    .ev-divider-top { border-top-color: ${p.divider} !important }
    .ev-muted { color: ${p.muted} !important }
    .cd-card { background-color: ${p.codeBg} !important; border-color: ${p.codeBorder} !important }
    .cd-bar { border-bottom-color: ${p.codeBar} !important }
    .cd-chrome { color: #87867f !important }
    .cd-dot { background-color: #4a4845 !important }
    .cd-line { color: ${p.codeLine} !important }
    .cd-hi { background-color: ${p.codeHi} !important; border-left-color: ${p.codeHiBar} !important }
    .cd-t-text { color: ${p.codeLine} !important }
    .cd-t-punct { color: #6e6d66 !important }
    .cd-t-key { color: #e3dacc !important }
    .cd-t-keyword { color: #e3dacc !important }
    .cd-t-str { color: ${p.codeHiBar} !important }
    .cd-t-num { color: #6a9bcc !important }
    .cd-t-comment { color: #87867f !important }
    .ev-inline-code { background-color: ${p.inlineCodeBg} !important }
    .ev-img-outline { border-color: ${p.codeBorder} !important }
    .wbg-1c1c1b { background-color: #1c1c1b !important }
    .ev-bubble { background-color: ${p.codeBorder} !important }
    .body, body { background-color: ${p.content} !important }
  `;
}

/** Rewrites a rule block so every selector is prefixed with `[data-ogsc] `. */
export function prefixOgsc(css: string): string {
  return css
    .split('\n')
    .map((line) => {
      const m = line.match(/^(\s*)([^@{}]+?)\s*\{/);
      if (!m) return line;
      const [, indent, selectors] = m;
      const prefixed = selectors
        .split(',')
        .map((s) => `[data-ogsc] ${s.trim()}`)
        .join(', ');
      return `${indent}${prefixed} {`;
    })
    .join('\n');
}