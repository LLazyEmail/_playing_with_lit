import { renderEmailBody } from '../../rendering/render-email-document.js';
import { claudeHead } from '../../rendering/email-styles/index.js';
import { CLAUDE_SUBJECT, CLAUDE_FONTS, CLAUDE_PALETTE } from './constants.js';
import type { ClaudeEmailData } from './types.js';
import { claudeEmailTemplate } from './index.js';

export interface RenderedClaudeEmail {
  subject: string;
  html: string;
}

/** Renders the claude (Anthropic) email. */
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
  ${claudeHead({
    title: CLAUDE_SUBJECT,
    orange: CLAUDE_PALETTE.orange,
    cardBg: CLAUDE_PALETTE.cardBg,
    dark: CLAUDE_PALETTE.dark,
  })}
  <body style="width: 100%; font-family: ${CLAUDE_FONTS.body}; word-wrap: normal; word-spacing: normal; background: ${CLAUDE_PALETTE.pageBg}; margin: 0 auto !important; padding: 0 !important;" class="body">
    ${bodyContent}
  </body>
</html>`;
}
