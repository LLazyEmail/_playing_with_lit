# Unfinished Google Store shipment email

DeepSeek dumps, renamed to the paths their imports already use. Nothing here is wired into the build.

```
src/templates/google/
  index.ts                 barrel
  types.ts                 GoogleEmailData
  constants.ts             subject, brand colors, asset URLs
  google.template.ts       composer
  google.renderer.ts       document shell + renderGoogleEmail
  google.renderer.test.ts
  sections/*.section.ts    header, progress, line-item, tracking,
                           order-details, price-details, footer
  sections/header.section.test.ts
src/scripts/render-google.ts
src/scripts/content/google-data.ts
campaigns/google/shipment-confirmation.json
```

Fragments, not drop-in files:

- `src/scripts/content/google-data.incomplete.ts` — same sample data, cut off mid-string. Use `google-data.ts`.
- `src/templates/index.ts` — two-line barrel (`zurb`, `google`) only.
- `snippets/section.type.ts` — `Section<T>` already lives in `src/types.ts`.
- `snippets/package.scripts.json` — `render:google` and `test:google` script entries.
- `snippets/render-google.workflow.yml` — two CI steps. The live workflow renders through the template matrix and writes `generated/`.
