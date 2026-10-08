import { renderEmailBody } from '../../rendering/render-email-document.js';
import {
  ANTHROPIC_BASE_CSS,
  ANTHROPIC_RESPONSIVE_CSS,
  anthropicDarkRules,
  prefixOgsc,
} from '../../rendering/email-styles/index.js';
import {
  CLAUDE_SUBJECT,
  CLAUDE_FONTS,
  CLAUDE_PALETTE,
} from './constants.js';
import type { ClaudeEmailData } from './types.js';
import { claudeEmailTemplate } from './index.js';

export interface RenderedClaudeEmail {
  subject: string;
  html: string;
}

const CLAUDE_MSO_RESET = `<style>li{text-align:-webkit-match-parent;display:list-item!important;text-indent:-1em!important}a{text-decoration:none!important}</style> <xml> <o:OfficeDocumentSettings> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml>`;
const CLAUDE_MSO_FILL = `<style>.keep-white{mso-style-textfill-type:gradient;mso-style-textfill-fill-gradientfill-stoplist:'0 \\#FFFFFF 0 100000\\,100000 \\#FFFFFF 0 100000';color:#000!important}</style>`;

/** Renders the claude (Anthropic) email. */
export function renderClaudeEmail(data: ClaudeEmailData): RenderedClaudeEmail {
  const body = renderEmailBody(claudeEmailTemplate(data));
  return {
    subject: CLAUDE_SUBJECT,
    html: wrapClaudeDocument(body),
  };
}

function wrapClaudeDocument(bodyContent: string): string {
  const darkRules = anthropicDarkRules({
    header: CLAUDE_PALETTE.dark.header,
    content: CLAUDE_PALETTE.dark.content,
    footer: CLAUDE_PALETTE.dark.footer,
    divider: CLAUDE_PALETTE.dark.divider,
    muted: CLAUDE_PALETTE.dark.muted,
    codeBg: CLAUDE_PALETTE.dark.codeBg,
    codeBorder: CLAUDE_PALETTE.dark.codeBorder,
    codeBar: CLAUDE_PALETTE.dark.codeBar,
    codeLine: CLAUDE_PALETTE.dark.codeLine,
    codeHi: CLAUDE_PALETTE.dark.codeHi,
    codeHiBar: CLAUDE_PALETTE.dark.codeHiBar,
    inlineCodeBg: CLAUDE_PALETTE.dark.inlineCodeBg,
    orange: CLAUDE_PALETTE.orange,
    cardBg: CLAUDE_PALETTE.cardBg,
  });

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

    <!--[if mso]>${CLAUDE_MSO_RESET}<![endif]-->

    <style>
      ${ANTHROPIC_BASE_CSS}
      ${ANTHROPIC_RESPONSIVE_CSS}
      @media(prefers-color-scheme:dark) {${darkRules}}
      ${prefixOgsc(darkRules)}
    </style>

    <!--[if mso]><style>table{mso-table-lspace:0;mso-table-rspace:0}</style><![endif]-->
    <!--[if gte mso 16]>${CLAUDE_MSO_FILL}<![endif]-->
  </head>
  <body style="width: 100%; font-family: ${CLAUDE_FONTS.body}; word-wrap: normal; word-spacing: normal; background: ${CLAUDE_PALETTE.pageBg}; margin: 0 auto !important; padding: 0 !important;" class="body">
    ${bodyContent}
  </body>
</html>`;
}