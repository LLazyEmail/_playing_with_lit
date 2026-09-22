import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { runCampaign } from './run-pipeline.js';

const { sampleData } = getTemplate('google');
await runCampaign({
  templateName: 'google',
  data: sampleData,
  fileName: 'google-email.html',
});
