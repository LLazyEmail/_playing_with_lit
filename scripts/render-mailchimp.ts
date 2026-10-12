import { getTemplate } from '../src/rendering/template-registry.js';
import { renderEntry } from './render-entry.js';

const { sampleData } = getTemplate('mailchimp');
await renderEntry({
  templateId: 'mailchimp',
  label: 'mailchimp',
  payload: sampleData,
  defaultOutput: 'generated/mailchimp-email.html',
});
