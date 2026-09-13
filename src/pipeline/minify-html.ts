import { minify } from 'html-minifier-terser';
import { PipelineError } from '../errors/index.js';

export interface FinalizeHtmlOptions {
  /** Force minify on or off. When omitted, see {@link isMinifyEnabled}. */
  minify?: boolean;
}

/**
 * Minify is OFF unless explicitly requested.
 *
 * Enable with:
 * - `finalizeHtml(html, { minify: true })`
 * - `EMAIL_MINIFY=1` (CI / production render scripts)
 * - `NODE_ENV=production` (unless EMAIL_MINIFY=0)
 */
export function isMinifyEnabled(options?: FinalizeHtmlOptions): boolean {
  if (options?.minify === true) {
    return true;
  }
  if (options?.minify === false) {
    return false;
  }

  const flag = process.env.EMAIL_MINIFY?.trim().toLowerCase();
  if (flag === '0' || flag === 'false' || flag === 'off') {
    return false;
  }
  if (flag === '1' || flag === 'true' || flag === 'on') {
    return true;
  }

  return process.env.NODE_ENV === 'production';
}

/** Email-safe minify settings: keep MSO conditionals and tag case. */
export const EMAIL_MINIFY_OPTIONS = {
  collapseBooleanAttributes: false,
  collapseWhitespace: true,
  conservativeCollapse: true,
  caseSensitive: true,
  keepClosingSlash: true,
  minifyCSS: true,
  minifyJS: false,
  removeComments: false,
  removeRedundantAttributes: false,
  removeEmptyAttributes: false,
  sortAttributes: false,
  sortClassName: false,
} as const;

export async function finalizeHtml(
  html: string,
  options?: FinalizeHtmlOptions
): Promise<string> {
  if (!isMinifyEnabled(options)) {
    return html;
  }

  try {
    return await minify(html, EMAIL_MINIFY_OPTIONS);
  } catch (cause) {
    throw new PipelineError({
      message: 'HTML minification failed',
      details: { tool: 'html-minifier-terser' },
      cause,
    });
  }
}
