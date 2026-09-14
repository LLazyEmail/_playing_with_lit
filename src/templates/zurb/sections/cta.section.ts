import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { ZurbEmailData } from '../types.js';

export const renderCtaSection: Section<ZurbEmailData> = (data) => html`
  <table class="row" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <a class="button large" href=${data.cta.url}>${data.cta.label}</a>
      </td>
    </tr>
  </table>
`;
