import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData, RecipeItem } from '../types.js';

/**
 * No More To-Go weekly menu email template.
 *
 * Sections
 * --------
 * 1. Logo          – brand logo banner
 * 2. Nav           – "Weekly Menu" nav link + issue date
 * 3. Intro         – welcome paragraph and signature
 * 4. Recipe grid   – 3 rows × 2 recipe cards
 * 5. CTA           – "Get This Week's Menu" button
 * 6. Prep info     – ingredients spotlight + weekend prep tips
 * 7. Community     – Facebook group + contact/help links
 * 8. Amazon        – sponsored logo block
 * 9. Footer        – company name, address, social icons, unsubscribe
 *
 * Usage
 * -----
 * ```ts
 * import { nomoretogoEmailTemplate } from './templates/nomoretogo-email.js';
 * import { nomoretogoRenderToString } from './renderer.js';
 *
 * const html = nomoretogoRenderToString(nomoretogoEmailTemplate(data), data);
 * ```
 */

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

const BASE_IMAGE =
  'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/';

// ---------------------------------------------------------------------------
// Section: Logo banner
// ---------------------------------------------------------------------------

/**
 * Renders the top logo banner.
 */
function renderLogoSection(): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <img src="${BASE_IMAGE}logo.jpeg" id="logoBlock-4" border="0" alt="No More To-Go" width="560" style="display:block;">
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Navigation bar (weekly menu link + issue date)
// ---------------------------------------------------------------------------

/**
 * Renders the navigation bar row containing the "Weekly Menu" link and the
 * issue date.
 *
 * @param data.weeklyMenuUrl - URL for the "Weekly Menu" link.
 * @param data.date          - Human-readable date string (e.g. "April 22nd, 2021").
 */
function renderNavSection(
  data: Pick<NomoretogoEmailData, 'weeklyMenuUrl' | 'date'>
): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="center" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:28px;font-weight:700;line-height:150%;color:#111111;text-align:center;">
                <a href="${data.weeklyMenuUrl}" style="text-decoration:none;color:#111111;">Weekly Menu</a>
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="center" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:19px;font-weight:400;line-height:150%;color:#111111;text-align:center;">
                ${data.date}
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Introductory text
// ---------------------------------------------------------------------------

/**
 * Renders the welcome paragraph and closing signature.
 *
 * @param data.introText  - Main welcome copy.
 * @param data.signature  - Closing line (e.g. "Happy Cooking, Stacey…").
 */
function renderIntroSection(
  data: Pick<NomoretogoEmailData, 'introText' | 'signature'>
): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.introText}</p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.signature}</p>
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Recipe card pair (one two-column row)
// ---------------------------------------------------------------------------

/**
 * Renders a single two-column recipe row.
 *
 * @param left  - Recipe card for the left column.
 * @param right - Recipe card for the right column.
 */
function renderRecipeRow(left: RecipeItem, right: RecipeItem): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <table role="presentation" cellpadding="0" border="0" align="center" width="100%">
                <tbody><tr>
                  <td valign="top">
                    <!-- Left card -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="center">
                            <a href="${left.linkUrl}" target="_self">
                              <img src="${left.imageUrl}" border="0" alt="${left.imageAlt}" width="267" style="display:block;">
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding:0 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                              <tbody>
                                <tr><td height="20"></td></tr>
                                <tr>
                                  <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                                    <p style="margin-top:0;margin-bottom:0;line-height:150%;text-align:center;">
                                      <strong><span style="font-size:16px;">${left.title}</span></strong><br>${left.subtitle}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Right card -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="center">
                            <a href="${right.linkUrl}" target="_self">
                              <img src="${right.imageUrl}" border="0" alt="${right.imageAlt}" width="267" style="display:block;">
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding:0 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                              <tbody>
                                <tr><td height="20"></td></tr>
                                <tr>
                                  <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                                    <p style="margin-top:0;margin-bottom:0;line-height:150%;text-align:center;">
                                      <strong><span style="font-size:16px;">${right.title}</span></strong><br>${right.subtitle}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Full recipe grid (3 rows × 2 columns)
