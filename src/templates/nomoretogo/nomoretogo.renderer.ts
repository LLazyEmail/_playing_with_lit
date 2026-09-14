import type { NomoretogoEmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { nomoretogoEmailTemplate } from './index.js';
import { nomoretogoRenderToString } from '../../validation/guarded-render.js';

/** Wraps the existing No More To-Go composer + guarded render. */
export class NomoretogoRenderer extends Renderer<NomoretogoEmailData> {
  render(data: NomoretogoEmailData): string {
    const template = nomoretogoEmailTemplate(data);
    return nomoretogoRenderToString(template, data);
  }
}
