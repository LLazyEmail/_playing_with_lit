import type { MailchimpEmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { mailchimpEmailTemplate } from './index.js';
import { mailchimpRenderToString } from '../../validation/guarded-render.js';

/** Wraps the existing Mailchimp composer + guarded render. */
export class MailchimpRenderer extends Renderer<MailchimpEmailData> {
  render(data: MailchimpEmailData): string {
    const template = mailchimpEmailTemplate(data);
    return mailchimpRenderToString(template, data);
  }
}
