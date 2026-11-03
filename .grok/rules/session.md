# Grok session

Grok is the agent for this repo. Template layout, verify commands, and what is already shipped stay in `AGENTS.md`. Do not add `.claude/` or `.cursor/` project config.

- Do the edit in this session. Start a subagent only when the user asks for one, or to read a second template while this session keeps the edit.
- Leave workflows, schedulers, and image or video tools unused unless the task is explicitly about CI or workflows.
- `npm run build`, `npm test`, `npm run lint`, `npm run format:check`, `npm run preflight`, `npm ci`, and `npm run render:<name>` are already allowed in `.grok/config.toml`. Run the ones `AGENTS.md` names for the change, then stop.
- Never hand-edit `package-lock.json`. After dependency edits, regenerate with `npm install` and include the lockfile in the same commit. Run `npm run preflight` before pushing so `npm ci` failures do not show up first on GitHub.
