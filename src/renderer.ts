import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';
import type { EmailData, HackernoonEmailData, NomoretogoEmailData, MailchimpEmailData } from './types.js';
import { EMAIL_STYLES } from './templates/styles/email.styles.js';
import { HACKERNOON_STYLES } from './templates/styles/hackernoon.styles.js';
import { NOMORETOGO_STYLES } from './templates/styles/nomoretogo.styles.js';
import { MAILCHIMP_STYLES } from './templates/styles/mailchimp.styles.js';

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


// ---------------------------------------------------------------------------
// Hacker Noon renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the Hacker Noon email body) to a
 * complete, email-client-compatible HTML string that matches the structure
 * of the original `reference/hackernoon.html` reference file.
 *
 * The document shell is built here (DOCTYPE, xmlns attributes, MSO
 * conditionals, Google Fonts link, hackernoon-specific CSS) rather than
 * inside the Lit template so the SSR parser only handles body content.
 *
 * @param template  Lit TemplateResult produced by {@link hackernoonEmailTemplate}.
 * @param data      Hacker Noon email data (title used in the &lt;title&gt; tag).
 */
export function hackernoonRenderToString(
  template: TemplateResult,
  data: Pick<HackernoonEmailData, 'title'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <!-- NAME: 1 COLUMN -->
        <!--[if gte mso 15]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${data.title}</title>
    <style type="text/css">${HACKERNOON_STYLES}</style><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i" rel="stylesheet"><!--<![endif]--></head>
    <body style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;">
        ${bodyContent}
    </body>
</html>`;
}

// ---------------------------------------------------------------------------
// No More To-Go newsletter styles
// Ported from the email-specific <style> block in reference/nomoretogo.html
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// No More To-Go renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the No More To-Go email body) to a
 * complete, email-client-compatible HTML string that matches the structure of
 * the original `reference/nomoretogo.html` reference file.
 *
 * The document shell — DOCTYPE, meta tags, Google Fonts link, and
 * nomoretogo-specific CSS — is built here rather than inside the Lit template
 * so the SSR parser only handles body content.
 *
 * @param template  Lit TemplateResult produced by {@link nomoretogoEmailTemplate}.
 * @param data      No More To-Go email data (title used in the &lt;title&gt; tag).
 */
export function nomoretogoRenderToString(
  template: TemplateResult,
  data: Pick<NomoretogoEmailData, 'title'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

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

// ---------------------------------------------------------------------------
// Mailchimp-style product email styles
// Ported verbatim from the <style> block in reference/email-template-mailchimp (1).html
// ---------------------------------------------------------------------------



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
