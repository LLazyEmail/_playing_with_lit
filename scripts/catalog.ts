import { flatFile7Data } from './samples/hackernoon/flat-file-7-data.js';
import { mysteriumData } from './samples/hackernoon/mysterium-data.js';

/**
 * One descriptor per renderable id.
 *
 * `templateId` is the registered Lit template. Campaigns such as mysterium
 * reuse a template with a different payload. Adding a template is one entry
 * here — not a new file.
 */
export interface RenderTarget {
  readonly id: string;
  readonly templateId: string;
  readonly defaultOutput: string;
  /** Overrides the registry sample when no external payload is passed. */
  readonly loadPayload?: () => unknown | Promise<unknown>;
}

const targets: readonly RenderTarget[] = [
  { id: 'hackernoon', templateId: 'hackernoon', defaultOutput: 'generated/hackernoon-email.html' },
  { id: 'nomoretogo', templateId: 'nomoretogo', defaultOutput: 'generated/nomoretogo-email.html' },
  { id: 'mailchimp', templateId: 'mailchimp', defaultOutput: 'generated/mailchimp-email.html' },
  { id: 'zurb', templateId: 'zurb', defaultOutput: 'generated/zurb-email.html' },
  { id: 'google', templateId: 'google', defaultOutput: 'generated/google-email.html' },
  { id: 'shirt1', templateId: 'shirt1', defaultOutput: 'generated/shirt1-email.html' },
  { id: 'shirt2', templateId: 'shirt2', defaultOutput: 'generated/shirt2-email.html' },
  { id: 'shirt3', templateId: 'shirt3', defaultOutput: 'generated/shirt3-email.html' },
  { id: 'shirt4', templateId: 'shirt4', defaultOutput: 'generated/shirt4-email.html' },
  { id: 'shirt5', templateId: 'shirt5', defaultOutput: 'generated/shirt5-email.html' },
  { id: 'lottie', templateId: 'lottie', defaultOutput: 'generated/lottie-email.html' },
  { id: 'claude', templateId: 'claude', defaultOutput: 'generated/claude-email.html' },
  { id: 'good-news', templateId: 'good-news', defaultOutput: 'generated/good-news-email.html' },
  {
    id: 'mysterium',
    templateId: 'hackernoon',
    defaultOutput: 'generated/mysterium-email.html',
    loadPayload: () => mysteriumData,
  },
  {
    id: 'flat-file-7',
    templateId: 'hackernoon',
    defaultOutput: 'generated/flat-file-7-email.html',
    loadPayload: () => flatFile7Data,
  },
];

const byId = new Map(targets.map((target) => [target.id, target]));

export function listTargets(): readonly RenderTarget[] {
  return targets;
}

export function getTarget(id: string): RenderTarget {
  const target = byId.get(id);
  if (!target) {
    const known = targets.map((item) => item.id).join(', ');
    throw new Error(`Unknown render target "${id}". Known: ${known}`);
  }
  return target;
}
