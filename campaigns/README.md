# Campaign Configurations

This directory contains campaign configurations and data payloads represented as JSON files adhering to the `CampaignConfig` schema defined in `src/core/Campaign/CampaignConfig.ts`.

## Structure

```
campaigns/
├── hackernoon/
│   ├── flat-file-7.json
│   └── mysterium.json
└── zurb/
    └── announcement.json
```

## Schema

Each campaign configuration file conforms to the `CampaignConfig` contract:

```typescript
interface CampaignConfig<TContent = unknown> {
  id: string;          // Unique campaign identifier
  template: string;    // Target template composer (e.g. 'hackernoon', 'zurb')
  title?: string;      // Human-readable campaign title
  theme?: Theme;       // Visual styling tokens and brand assets
  content: TContent;   // Template-specific payload validated by the template's schema
}
```

Campaign configs can be validated at runtime via `validateCampaignConfig(data, schema)` from `src/core/index.js`.
