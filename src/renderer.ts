import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';
import type { MailchimpEmailData } from './types.js';
import { MAILCHIMP_STYLES } from './templates/styles/mailchimp.styles.js';

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

// ---------------------------------------------------------------------------
// Mailchimp-style product email renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the Mailchimp-style email body) to a
 * complete, email-client-compatible HTML string.
 *
 * The document shell — DOCTYPE, meta tags, Google Fonts link, and the
 * Mailchimp-specific CSS — is built here rather than inside the Lit template
 * so the SSR parser only handles body content.
 *
 * @param template  Lit TemplateResult produced by {@link mailchimpEmailTemplate}.
 * @param data      Mailchimp email data (title used in the &lt;title&gt; tag).
 */
export function mailchimpRenderToString(
  template: TemplateResult,
  data: Pick<MailchimpEmailData, 'title'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>${data.title}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--[if !mso]><!-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <style type="text/css">
      body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
    </style>
    <![endif]-->
    <style type="text/css">${MAILCHIMP_STYLES}</style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}
