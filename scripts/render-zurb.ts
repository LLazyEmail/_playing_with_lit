import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('zurb');
await renderEntry({
  templateId: 'zurb',
  label: 'zurb',
  payload: sampleData,
  defaultOutput: 'generated/zurb-email.html',
});
