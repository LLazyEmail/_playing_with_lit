import type { HackernoonEmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { hackernoonEmailTemplate } from './index.js';
import { hackernoonRenderToString } from '../../validation/guarded-render.js';

/** Wraps the existing Hacker Noon composer + guarded render. */
export class HackernoonRenderer extends Renderer<HackernoonEmailData> {
  render(data: HackernoonEmailData): string {
    const template = hackernoonEmailTemplate(data);
    return hackernoonRenderToString(template, data);
  }
}
