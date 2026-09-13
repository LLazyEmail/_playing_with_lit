import { describe, expect, it } from 'vitest';
import { renderLogoBlock } from './logo.js';
import { renderLogoSection } from '../../nomoretogo/sections/logo.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('renderLogoBlock', () => {
  it('is the API the nomoretogo logo section composes', () => {
    const viaSection = renderFragment(renderLogoSection());
    const viaBlock = renderFragment(renderLogoBlock({ variant: 'nomoretogo' }));
    expect(viaBlock).toBe(viaSection);
    expect(viaBlock).toContain('alt="No More To-Go"');
  });
});
