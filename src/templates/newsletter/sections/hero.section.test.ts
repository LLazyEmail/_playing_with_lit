import { describe, expect, it } from 'vitest';
import { renderHeroSection } from './hero.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderHeroSection', () => {
  it('renders the recipient greeting and subtitle', () => {
    const html = renderFragment(
      renderHeroSection({
        recipientName: 'Ada',
        heroSubtitle: 'Unique hero copy XYZ',
      })
    );
    expect(html).toContain('Hello, Ada! 👋');
    expect(html).toContain('Unique hero copy XYZ');
  });
});
