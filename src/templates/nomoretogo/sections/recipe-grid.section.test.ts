import { describe, expect, it } from 'vitest';
import { nomoretogoData } from '../../../scripts/content/nomoretogo-data.js';
import { renderRecipeGridSection } from './recipe-grid.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderRecipeGridSection', () => {
  it('renders every recipe title and link from fixture data', () => {
    const html = renderFragment(
      renderRecipeGridSection({ recipes: nomoretogoData.recipes })
    );
    for (const recipe of nomoretogoData.recipes) {
      expect(html).toContain(recipe.title);
      expect(html).toContain(recipe.linkUrl);
      expect(html).toContain(recipe.imageUrl);
    }
  });
});
