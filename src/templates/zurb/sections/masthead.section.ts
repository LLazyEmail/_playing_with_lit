import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { ZurbEmailData } from '../types.js';

export const renderMastheadSection: Section<ZurbEmailData> = (data) => html`
  <table class="row header" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <a href=${data.homeLink.url}>
          <img src=${data.logo.imageUrl} alt=${data.logo.imageAlt} width="180" />
        </a>
      </td>
    </tr>
  </table>
`;
