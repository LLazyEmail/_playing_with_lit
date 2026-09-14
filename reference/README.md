# Reference HTML

Original, unmodified campaign HTML. These files are sources of truth for
content extraction. They are **not** templates and they are not rendered by
Lit. Do not add a `src/templates/` folder just because a file lives here.

| File | Kind | Used as |
|---|---|---|
| `hackernoon.html` | Template reference | Hacker Noon composer (`src/templates/hackernoon/`) |
| `flat_file_7.html` | Campaign reference | Same Hacker Noon template; data in `src/scripts/content/flat-file-7-data.ts` |
| `mysterium_1.html` | Campaign reference | Same Hacker Noon template; data in `src/scripts/content/mysterium-data.ts` |
| `nomoretogo.html` | Template reference | No More To-Go composer |
| `email-template-mailchimp (1).html` | Template reference | Mailchimp composer |

`mysterium_1.html` belongs in this folder next to `hackernoon.html`. If it is
still at the repo root, move it with:

```bash
git mv mysterium_1.html reference/mysterium_1.html
```
