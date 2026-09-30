import { templateRegistry } from '../../rendering/template-registry.js';
import { MailchimpRenderer } from './mailchimp.renderer.js';
import { MailchimpValidator } from '../../validation/mailchimp/mailchimp.validator.js';
import { mailchimpData } from '../../scripts/mailchimp/mailchimp-data.js';

templateRegistry.register('mailchimp', {
  renderer: new MailchimpRenderer(),
  validator: new MailchimpValidator(),
  sampleData: mailchimpData,
});
