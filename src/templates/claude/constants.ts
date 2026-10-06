export const CLAUDE_TEMPLATE_ID = 'claude';
export const CLAUDE_SUBJECT =
  'Projects in Claude Code, plus Claude Design, Slides and Docs on desktop';
export const CLAUDE_PREHEADER =
  'Plus: an easy way to eval your plugins, and Fable 5.1 Build Days near you';

export const CLAUDE_BRAND_URL = 'https://claude.com';
export const CLAUDE_DEMO_URL = 'https://claude.com/code';

export const CLAUDE_ASSETS = {
  logoLight: 'https://assets.claude.ai/lifecycle/dbd75da3dba8a384.png',
  heroProjects:
    'https://assets.claude.ai/lifecycle/42d04c6f510acd1e.gif',
  heroDesign:
    'https://assets.claude.ai/lifecycle/94469312790b84b5.gif',
  pluginEval:
    'https://assets.claude.ai/lifecycle/2cfc79a251e201ea.gif',
  keepAwake:
    'https://assets.claude.ai/lifecycle/11b0f80c91b68373.gif',
  tryIcon: 'https://assets.claude.ai/lifecycle/8566d27c8445749b.png',
};

export const CLAUDE_FONTS = {
  body: `Georgia, 'Times New Roman', serif`,
  sansText: `'Anthropic Sans Text', 'Helvetica Neue', Arial, sans-serif`,
  serifDisplay: `'Anthropic Serif Display', Georgia, serif`,
  uiSans: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
  mono: `'SF Mono', 'Menlo', 'Consolas', 'Courier New', Courier, monospace`,
};

export const CLAUDE_PALETTE = {
  pageBg: '#FFFFFE',
  cardBg: '#faf9f5',
  cardAlt: '#f0eee6',
  text: '#141413',
  muted: '#4D4C48',
  chrome: '#61605C',
  divider: '#D9D8D5',
  orange: '#c6613f',
  /** Dark‑mode mirror palette (used by the @media / [data-ogsc] blocks). */
  dark: {
    header: '#262624',
    content: '#262624',
    footer: '#141413',
    divider: '#474745',
    muted: '#a8a69e',
    codeBg: '#0d0d0c',
    codeBorder: '#2e2d2b',
    codeBar: '#232221',
    codeLine: '#faf9f5',
    codeHi: '#211814',
    codeHiBar: '#d97757',
    inlineCodeBg: '#3d3d3a',
  },
};

/**
 * Full dark‑mode CSS block. Emitted twice in the source — once under
 * `@media(prefers-color-scheme:dark)` and once under `[data-ogsc]`. We
 * generate it once here and inject it into both places.
 */
export const CLAUDE_DARK_MODE_RULES = `
  .header { background-color: #262624 !important }
  .content, .light-bg-primary { background-color: #262624 !important }
  .footer { background-color: #141413 !important }
  h1, h2, h3, h4, p, a, ol, li { color: #fff !important }
  .primaryColor { color: #141413 !important }
  .whiteFont { color: #fff !important }
  .orange { color: #c6613f !important }
  .footerCopy { color: #b0aea5 !important }
  .dark-logo { display: block !important }
  .light-logo { display: none !important }
  .mainCta { background-color: #faf9f5 !important }
  .ev-divider { background-color: #474745 !important }
  .ev-divider-top { border-top-color: #474745 !important }
  .ev-muted { color: #a8a69e !important }
  .cd-card { background-color: #0d0d0c !important; border-color: #2e2d2b !important }
  .cd-bar { border-bottom-color: #232221 !important }
  .cd-chrome { color: #87867f !important }
  .cd-dot { background-color: #4a4845 !important }
  .cd-line { color: #faf9f5 !important }
  .cd-hi { background-color: #211814 !important; border-left-color: #d97757 !important }
  .cd-t-text { color: #faf9f5 !important }
  .cd-t-punct { color: #6e6d66 !important }
  .cd-t-key { color: #e3dacc !important }
  .cd-t-keyword { color: #e3dacc !important }
  .cd-t-str { color: #d97757 !important }
  .cd-t-num { color: #6a9bcc !important }
  .cd-t-comment { color: #87867f !important }
  .ev-inline-code { background-color: #3d3d3a !important }
  .ev-img-outline { border-color: #2e2d2b !important }
  .wbg-1c1c1b { background-color: #1c1c1b !important }
  .ev-bubble { background-color: #2e2d2b !important }
  .body, body { background-color: #262624 !important }
`;