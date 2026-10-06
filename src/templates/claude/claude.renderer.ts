import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import {
  CLAUDE_SUBJECT,
  CLAUDE_FONTS,
  CLAUDE_PALETTE,
  CLAUDE_DARK_MODE_RULES,
} from './constants.js';
import type { ClaudeEmailData } from './types.js';
import { claudeEmailTemplate } from './index.js';

export interface RenderedClaudeEmail {
  subject: string;
  html: string;
}

/**
 * Renders the claude (Anthropic) email.
 *
 * Keeps the original XHTML shell, the `color-scheme` meta tags, the
 * `@media(max-width:499px)` responsive block, the `@media(prefers-color-
 * scheme:dark)` block, AND the `[data-ogsc]` Outlook.com mirror — so dark
 * mode works in Apple Mail, iOS, modern clients, and Outlook.com alike.
 */
export function renderClaudeEmail(data: ClaudeEmailData): RenderedClaudeEmail {
  const body = renderEmailBody(claudeEmailTemplate(data));
  return {
    subject: CLAUDE_SUBJECT,
    html: wrapClaudeDocument(body),
  };
}

function wrapClaudeDocument(bodyContent: string): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" xml:lang="en" style="color-scheme: light dark; supported-color-schemes: light dark;">
  <head>
    <title>${CLAUDE_SUBJECT}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Anthropic Email Template">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">

    <!--[if mso]><style>li{text-align:-webkit-match-parent;display:list-item!important;text-indent:-1em!important}a{text-decoration:none!important}</style> <xml> <o:OfficeDocumentSettings> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->

    <style>
      :root { color-scheme: light dark; supported-color-schemes: light dark }
      body {
        width: 100%;
        font-family: ${CLAUDE_FONTS.body};
        word-wrap: normal;
        word-spacing: normal
      }
      div[style*='margin: 16px 0'] { margin: 0 !important }
      #MessageViewBody, #MessageWebViewDiv { min-width: 100vw; margin: 0 !important; zoom: 1 !important; width: 100% !important }
      a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important }
      #MessageViewBody a { color: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; text-decoration: none !important }
      u+.body a { color: inherit; text-decoration: none; font-size: inherit; font-weight: inherit; line-height: inherit }
      span.MsoHyperlink { color: inherit !important; mso-style-priority: 99 !important }
      span.MsoHyperlinkFollowed { color: inherit !important; mso-style-priority: 99 !important }

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

      @media(prefers-color-scheme:dark) {
${CLAUDE_DARK_MODE_RULES}
      }

      [data-ogsc] .header { background-color: ${CLAUDE_PALETTE.dark.header} !important }
      [data-ogsc] .content, [data-ogsc] .light-bg-primary { background-color: ${CLAUDE_PALETTE.dark.content} !important }
      [data-ogsc] .footer { background-color: ${CLAUDE_PALETTE.dark.footer} !important }
      [data-ogsc] h1, [data-ogsc] h2, [data-ogsc] h3, [data-ogsc] h4, [data-ogsc] p, [data-ogsc] a, [data-ogsc] ol, [data-ogsc] li { color: #fff !important }
      [data-ogsc] .primaryColor { color: ${CLAUDE_PALETTE.dark.footer} !important }
      [data-ogsc] .whiteFont { color: #fff !important }
      [data-ogsc] .orange { color: ${CLAUDE_PALETTE.orange} !important }
      [data-ogsc] .footerCopy { color: #b0aea5 !important }
      [data-ogsc] .dark-logo { display: block !important }
      [data-ogsc] .light-logo { display: none !important }
      [data-ogsc] .mainCta { background-color: ${CLAUDE_PALETTE.cardBg} !important }
      [data-ogsc] .ev-divider { background-color: ${CLAUDE_PALETTE.dark.divider} !important }
      [data-ogsc] .ev-divider-top { border-top-color: ${CLAUDE_PALETTE.dark.divider} !important }
      [data-ogsc] .ev-muted { color: ${CLAUDE_PALETTE.dark.muted} !important }
      [data-ogsc] .cd-card { background-color: ${CLAUDE_PALETTE.dark.codeBg} !important; border-color: ${CLAUDE_PALETTE.dark.codeBorder} !important }
      [data-ogsc] .cd-bar { border-bottom-color: ${CLAUDE_PALETTE.dark.codeBar} !important }
      [data-ogsc] .cd-chrome { color: #87867f !important }
      [data-ogsc] .cd-dot { background-color: #4a4845 !important }
      [data-ogsc] .cd-line { color: ${CLAUDE_PALETTE.dark.codeLine} !important }
      [data-ogsc] .cd-hi { background-color: ${CLAUDE_PALETTE.dark.codeHi} !important; border-left-color: ${CLAUDE_PALETTE.dark.codeHiBar} !important }
      [data-ogsc] .cd-t-text { color: ${CLAUDE_PALETTE.dark.codeLine} !important }
      [data-ogsc] .cd-t-punct { color: #6e6d66 !important }
      [data-ogsc] .cd-t-key { color: #e3dacc !important }
      [data-ogsc] .cd-t-keyword { color: #e3dacc !important }
      [data-ogsc] .cd-t-str { color: ${CLAUDE_PALETTE.dark.codeHiBar} !important }
      [data-ogsc] .cd-t-num { color: #6a9bcc !important }
      [data-ogsc] .cd-t-comment { color: #87867f !important }
      [data-ogsc] .ev-inline-code { background-color: ${CLAUDE_PALETTE.dark.inlineCodeBg} !important }
      [data-ogsc] .ev-img-outline { border-color: ${CLAUDE_PALETTE.dark.codeBorder} !important }
      [data-ogsc] .wbg-1c1c1b { background-color: #1c1c1b !important }
      [data-ogsc] .ev-bubble { background-color: ${CLAUDE_PALETTE.dark.codeBorder} !important }
      [data-ogsc] .body, [data-ogsc] body { background-color: ${CLAUDE_PALETTE.dark.content} !important }
    </style>

    <!--[if mso]><style>table{mso-table-lspace:0;mso-table-rspace:0}</style><![endif]-->
    <!--[if gte mso 16]><style>.keep-white{mso-style-textfill-type:gradient;mso-style-textfill-fill-gradientfill-stoplist:'0 \\#FFFFFF 0 100000\\,100000 \\#FFFFFF 0 100000';color:#000!important}</style><![endif]-->
  </head>
  <body style="width: 100%; font-family: ${CLAUDE_FONTS.body}; word-wrap: normal; word-spacing: normal; background: ${CLAUDE_PALETTE.pageBg}; margin: 0 auto !important; padding: 0 !important;" class="body">
    ${bodyContent}
  </body>
</html>`;
}