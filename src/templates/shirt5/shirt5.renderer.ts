import { renderEmailBody } from '../../rendering/render-email-document.js';
import { shirt5Head } from '../../rendering/email-styles/index.js';
import { SHIRT5_SUBJECT, SHIRT5_PALETTE } from './constants.js';
import type { Shirt5EmailData } from './types.js';
import { shirt5EmailTemplate } from './index.js';

export interface RenderedShirt5Email {
  subject: string;
  html: string;
}

/** Renders the shirt5 (Buck Mason / Klaviyo) email. */
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
  ${shirt5Head(SHIRT5_SUBJECT, SHIRT5_PALETTE.pageBg)}
  <body style="margin:0;padding:0;background-color:${SHIRT5_PALETTE.pageBg}">
    ${bodyContent}
  </body>
</html>`;
}
