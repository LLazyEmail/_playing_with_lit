import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('shirt4');
await renderEntry({
  templateId: 'shirt4',
  label: 'shirt4',
  payload: sampleData,
  defaultOutput: 'generated/shirt4-email.html',
});
