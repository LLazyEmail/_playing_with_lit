import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { flatFile7Data } from './content/flat-file-7-data.js';
import { runCampaign } from './run-pipeline.js';

await runCampaign({
  templateName: 'hackernoon',
  data: flatFile7Data,
  fileName: 'flat-file-7-email.html',
});
