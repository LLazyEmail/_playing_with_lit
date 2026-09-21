# Campaign Configurations

This directory contains campaign configurations and data files.

**Note:** There are two separate schemas:
- `CampaignConfig` (in `src/core/Campaign/CampaignConfig.ts`) - single source of truth for campaign configuration (id, template, output, options)
- `CampaignData` (in `src/core/Campaign/CampaignData.ts`) - single source of truth for campaign data (title, theme, content)

No additional "core" abstraction layers should be added; all campaign configuration and data details are defined in these schemas.

## Structure

Each campaign has two files:
- `<campaign>.json` - Configuration (id, template, output, options)
- `<campaign>.data.json` - Data (title, theme, content)

```
campaigns/
├── hackernoon/
│   ├── flat-file-7.json
│   ├── flat-file-7.data.json
│   ├── mysterium.json
│   └── mysterium.data.json
└── zurb/
    ├── announcement.json
    └── announcement.data.json
```

## Schemas

### CampaignConfig

Configuration files conform to the `CampaignConfig` contract:

```typescript
interface CampaignConfig {
  id: string;          // Unique campaign identifier
  template: string;    // Target template composer (e.g. 'hackernoon', 'zurb')
  output: string;     // Output filename
  options?: {          // Optional rendering flags
    minify?: boolean;
    inlineCss?: boolean;
  };
}
```

### CampaignData

Data files conform to the `CampaignData` contract:

```typescript
interface CampaignData {
  title?: string;      // Human-readable campaign title
  theme?: {            // Visual styling tokens and brand assets
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    fontFamily?: string;
    bannerUrl?: string;
  };
  content?: Record<string, unknown>; // Template-specific payload
}
```

## Loading

Campaign configs and data can be loaded and validated at runtime:
- `loadCampaignConfig(path)` from `src/core/index.js` - loads `<campaign>.json`
- `loadCampaignData(path)` from `src/core/index.js` - loads `<campaign>.data.json`
