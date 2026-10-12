import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('claude');
await renderEntry({
  templateId: 'claude',
  label: 'claude',
  payload: sampleData,
  defaultOutput: 'generated/claude-email.html',
});
