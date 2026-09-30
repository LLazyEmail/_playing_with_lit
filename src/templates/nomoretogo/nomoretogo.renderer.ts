import type { TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { NOMORETOGO_STYLES } from '../styles/nomoretogo.styles.js';
import { nomoretogoEmailTemplate } from './index.js';

/**
 * No More To-Go document shell. The original doctype, meta tags, and font
 * import stay a plain string so Lit only renders the body.
 */
export function nomoretogoRenderToString(
  template: TemplateResult,
  data: Pick<NomoretogoEmailData, 'title'>
): string {
  const bodyContent = renderEmailBody(template);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="email=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>${data.title}</title>
    <!--[if !mso]><!-->
    <style type="text/css">
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
    </style>
    <!--<![endif]-->
    <style type="text/css">${NOMORETOGO_STYLES}</style>
  </head>
  <body class="mlBodyBackground" style="padding:0;margin:0;-webkit-font-smoothing:antialiased;background-color:#f6f8f9;-webkit-text-size-adjust:none;">
    ${bodyContent}
  </body>
</html>`;
}

export class NomoretogoRenderer extends Renderer<NomoretogoEmailData> {
  render(data: NomoretogoEmailData): string {
    return nomoretogoRenderToString(nomoretogoEmailTemplate(data), data);
  }
}
