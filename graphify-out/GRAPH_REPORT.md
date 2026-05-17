# Graph Report - .  (2026-05-17)

## Corpus Check
- 57 files · ~192,346 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 91 nodes · 63 edges · 31 communities (18 shown, 13 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 2,700 input · 900 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Development Dependencies|Development Dependencies]]
- [[_COMMUNITY_Project Meta & Dependencies|Project Meta & Dependencies]]
- [[_COMMUNITY_Layout & Navigation|Layout & Navigation]]
- [[_COMMUNITY_Build Scripts|Build Scripts]]
- [[_COMMUNITY_TypeScript Root|TypeScript Root]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Personal Branding|Personal Branding]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Engineering Simulation|Engineering Simulation]]
- [[_COMMUNITY_Product Design|Product Design]]
- [[_COMMUNITY_About Page (Semantic)|About Page (Semantic)]]
- [[_COMMUNITY_Contact Page (Semantic)|Contact Page (Semantic)]]
- [[_COMMUNITY_Projects Page (Semantic)|Projects Page (Semantic)]]
- [[_COMMUNITY_Research Page (Semantic)|Research Page (Semantic)]]
- [[_COMMUNITY_Publications Page (Semantic)|Publications Page (Semantic)]]
- [[_COMMUNITY_Writings Page (Semantic)|Writings Page (Semantic)]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `devDependencies` - 10 edges
3. `scripts` - 5 edges
4. `dependencies` - 4 edges
5. `paths` - 2 edges
6. `eslintConfig` - 1 edges
7. `nextConfig` - 1 edges
8. `private` - 1 edges
9. `dev` - 1 edges
10. `build` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Khondokar Shahriar Shanto` --references--> `Next.js Framework`  [EXTRACTED]
  app/page.tsx → package.json

## Communities (31 total, 13 thin omitted)

### Community 0 - "TypeScript Configuration"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 1 - "Development Dependencies"
Cohesion: 0.2
Nodes (10): devDependencies, agentation, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 2 - "Project Meta & Dependencies"
Cohesion: 0.25
Nodes (7): dependencies, next, react, react-dom, name, private, version

### Community 3 - "Layout & Navigation"
Cohesion: 0.29
Nodes (3): geistMono, geistSans, metadata

### Community 4 - "Build Scripts"
Cohesion: 0.4
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **52 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Configuration` to `TypeScript Root`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Development Dependencies` to `Project Meta & Dependencies`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `scripts` connect `Build Scripts` to `Project Meta & Dependencies`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._