import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('shirt1');
await renderEntry({
  templateId: 'shirt1',
  label: 'shirt1',
  payload: sampleData,
  defaultOutput: 'generated/shirt1-email.html',
});
