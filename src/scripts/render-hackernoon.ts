import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const { renderer, validator, sampleData } = getTemplate('hackernoon');
const renderedHtml = await finalizeHtml(renderer.render(validator.parse(sampleData)));

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'hackernoon-email.html',
  label: `Hacker Noon email rendered (${mode})`,
});
