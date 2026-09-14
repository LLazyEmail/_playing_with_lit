import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { hackernoonEmailTemplate } from '../templates/hackernoon-email.js';
import { hackernoonRenderToString } from '../validation/guarded-render.js';
import { mysteriumData } from './content/mysterium-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const template = hackernoonEmailTemplate(mysteriumData);
const renderedHtml = await finalizeHtml(
  hackernoonRenderToString(template, mysteriumData)
);

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'mysterium-email.html',
  label: `Hacker Noon (mysterium) email rendered (${mode})`,
});
