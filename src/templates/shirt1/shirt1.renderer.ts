import { renderEmailBody } from '../../rendering/render-email-document.js';
import { shirt1Head } from '../../rendering/email-styles/index.js';
import { SHIRT1_SUBJECT, SHIRT1_PALETTE } from './constants.js';
import type { Shirt1EmailData } from './types.js';
import { shirt1EmailTemplate } from './index.js';

export interface RenderedShirt1Email {
  subject: string;
  html: string;
}

/** Renders the shirt1 (hnst-tee) email. */
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
  ${shirt1Head({
    title: SHIRT1_SUBJECT,
    pageBg: SHIRT1_PALETTE.pageBg,
    cardBg: SHIRT1_PALETTE.panelBg,
    text: SHIRT1_PALETTE.text,
    headingFont: SHIRT1_PALETTE.headingFont,
    bodyFont: SHIRT1_PALETTE.bodyFont,
  })}
  <body>
    ${bodyContent}
  </body>
</html>`;
}
