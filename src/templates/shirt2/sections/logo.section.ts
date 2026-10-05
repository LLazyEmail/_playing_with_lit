import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { SHIRT2_ASSETS } from '../constants.js';

function presentShirt2Logo(): TemplateResult {
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
          <a href=${SHIRT2_ASSETS.logo ? 'https://www.alexmill.com/' : '#'} style="text-decoration:none;color:#0F1B55;" target="_blank">
            <img src=${SHIRT2_ASSETS.logo} width="161" border="0" alt="Alex Mill" />
          </a>
        </td>
      </tr>
    </table>
  `;
}

registerLogoPresenter('shirt2', () => presentShirt2Logo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'shirt2' });
}