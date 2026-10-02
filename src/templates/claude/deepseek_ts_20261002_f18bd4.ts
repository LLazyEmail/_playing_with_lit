import { describe, it, expect } from 'vitest';
import { renderClaudeEmail } from './claude.renderer.js';
import { claudeEmailData } from '../../scripts/content/claude-data.js';

describe('renderClaudeEmail', () => {
  const { subject, html } = renderClaudeEmail(claudeEmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe(
      'Projects in Claude Code, plus Claude Design, Slides and Docs on desktop'
    );
  });

  it('keeps the Anthropic document shell with dark-mode support', () => {
    expect(html).toMatch(/XHTML 1\.0 Transitional/i);
    expect(html).toContain('color-scheme: light dark');
    expect(html).toContain('supported-color-schemes: light dark');
    expect(html).toContain('@media(prefers-color-scheme:dark)');
    expect(html).toContain('[data-ogsc] .header');
    expect(html).toContain('[data-ogsc] .cd-card');
  });

  it('renders every major section', () => {
    expect(html).toContain('Projects in Claude Code (beta)');
    expect(html).toContain('Claude Design, Slides and Docs in Claude Code');
    expect(html).toContain('Eval your plugins and skills');
    expect(html).toContain('Keep your computer awake');
    expect(html).toContain('More control over subagents');
    expect(html).toContain('Fable 5.1 Build Days');
  });

  it('renders both CTAs in the design feature', () => {
    expect(html).toContain('Try it in Claude');
    expect(html).toContain('Learn more about Claude Design');
  });

  it('renders the code card with syntax-highlighted lines', () => {
    expect(html).toContain('.claude/agents/log-scanner.md');
    expect(html).toContain('name: log-scanner');
    expect(html).toContain('model: sonnet');
    expect(html).toContain('effort: low');
  });

  it('renders inline code chips', () => {
    expect(html).toContain('claude plugin eval init');
    expect(html).toContain('omitClaudeMd: true');
    expect(html).toContain('ev-inline-code');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});