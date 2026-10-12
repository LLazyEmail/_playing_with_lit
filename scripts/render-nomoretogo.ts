import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('nomoretogo');
await renderEntry({
  templateId: 'nomoretogo',
  label: 'nomoretogo',
  payload: sampleData,
  defaultOutput: 'generated/nomoretogo-email.html',
});