// ---------------------------------------------------------------------------

/**
 * Renders all six recipe cards as three two-column rows.
 *
 * @param data.recipes - Array of exactly six {@link RecipeItem} objects.
 */
function renderRecipeGridSection(
  data: Pick<NomoretogoEmailData, 'recipes'>
): TemplateResult {
  const [r1, r2, r3, r4, r5, r6] = data.recipes;
  return html`
    ${renderRecipeRow(r1, r2)}
    ${renderRecipeRow(r3, r4)}
    ${renderRecipeRow(r5, r6)}`;
}

// ---------------------------------------------------------------------------
// Section: CTA button
// ---------------------------------------------------------------------------

/**
 * Renders the "Get This Week's Menu" call-to-action button.
 *
 * @param data.ctaUrl - URL the button points to.
 */
function renderCtaSection(
  data: Pick<NomoretogoEmailData, 'ctaUrl'>
): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%;min-width:100%;">
                <tbody><tr>
                  <td align="center" class="mlContentButton" style="font-family:'Poppins',sans-serif;">
                    <a class="mlContentButton" href="${data.ctaUrl}" style="font-family:'Poppins',sans-serif;background-color:#d6685e;border-radius:3px;color:#ffffff;display:inline-block;font-size:17px;font-weight:400;line-height:23px;padding:15px 0;text-align:center;text-decoration:none;width:260px;" target="_self">Get This Week's Menu</a>
                  </td>
                </tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Prep info (ingredients spotlight + weekend tips)
// ---------------------------------------------------------------------------

/**
 * Renders the ingredients spotlight and weekend prep-tips block.
 *
 * @param data.ingredientsSpotlight - Featured ingredient description.
 * @param data.weekendPrepText      - Weekend prep tips paragraph.
 * @param data.makeAheadText        - Make-ahead / refrigerate instructions.
 */
