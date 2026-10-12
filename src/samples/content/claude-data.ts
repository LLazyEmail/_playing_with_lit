import type { ClaudeEmailData } from '../../templates/claude/types.js';
import {
  CLAUDE_ASSETS,
  CLAUDE_BRAND_URL,
  CLAUDE_DEMO_URL,
} from '../../templates/claude/constants.js';

export const claudeEmailData: ClaudeEmailData = {
  preheaderText:
    'Plus: an easy way to eval your plugins, and Fable 5.1 Build Days near you',
  preheaderSpacer: '  ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­   ͏ ­ ',

  logo: {
    src: CLAUDE_ASSETS.logoLight,
    alt: 'Claude',
    width: 133,
    url: CLAUDE_BRAND_URL,
  },

  greeting: 'Hey!',
  intro:
    'Two big features shipped in beta this week. Projects are a new way to let Claude coordinate work across multiple sessions for you from one conversation, and Claude Design, Slides and the new Docs now work right in the desktop app and on web.',

  features: [
    {
      title: 'Projects in Claude Code (beta)',
      paragraphs: [
        'The Projects you may know from the Claude app got a full redesign this week, and the new version is in beta in Claude Code first for select users.',
        'Until now a project was a folder for your chats, files and instructions. The new version actually runs the work.',
      ],
      image: {
        src: CLAUDE_ASSETS.heroProjects,
        alt: 'A project in the Claude Code desktop app: the conversation on the left where Claude reports what each thread did, and the Threads pane on the right grouping its threads into Working, Idle and Resolved',
        width: 600,
        outline: true,
      },
      cta: {
        label: 'Read more about Projects →',
        url: 'https://claude.com/code/projects',
      },
    },
    {
      title: 'Claude Design, Slides and Docs in Claude Code on desktop and web (beta)',
      paragraphs: [
        'Claude Design, Claude Slides and the new Claude Docs now work inside Claude Code on desktop and web. Claude can make a UI mockup, a review deck or an RFC from your repo in the same session, and you can edit the result right in the preview pane.',
        "I switch between apps even less now, most days it's just Slack and Claude. All three are in beta on paid plans.",
      ],
      image: {
        src: CLAUDE_ASSETS.heroDesign,
        alt: 'Claude Code on desktop making a Claude Design canvas from the conversation, with the architecture board open in the preview pane next to it',
        width: 600,
        outline: true,
      },
      cta: {
        label: 'Try it in Claude',
        url: CLAUDE_DEMO_URL,
      },
      secondaryCta: {
        label: 'Learn more about Claude Design',
        url: 'https://claude.com/design',
      },
    },
    {
      eyebrow: 'Get more out of Claude Code',
      title: 'Eval your plugins and skills',
      paragraphs: [
        `Claude Code can now test whether your plugin or skill actually improves Claude's answers. Run <code class="ev-inline-code" style="font-family: 'SF Mono', Menlo, Consolas, 'Courier New', monospace; font-size: 0.92em; background-color: #F0EEE6; border-radius: 4px; padding: 1px 5px; white-space: nowrap;">claude plugin eval init</code> in your plugin's folder, tell Claude what a good result looks like, and it writes the test cases and graders for you.`,
        `Then, run <code class="ev-inline-code" style="font-family: 'SF Mono', Menlo, Consolas, 'Courier New', monospace; font-size: 0.92em; background-color: #F0EEE6; border-radius: 4px; padding: 1px 5px; white-space: nowrap;">claude plugin eval .</code>:`,
      ],
      image: {
        src: CLAUDE_ASSETS.pluginEval,
        alt: 'Running claude plugin eval . in a terminal prints a table of cases with their scores with and without the plugin',
        width: 600,
      },
      cta: {
        label: 'Read more about plugin evals →',
        url: 'https://claude.com/code/plugin-evals',
      },
    },
    {
      title: 'Keep your computer awake',
      paragraphs: [
        'If you leave a long session running on your laptop, the desktop app can now stop your machine from sleeping for just that session.',
        `Turn on <strong style="font-weight: 600;">Keep computer awake</strong> in that session's <code class="ev-inline-code" style="font-family: 'SF Mono', Menlo, Consolas, 'Courier New', monospace; font-size: 0.92em; background-color: #F0EEE6; border-radius: 4px; padding: 1px 5px; white-space: nowrap;">⋮</code> menu and your machine stays up for that session, including between turns.`,
      ],
      image: {
        src: CLAUDE_ASSETS.keepAwake,
        alt: 'The session menu in the Claude Code desktop app with the Keep computer awake toggle, labelled Only for this session, switched on',
        width: 600,
      },
      cta: {
        label: 'Get the desktop app →',
        url: 'https://claude.com/desktop',
      },
    },
    {
      title: 'More control over subagents',
      paragraphs: [
        `You get a lot of control over a custom subagent from its frontmatter. You can pick its model and effort, limit its tools, cap its turns, give it its own worktree or memory, and you can now also skip your CLAUDE.md files with <code class="ev-inline-code" style="font-family: 'SF Mono', Menlo, Consolas, 'Courier New', monospace; font-size: 0.92em; background-color: #F0EEE6; border-radius: 4px; padding: 1px 5px; white-space: nowrap;">omitClaudeMd: true</code>.`,
      ],
      codeCard: {
        path: '.claude/agents/log-scanner.md',
        lines: [
          '---',
          'name: log-scanner',
          'description: Scans CI logs for the first failing step and reports it',
          'model: sonnet',
          'effort: low',
          // The source truncates here; append the remaining YAML lines.
        ],
      },
    },
  ],

  callout: {
    title: 'Other news',
    items: [
      `<strong style="font-weight: 600;">Fable 5.1 Build Days</strong>: the Claude community is hosting buildathons in cities around the world until September 25. Bring a problem, an idea, or just show up, and find one near you on the <a href="https://claude.com/events" target="_blank" style="color: #141413; text-decoration: underline;">community events page</a>.`,
    ],
  },

  footer: {
    brandName: 'Anthropic',
    addressLine: 'Anthropic · 548 Market St · San Francisco, CA 94104',
    year: 2024,
    unsubscribe: { label: 'Unsubscribe', url: '#' },
    preferences: { label: 'Manage preferences', url: '#' },
  },
};