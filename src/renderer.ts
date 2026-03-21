import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';
import type { EmailData } from './types.js';

// ---------------------------------------------------------------------------
// CSS shared by all newsletter emails
// ---------------------------------------------------------------------------

const EMAIL_STYLES = `
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
  }
  .email-wrapper {
    width: 100%;
    background-color: #f4f4f4;
    padding: 20px 0;
  }
  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  /* Header */
  .header {
    background-color: #1a73e8;
    padding: 30px 40px;
    text-align: center;
  }
  .header img {
    max-width: 160px;
    height: auto;
  }
  .header h1 {
    color: #ffffff;
    font-size: 26px;
    margin: 16px 0 0;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  /* Hero */
  .hero {
    background-color: #e8f0fe;
    padding: 40px;
    text-align: center;
  }
  .hero h2 {
    color: #1a73e8;
    font-size: 22px;
    margin: 0 0 12px;
  }
  .hero p {
    color: #444444;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  /* Content */
  .content {
    padding: 40px;
  }
  .content h3 {
    color: #222222;
    font-size: 18px;
    margin: 0 0 12px;
  }
  .content p {
    color: #555555;
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 20px;
  }
  /* CTA Button */
  .cta-container {
    text-align: center;
    padding: 0 40px 40px;
  }
  .cta-button {
    display: inline-block;
    background-color: #1a73e8;
    color: #ffffff;
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  /* Articles */
  .articles {
    padding: 0 40px 40px;
    border-top: 1px solid #eeeeee;
  }
  .articles h3 {
    color: #222222;
    font-size: 18px;
    margin: 30px 0 16px;
  }
  .article-item {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
  }
  .article-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .article-item h4 {
    color: #1a73e8;
    font-size: 15px;
    margin: 0 0 6px;
  }
  .article-item h4 a {
    color: inherit;
    text-decoration: none;
  }
  .article-item p {
    color: #666666;
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
  }
  /* Footer */
  .footer {
    background-color: #f8f8f8;
    padding: 24px 40px;
    text-align: center;
    border-top: 1px solid #eeeeee;
  }
  .footer p {
    color: #999999;
    font-size: 12px;
    line-height: 1.6;
    margin: 0 0 8px;
  }
  .footer a {
    color: #1a73e8;
    text-decoration: none;
  }
`;

// ---------------------------------------------------------------------------
// Renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (expected to be the email body content)
 * to a complete HTML email string.
 *
 * Internally uses `@lit-labs/ssr` so no browser DOM is required – this runs
 * entirely in Node.js, making it suitable for server-side email generation.
 *
 * @param template  Lit TemplateResult for the email body content.
 * @param data      Email data used to populate the document <head>.
 */
export function renderToString(
  template: TemplateResult,
  data: Pick<EmailData, 'brandName'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

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

/**
 * Removes Lit SSR hydration comment markers from an HTML string.
 * These are only useful for client-side hydration and should be stripped
 * before sending email.
 */
function stripLitMarkers(html: string): string {
  return html
    .replace(/<!--lit-part[^>]*-->/g, '')
    .replace(/<!--\/lit-part-->/g, '')
    .replace(/<!--lit-node[^>]*-->/g, '');
}
