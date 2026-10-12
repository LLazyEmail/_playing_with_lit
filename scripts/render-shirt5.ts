import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('shirt5');
await renderEntry({
  templateId: 'shirt5',
  label: 'shirt5',
  payload: sampleData,
  defaultOutput: 'generated/shirt5-email.html',
});
