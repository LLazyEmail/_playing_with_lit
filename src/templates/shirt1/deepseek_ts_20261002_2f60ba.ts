import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { SHIRT1_ASSETS } from '../constants.js';

function presentShirt1Logo(): TemplateResult {
  return html`
    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kmImageBlock" style="min-width:100%">
      <tbody class="kmImageBlockOuter">
        <tr>
          <td class="kmImageBlockInner" style="padding:9px;" valign="top">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" style="min-width:100%" width="100%">
              <tbody>
                <tr>
                  <td class="kmImageContent" style="padding:0 9px; text-align:center;" valign="top">
                    <img
                      align="center"
                      alt="hnst"
                      class="kmImage"
                      src=${SHIRT1_ASSETS.logo}
                      style="max-width:1106px; padding:0; border-width:0;"
                      width="546"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}

registerLogoPresenter('shirt1', () => presentShirt1Logo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'shirt1' });
}