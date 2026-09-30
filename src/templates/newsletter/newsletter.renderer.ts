import type { TemplateResult } from 'lit';
import type { EmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { EMAIL_STYLES } from '../styles/email.styles.js';
import { newsletterEmailTemplate } from './index.js';

/** Generic newsletter document shell. */
export function renderToString(
  template: TemplateResult,
  data: Pick<EmailData, 'brandName'>
): string {
  const bodyContent = renderEmailBody(template);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${data.brandName} – Monthly Newsletter</title>
    <style>${EMAIL_STYLES}</style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}

export class NewsletterRenderer extends Renderer<EmailData> {
  render(data: EmailData): string {
    return renderToString(newsletterEmailTemplate(data), data);
  }
}
