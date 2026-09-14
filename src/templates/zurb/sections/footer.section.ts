import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { ZurbEmailData } from '../types.js';

export const renderFooterSection: Section<ZurbEmailData> = (data) => html`
  <table class="row footer" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <p>&copy; ${data.year} ZURB. Foundation for Emails.</p>
        <p><a href=${data.unsubscribe.url}>${data.unsubscribe.label}</a></p>
      </td>
    </tr>
  </table>
`;
