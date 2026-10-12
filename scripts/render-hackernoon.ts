import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('hackernoon');
await renderEntry({
  templateId: 'hackernoon',
  label: 'hackernoon',
  payload: sampleData,
  defaultOutput: 'generated/hackernoon-email.html',
});
