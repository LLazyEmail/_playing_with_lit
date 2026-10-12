import { flatFile7Data } from '../src/samples/hackernoon/flat-file-7-data.js';
import { renderEntry } from './render-entry.js';

await renderEntry({
  templateId: 'hackernoon',
  label: 'flat-file-7',
  payload: flatFile7Data,
  defaultOutput: 'generated/flat-file-7-email.html',
});
