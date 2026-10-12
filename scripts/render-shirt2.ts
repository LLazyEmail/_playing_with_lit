import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('shirt2');
await renderEntry({
  templateId: 'shirt2',
  label: 'shirt2',
  payload: sampleData,
  defaultOutput: 'generated/shirt2-email.html',
});
