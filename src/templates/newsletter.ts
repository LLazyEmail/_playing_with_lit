import { html, TemplateResult } from 'lit';
import type { ArticleItem, EmailData } from '../types.js';

// ---------------------------------------------------------------------------
// Sub-templates
// ---------------------------------------------------------------------------

/** Renders a single featured-article row. */
function articleTemplate(article: ArticleItem): TemplateResult {
  return html`
    <div class="article-item">
      <img src="${article.imageUrl}" alt="${article.imageAlt}" />
      <div>
        <h4><a href="${article.url}">${article.title}</a></h4>
        <p>${article.excerpt}</p>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Root template
// ---------------------------------------------------------------------------

/**
 * Returns the email body content as a Lit {@link TemplateResult}.
 *
 * The full HTML document shell (DOCTYPE, <head>, styles) is assembled by
 * {@link renderToString} so that Lit's SSR parser is never asked to handle
 * expressions inside raw-text elements such as <title> or <style>.
 */
export function newsletterEmailTemplate(data: EmailData): TemplateResult {
  return html`
    <div class="email-wrapper">
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <img src="${data.logoUrl}" alt="${data.brandName} logo" />
          <h1>Monthly Newsletter</h1>
        </div>

        <!-- Hero -->
        <div class="hero">
          <h2>Hello, ${data.recipientName}! 👋</h2>
          <p>${data.heroSubtitle}</p>
        </div>

        <!-- Main Content -->
        <div class="content">
          <h3>Your Personalised Digest</h3>
          <p>${data.bodyText}</p>
        </div>

        <!-- CTA -->
        <div class="cta-container">
          <a href="${data.ctaUrl}" class="cta-button">${data.ctaLabel}</a>
        </div>

        <!-- Articles -->
        <div class="articles">
          <h3>Top Stories This Month</h3>
          ${data.articles.map(articleTemplate)}
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>
            You received this email because you subscribed to
            ${data.brandName} updates.
          </p>
          <p>
            <a href="${data.unsubscribeUrl}">Unsubscribe</a> &middot;
            <a href="${data.privacyUrl}">Privacy Policy</a> &middot;
            <a href="${data.contactUrl}">Contact Us</a>
          </p>
          <p>&copy; ${data.year} ${data.brandName}, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  `;
}
