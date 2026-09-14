import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { mysteriumData } from './content/mysterium-data.js';
import { runCampaign } from './run-pipeline.js';

await runCampaign({
  templateName: 'hackernoon',
  data: mysteriumData,
  fileName: 'mysterium-email.html',
});
