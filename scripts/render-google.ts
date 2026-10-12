import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('google');
await renderEntry({
  templateId: 'google',
  label: 'google',
  payload: sampleData,
  defaultOutput: 'generated/google-email.html',
});
