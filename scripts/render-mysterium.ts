import { mysteriumData } from '../src/samples/hackernoon/mysterium-data.js';
import { renderEntry } from './render-entry.js';

await renderEntry({
  templateId: 'hackernoon',
  label: 'mysterium',
  payload: mysteriumData,
  defaultOutput: 'generated/mysterium-email.html',
});
