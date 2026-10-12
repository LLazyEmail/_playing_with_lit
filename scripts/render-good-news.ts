import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('good-news');
await renderEntry({
  templateId: 'good-news',
  label: 'good-news',
  payload: sampleData,
  defaultOutput: 'generated/good-news-email.html',
});
