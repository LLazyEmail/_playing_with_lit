export interface RenderArgs {
  template: string;
  input?: string;
  output?: string;
  payload?: string;
}

function flag(name: string, argv: readonly string[]): string | undefined {
  const inline = argv.find((arg) => arg.startsWith(`--${name}=`));
  if (inline) return inline.slice(name.length + 3);
  const index = argv.indexOf(`--${name}`);
  if (index !== -1 && argv[index + 1] && !argv[index + 1].startsWith('--')) {
    return argv[index + 1];
  }
  return undefined;
}

/** Parse the single CLI. `--template` wins; a bare positional is accepted too. */
export function parseRenderArgs(argv: readonly string[]): RenderArgs {
  const template = flag('template', argv) ?? argv.find((arg) => !arg.startsWith('-') && arg !== process.execPath);
  if (!template) {
    throw new Error('Missing --template <id>. Example: node dist/scripts/render.js --template hackernoon');
  }
  return {
    template,
    input: flag('input', argv),
    output: flag('output', argv),
    payload: flag('payload', argv),
  };
}
