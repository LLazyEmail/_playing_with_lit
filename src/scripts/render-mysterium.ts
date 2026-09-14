import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { mysteriumData } from './content/mysterium-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const { renderer, validator } = getTemplate('hackernoon');
const renderedHtml = await finalizeHtml(
  renderer.render(validator.parse(mysteriumData))
);

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'mysterium-email.html',
  label: `Hacker Noon (mysterium) email rendered (${mode})`,
});
