import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { runCampaign } from './run-pipeline.js';

const { sampleData } = getTemplate('hackernoon');
await runCampaign({
  templateName: 'hackernoon',
  data: sampleData,
  fileName: 'hackernoon-email.html',
});
