1. Project Overview
Purpose: Rendering email templates into static HTML using Lit‑HTML and AST transformations.

Key goals:

Maintain one base template with multiple campaign variations.

Ensure compatibility across Gmail, Outlook, and mobile clients.

Automate build + documentation workflows.

2. Workflow Pipeline
Parsing & Ingestion: Markdown/AST → MDAST tree.

AST Mutation: Normalize headings, inject image dimensions, convert layouts into <table>.

HTML Conversion: MDAST → HAST → HTML nodes.

Outlook Polyfills: Inject VML blocks, inline CSS, reset margins/padding.

Output Emission: Save .html into ./dist/templates/.

Documentation: Generate manifest.json + README.md with metadata.

3. Typed Abstractions

| **Abstraction** | **Purpose** | **Example** | **Export Target** |
| --- | --- | --- | --- |
| [TemplateEngine](ca://s?q=TemplateEngine_class_design) | Orchestrates Markdown/AST → HTML | ``class ``TemplateEngine<TInput, ``TOutput>`` | SDK |
| [CampaignConfig](ca://s?q=CampaignConfig_typed_interface) | JSON schema for campaigns | ``interface ``CampaignConfig ``{ ``id; ``theme; ``content; ``}`` | Registry |
| [Theme](ca://s?q=Theme_type_definition) | Colors, fonts, imagery | ``type ``Theme ``= ``{ ``primaryColor; ``bannerUrl; ``}`` | Design system |
| [Renderer](ca://s?q=Renderer_class_abstraction) | Abstract rendering base | ``abstract ``class ``Renderer<T>`` | Engines |
| [Validator](ca://s?q=Validator_class_for_schema) | Schema + size validation | ``class ``Validator`` | Build pipeline |
| [Compiler](ca://s?q=Compiler_class_for_HTML_generation) | AST → HTML | ``class ``Compiler`` | Core compiler |
| [ManifestGenerator](ca://s?q=ManifestGenerator_class) | Emits docs + metadata | ``class ``ManifestGenerator`` | Docs automation |
| [BuildPipeline](ca://s?q=BuildPipeline_class_design) | Coordinates all steps | ``class ``BuildPipeline`` | CI/CD |


4. Directory Layout

```
Код
templates/
└── user-welcome/
    ├── index.js          # Campaign engine
    ├── template.js       # Master layout shell
    ├── components/       # Shared UI components
    └── campaigns/        # JSON configs for each campaign
```

5. Scaling Advantages
Single Source of Truth: Fixes in template.js apply to all campaigns.

Non‑Technical Friendly: Teams add new campaigns by dropping JSON files.

Easy Maintenance: Global UI changes require editing only the master layout.

6. Release & Reuse
Externalize workflows into email-template-workflows repo.

Tag releases (v1, v2) for stability.

Reference in consuming repos via:

```
- uses: LLazyEmail/email-template-workflows@v1
  with:
    input: ./src/newsletter.md
    output: ./dist/newsletter.html

```


