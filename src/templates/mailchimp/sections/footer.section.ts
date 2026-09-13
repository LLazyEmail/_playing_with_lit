import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';
import { renderFooterColumn } from '../../shared/blocks/footer-column.js';

/**
 * Renders the three-column dark footer row for the Mailchimp-style email.
 *
 * Each of the three {@link FooterColumn} entries becomes its own narrow table
 * column containing a heading and a short description paragraph.
 *
 * @param data - Requires `footerColumns` (a fixed-length tuple of three columns).
 */
export function renderFooterSection(
  data: Pick<MailchimpEmailData, 'footerColumns'>
): TemplateResult {
  const [col1, col2, col3] = data.footerColumns;
  return html`
    <tr>
      <td align="center" width="100%" valign="top" class="footer">
        <table class="table-inner" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
          <tr>
            <td bgcolor="#30363d" class="footer-inner" valign="top">
              ${renderFooterColumn({ className: 'footer-col-first', ...col1 })}
              ${renderFooterColumn({ className: 'footer-col-second', ...col2 })}
              ${renderFooterColumn({ className: 'footer-col-last', ...col3 })}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
