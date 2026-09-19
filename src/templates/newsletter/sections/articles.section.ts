import { html, type TemplateResult } from 'lit';
import { STORIES_HEADING } from '../constants.js';
import type { ArticleItem, EmailData } from '../types.js';

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

/** Renders the featured-articles list. */
export function renderArticlesSection(
  data: Pick<EmailData, 'articles'>
): TemplateResult {
  return html`
        <!-- Articles -->
        <div class="articles">
          <h3>${STORIES_HEADING}</h3>
          ${data.articles.map(articleTemplate)}
        </div>
  `;
}
