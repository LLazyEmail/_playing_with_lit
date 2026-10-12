import '@lit-labs/ssr/lib/install-global-dom-shim.js';

// Side-effect: registers every template with templateRegistry.
// Required before getTemplate / buildCatalogFromRegistry.
import '../../templates/register-all.js';

import { getTemplate } from '../../rendering/template-registry.js';
import { runViaGenerator } from '../../generation/preferred-generator.js';

const { sampleData } = getTemplate('nomoretogo');

await runViaGenerator({
  templateId: 'nomoretogo',
  payload: sampleData,
  fileName: 'nomoretogo-email.html',
});
