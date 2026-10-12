import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('shirt3');
await renderEntry({
  templateId: 'shirt3',
  label: 'shirt3',
  payload: sampleData,
  defaultOutput: 'generated/shirt3-email.html',
});
