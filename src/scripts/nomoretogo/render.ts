import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../../rendering/template-registry.js';
import { runViaGenerator } from '../../generation/preferred-generator.js';

const { sampleData } = getTemplate('nomoretogo');

await runViaGenerator({
  templateId: 'nomoretogo',
  payload: sampleData,
  fileName: 'nomoretogo-email.html',
});
