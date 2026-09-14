import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { mailchimpEmailTemplate } from '../templates/mailchimp-email.js';
import { mailchimpRenderToString } from '../validation/guarded-render.js';
import { mailchimpData } from './content/mailchimp-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const template = mailchimpEmailTemplate(mailchimpData);
const renderedHtml = await finalizeHtml(
  mailchimpRenderToString(template, mailchimpData)
);

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'mailchimp-email.html',
  label: `Mailchimp email rendered (${mode})`,
});
