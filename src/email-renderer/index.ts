/**
 * Email renderer adapter.
 *
 * Document composition and the part/slot runtime come from
 * `@llazyemail/template-runtime-display`. Lit body compilation stays here
 * because current templates still return a Lit `TemplateResult`.
 */
export { Renderer } from './renderer.js';
export {
  renderEmailBody,
  renderEmailDocument,
  renderRuntimeHtml,
  stripLitMarkers,
} from './render-email-document.js';
export type { EmailDocumentOptions } from './render-email-document.js';

export {
  body,
  content,
  defineEmailTemplate,
  defineTemplate,
  displayErrors,
  document,
  escapeHtml,
  explain,
  footer,
  hasSlot,
  head,
  main,
  renderEmail,
  renderMany,
  renderTemplate,
  slot,
  DisplayError,
  DisplayErrorCode,
} from '@llazyemail/template-runtime-display';
export type {
  EmailProps,
  EmailTemplate,
  PartFailure,
  PartStatus,
  PartTrace,
  RenderContext,
  RenderJob,
  RenderOptions,
  RenderResult,
  SlotValue,
  Template,
  TemplatePart,
} from '@llazyemail/template-runtime-display';
