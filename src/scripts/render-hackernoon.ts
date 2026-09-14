import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { hackernoonEmailTemplate } from '../templates/hackernoon-email.js';
import { hackernoonRenderToString } from '../validation/guarded-render.js';
import { hackernoonData } from './content/hackernoon-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const template = hackernoonEmailTemplate(hackernoonData);
const renderedHtml = await finalizeHtml(
  hackernoonRenderToString(template, hackernoonData)
);

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'hackernoon-email.html',
  label: `Hacker Noon email rendered (${mode})`,
});
