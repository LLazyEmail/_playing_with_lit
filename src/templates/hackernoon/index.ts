import { html, TemplateResult } from 'lit';
import type { HackernoonEmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderBodySection } from './sections/body.section.js';
import { renderFooterSection } from './sections/footer.section.js';

/**
 * Builds the full Hacker Noon newsletter email as a Lit {@link TemplateResult}.
 *
 * Pass the result to {@link hackernoonRenderToString} (defined in
 * `renderer.ts`) to get a complete HTML email string ready for sending.
 *
 * The template is composed of four sections that map 1-to-1 with the original
 * Mailchimp template zones:
 *  - `templatePreheader` → {@link renderLogoSection}   (brand logo banner)
 *  - `templateHeader`    → {@link renderHeaderSection} (sponsor + article body)
 *  - `templateBody`      → {@link renderBodySection}   (closing divider + logo)
 *  - `templateFooter`    → {@link renderFooterSection} (social icons + copyright)
 *
 * @param data - Content and metadata for the email issue.
 * @returns    A Lit TemplateResult that can be server-side rendered via
 *             `@lit-labs/ssr`.
 */
export function hackernoonEmailTemplate(
  data: HackernoonEmailData
): TemplateResult {
  return html`
        <!--[if !gte mso 9]><!--><span class="mcnPreviewText"
        style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">${data.preheaderText}</span><!--<![endif]-->

        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #ffffff;">
                <tr>
                    <td align="center" valign="top" id="bodyCell" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 10px;width: 100%;border-top: 0;">
                        <!-- BEGIN TEMPLATE // -->
                        <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;max-width: 600px !important;">
                            ${renderLogoSection()}
                            ${renderHeaderSection(data)}
                            ${renderBodySection()}
                            ${renderFooterSection(data)}
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
  `;
}