function renderPrepInfoSection(
  data: Pick<
    NomoretogoEmailData,
    'ingredientsSpotlight' | 'weekendPrepText' | 'makeAheadText'
  >
): TemplateResult {
  return html`
    <!-- Divider -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-top:1px solid #ededf3;border-collapse:initial;">
                <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
    <!-- Prep info content -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;"><strong>Ingredients</strong></p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.ingredientsSpotlight}</p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;"><strong>Weekend Prep</strong></p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.weekendPrepText}</p>
                <p style="margin-top:0;margin-bottom:0;line-height:150%;">${data.makeAheadText}</p>
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Community / help links
// ---------------------------------------------------------------------------

/**
 * Renders the Facebook-group community block and the contact/help paragraph.
 *
 * @param data.facebookGroupUrl - URL for the members-only Facebook group page.
 * @param data.helpUrl          - URL for the "How Can We Help" support page.
 */
function renderCommunitySection(
  data: Pick<NomoretogoEmailData, 'facebookGroupUrl' | 'helpUrl'>
): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="40" style="line-height:40px;min-height:40px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                <h4><strong>No More To-Go Facebook Users:</strong></h4>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">
                  Connect with other home cooks on our closed group for No More To-Go Members Only
                  <a href="${data.facebookGroupUrl}" target="_blank" style="word-break:break-word;font-family:'Poppins',sans-serif;color:#09c269;text-decoration:underline;">Facebook Group Page</a>.
                </p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">
                  <strong>Have Questions?</strong><br>
                  Please contact us via the "<a href="${data.helpUrl}" target="_blank" style="word-break:break-word;font-family:'Poppins',sans-serif;color:#09c269;text-decoration:underline;">How Can We Help</a>" link at the bottom of each page on the site. Or, email us at
                  <a href="mailto:contact@nomoretogo.com" style="word-break:break-word;font-family:'Poppins',sans-serif;color:#09c269;text-decoration:underline;">contact@nomoretogo.com</a>.
                </p>
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Amazon sponsored banner
// ---------------------------------------------------------------------------

/**
 * Renders the Amazon sponsored-products banner.
 */
function renderAmazonSection(): TemplateResult {
  return html`
    <!-- Divider -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-top:1px solid #ededf3;border-collapse:initial;">
                <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
    <!-- Amazon image -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="center" id="imageBlock-40">
                <img src="${BASE_IMAGE}amazon.png" border="0" alt="Amazon" width="200" style="display:block;">
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Section: Footer
// ---------------------------------------------------------------------------

/**
 * Renders the email footer with the brand name, address, social icons, and
 * unsubscribe link.
 *
 * @param data.unsubscribeUrl - URL for the unsubscribe action.
 */
function renderFooterSection(
  data: Pick<NomoretogoEmailData, 'unsubscribeUrl'>
): TemplateResult {
  return html`
    <!-- Divider -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-top:1px solid #ededf3;border-collapse:initial;">
                <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
    <!-- Footer content -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
        <!-- Brand name row -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;line-height:150%;color:#111111;">
                No More To-Go
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10"></td></tr></tbody>
        </table>
        <!-- Address + social | unsubscribe row -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                <tbody><tr>
                  <td align="center">
                    <!-- Left: address + social icons -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:12px;line-height:150%;color:#111111;">
                            <p style="margin-top:0;margin-bottom:0;">Dallas,&nbsp;Texas United States</p>
                          </td>
                        </tr>
                        <tr><td height="25"></td></tr>
                        <tr>
                          <td align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
                              <tbody><tr>
                                <td align="center" width="24" style="padding:0 5px;">
                                  <a href="#" target="_self">
                                    <img width="24" alt="facebook" src="${BASE_IMAGE}facebook.webp" style="display:block;" border="0">
                                  </a>
                                </td>
                                <td align="center" width="24" style="padding:0 5px;">
                                  <a href="#" target="_self">
                                    <img width="24" alt="twitter" src="${BASE_IMAGE}twitter.webp" style="display:block;" border="0">
                                  </a>
                                </td>
                                <td align="center" width="24" style="padding:0 5px;">
                                  <a href="#" target="_self">
                                    <img width="24" alt="instagram" src="${BASE_IMAGE}instagram.webp" style="display:block;" border="0">
                                  </a>
                                </td>
                              </tr></tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Right: received note + unsubscribe -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="right" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:12px;line-height:150%;color:#111111;">
                            <p style="margin-top:0;margin-bottom:0;">You received this email because you signed up on our website or made a purchase from us.</p>
                          </td>
                        </tr>
                        <tr><td height="10"></td></tr>
                        <tr>
                          <td align="right" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:12px;line-height:150%;color:#111111;">
                            <a href="${data.unsubscribeUrl}" style="color:#111111;text-decoration:underline;">
                              <span style="color:#111111;">Unsubscribe</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="40" style="line-height:40px;min-height:40px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}

// ---------------------------------------------------------------------------
// Public: main template entry point
// ---------------------------------------------------------------------------

/**
 * Builds the full No More To-Go weekly menu email as a Lit
 * {@link TemplateResult}.
 *
 * Pass the result to {@link nomoretogoRenderToString} (defined in
 * `renderer.ts`) to get a complete HTML email string ready for sending.
 *
 * @param data - All content and URLs for the email.
 * @returns    A Lit TemplateResult that can be server-side rendered via
 *             `@lit-labs/ssr`.
 */
export function nomoretogoEmailTemplate(
  data: NomoretogoEmailData
): TemplateResult {
  return html`
    <div role="article" aria-roledescription="email" aria-label="${data.title}" style="font-size:medium;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f6f8f9" style="background-color:#f6f8f9;">
        <tbody><tr>
          <td align="center" style="padding:20px 0;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-radius:5px;overflow:hidden;" width="640">
              <tbody><tr>
                <td bgcolor="#ffffff">
                  ${renderLogoSection()}
                  ${renderNavSection(data)}
                  ${renderIntroSection(data)}
                  ${renderRecipeGridSection(data)}
                  ${renderCtaSection(data)}
                  ${renderPrepInfoSection(data)}
                  ${renderCommunitySection(data)}
                  ${renderAmazonSection()}
                  ${renderFooterSection(data)}
                </td>
              </tr></tbody>
            </table>
          </td>
        </tr></tbody>
      </table>
    </div>`;
}
