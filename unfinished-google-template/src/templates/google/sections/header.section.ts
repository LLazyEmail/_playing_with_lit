import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_ASSETS, GOOGLE_BRAND } from '../constants.js';

export const renderHeaderSection: Section<GoogleEmailData> = (data) => html`
  <table
    width="600"
    cellpadding="0"
    cellspacing="0"
    bgcolor="#ffffff"
    style="width:600px; border-collapse:collapse; font-family:Arial, sans-serif;"
  >
    <tr>
      <td
        style="padding:17px 24px 45px 24px;"
      >
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="150" style="padding-top:8px; min-width:150px;">
              <a href="https://store.google.com/" target="_blank" style="text-decoration:none;">
                <img
                  src=${GOOGLE_ASSETS.logo}
                  alt="Google Store"
                  width="32"
                  border="0"
                />
              </a>
            </td>
            <td width="400" style="width:400px;"></td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td
        width="600"
        align="left"
        style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:32px; font-weight:bold; line-height:38px; padding:0 30px 8px 30px;"
      >
        ${data.greeting}
      </td>
    </tr>

    <tr>
      <td
        width="600"
        align="left"
        style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:14px; line-height:21px; padding:0 30px 24px 30px;"
      >
        ${data.intro}
      </td>
    </tr>
  </table>
`;