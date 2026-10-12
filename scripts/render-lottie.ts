import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('lottie');
await renderEntry({
  templateId: 'lottie',
  label: 'lottie',
  payload: sampleData,
  defaultOutput: 'generated/lottie-email.html',
});
