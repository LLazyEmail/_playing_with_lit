import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { runCampaign } from './run-pipeline.js';

const { sampleData } = getTemplate('zurb');
await runCampaign({
  templateName: 'zurb',
  data: sampleData,
  fileName: 'zurb-email.html',
});
