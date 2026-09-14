import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { zurbData } from './content/zurb-data.js';
import { ZurbRenderer } from '../templates/zurb/zurb.renderer.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';
import { writeGeneratedEmail } from './write-generated-email.js';

const renderedHtml = await finalizeHtml(new ZurbRenderer().render(zurbData));
const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'zurb-email.html',
  label: `Zurb / Foundation email rendered (${mode})`,
});
