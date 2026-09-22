# Campaign Configurations

This directory contains campaign configurations and data files following a **two-file-per-campaign convention**.

**Note:** There are two separate schemas:
- `CampaignConfig` (in `src/core/Campaign/CampaignConfig.ts`) - single source of truth for campaign configuration (id, template, output, options)
- `CampaignData` (in `src/core/Campaign/CampaignData.ts`) - single source of truth for campaign data (title, theme, content)

No additional "core" abstraction layers should be added; all campaign configuration and data details are defined in these schemas.

## Two-File Convention

Each campaign is split into two files:

1. **`<campaign>.json`** - Configuration (stale, rarely changes)
   - `id`: Unique campaign identifier
   - `template`: Target template composer (e.g. 'hackernoon', 'zurb')
   - `output`: Output filename
   - `options`: Optional rendering flags (minify, inlineCss)

2. **`<campaign>.data.json`** - Data (dynamic, campaign-specific)
   - `title`: Human-readable campaign title
   - `theme`: Visual styling tokens and brand assets
   - `content`: Template-specific payload (varies by template)

This separation ensures that configuration (which is mostly stable functionality) is kept separate from data (which is always different per campaign).

## Structure

```
campaigns/
├── hackernoon/
│   ├── flat-file-7.json           # Config
│   ├── flat-file-7.data.json      # Data
│   ├── mysterium.json             # Config
│   └── mysterium.data.json        # Data
├── google/
│   ├── shipment-confirmation.json       # Config
│   └── shipment-confirmation.data.json  # Data
└── zurb/
    ├── announcement.json          # Config
    └── announcement.data.json     # Data
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

```typescript
import { loadCampaignConfig, loadCampaignData, loadCampaignDataForConfig } from './src/core/index.js';

// Load config only
const config = loadCampaignConfig('campaigns/hackernoon/mysterium.json');

// Load data only (explicit path)
const data = loadCampaignData('campaigns/hackernoon/mysterium.data.json');

// Load data by convention from config path
const data = loadCampaignDataForConfig('campaigns/hackernoon/mysterium.json');
// Automatically loads 'campaigns/hackernoon/mysterium.data.json'
```

**Important:** Access title, theme, and content via the data object, not the config object:
- ❌ `config.title` (will not compile - title is not in CampaignConfig)
- ✅ `data.title` (correct - title is in CampaignData)
