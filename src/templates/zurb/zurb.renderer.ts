import type { ZurbEmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { renderEmailDocument } from '../../rendering/render-email-document.js';
import { ZURB_STYLES } from './constants.js';
import { zurbEmailTemplate } from './index.js';

export function zurbRenderToString(
  template: ReturnType<typeof zurbEmailTemplate>,
  data: Pick<ZurbEmailData, 'title'>
): string {
  return renderEmailDocument(template, {
    title: data.title,
    styles: ZURB_STYLES,
  });
}

export class ZurbRenderer extends Renderer<ZurbEmailData> {
  render(data: ZurbEmailData): string {
    return zurbRenderToString(zurbEmailTemplate(data), data);
  }
}
