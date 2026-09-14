import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { nomoretogoEmailTemplate } from '../templates/nomoretogo-email.js';
import { nomoretogoRenderToString } from '../validation/guarded-render.js';
import { nomoretogoData } from './content/nomoretogo-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const template = nomoretogoEmailTemplate(nomoretogoData);
const renderedHtml = await finalizeHtml(
  nomoretogoRenderToString(template, nomoretogoData)
);

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'nomoretogo-email.html',
  label: `No More To-Go email rendered (${mode})`,
});
