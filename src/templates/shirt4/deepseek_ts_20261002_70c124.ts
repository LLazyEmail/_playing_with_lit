import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { SHIRT4_ASSETS, SHIRT4_BRAND_URL } from '../constants.js';

function presentShirt4Logo(): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:#fbfbf5; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center" class="plr15" style="padding:40px 0;">
          <a
            href=${SHIRT4_BRAND_URL}
            style="color:#000000; display:block; font-size:18px; text-decoration:none;"
            target="_blank"
          >
            <img
              border="0"
              height="auto"
              src=${SHIRT4_ASSETS.logo}
              style="display:block; height:auto; margin:0 auto; max-width:100%; padding:0;"
              width="300"
            />
          </a>
        </td>
      </tr>
    </table>
  `;
}

registerLogoPresenter('shirt4', () => presentShirt4Logo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'shirt4' });
}