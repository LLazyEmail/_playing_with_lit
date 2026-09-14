import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { writeGeneratedEmail } from 'markup-generator';
import { zurbData } from './content/zurb-data.js';
import { ZurbRenderer } from '../templates/zurb/zurb.renderer.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';

const renderedHtml = await finalizeHtml(new ZurbRenderer().render(zurbData));
const mode = isMinifyEnabled() ? 'minified' : 'debug';
await writeGeneratedEmail({
  content: renderedHtml,
  fileName: 'zurb-email.html',
  label: `Zurb / Foundation email rendered (${mode})`,
});
