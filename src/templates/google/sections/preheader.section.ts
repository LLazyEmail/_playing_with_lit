import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';

export const renderPreheaderSection: Section<GoogleEmailData> = (data) => html`
  <div style="display:none; font-size:0; line-height:0; color:#ffffff;">
    ${data.preheader}
  </div>
`;
