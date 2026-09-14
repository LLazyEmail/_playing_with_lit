import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { runCampaign } from './run-pipeline.js';

const { sampleData } = getTemplate('nomoretogo');
await runCampaign({
  templateName: 'nomoretogo',
  data: sampleData,
  fileName: 'nomoretogo-email.html',
});
