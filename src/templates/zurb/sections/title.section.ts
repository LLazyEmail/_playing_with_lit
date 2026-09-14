import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { ZurbEmailData } from '../types.js';

export const renderTitleSection: Section<ZurbEmailData> = (data) => html`
  <table class="row title" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <h1 class="title-heading">${data.title}</h1>
        <p class="title-subheading">${data.preheaderText}</p>
      </td>
    </tr>
  </table>
`;
