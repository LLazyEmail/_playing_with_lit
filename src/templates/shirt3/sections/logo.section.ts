import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { SHIRT3_ASSETS, SHIRT3_BRAND_URL } from '../constants.js';

function presentShirt3Logo(): TemplateResult {
  return html`
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:640px;margin:0 auto;"
      class="full"
    >
      <![if !mso]>
      <tr>
        <td style="font-size:0;line-height:0;color:#f6f6f6;">Check Out With Exclusive Offer</td>
      </tr>
      <![endif]>
      <tr>
        <td
          align="center"
          class="header"
          style="padding:40px 0 30px;font-family:Helvetica, Arial, sans-serif, LinetoCircularWeb;font-size:20px;text-transform:uppercase;font-weight:bold;-webkit-font-smoothing:antialiased;"
        >
          <a href=${SHIRT3_BRAND_URL} style="text-decoration:none;color:#0F1B55;" target="_blank">
            <img src=${SHIRT3_ASSETS.logo} width="161" border="0" alt="Alex Mill" />
          </a>
        </td>
      </tr>
    </table>
  `;
}

registerLogoPresenter('shirt3', () => presentShirt3Logo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'shirt3' });
}