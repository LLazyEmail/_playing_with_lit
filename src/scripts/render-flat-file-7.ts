import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { flatFile7Data } from './content/flat-file-7-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const { renderer, validator } = getTemplate('hackernoon');
const renderedHtml = await finalizeHtml(
  renderer.render(validator.parse(flatFile7Data))
);

const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'flat-file-7-email.html',
  label: `Hacker Noon (flat_file_7) email rendered (${mode})`,
});
