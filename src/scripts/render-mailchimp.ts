import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { getTemplate } from '../rendering/template-registry.js';
import { runCampaign } from './run-pipeline.js';

const { sampleData } = getTemplate('mailchimp');
await runCampaign({
  templateName: 'mailchimp',
  data: sampleData,
  fileName: 'mailchimp-email.html',
});
