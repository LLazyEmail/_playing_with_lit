import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { ZurbEmailData } from '../types.js';

export const renderHeroSection: Section<ZurbEmailData> = (data) => html`
  <table class="row main" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2>${data.heroHeading}</h2>
        <p>${data.heroBody}</p>
      </td>
    </tr>
  </table>
`;
