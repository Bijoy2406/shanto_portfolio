# Graph Report - portfolio  (2026-05-18)

## Corpus Check
- 68 files · ~203,735 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 516 nodes · 651 edges · 34 communities (27 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `46d88f39`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Development Dependencies|Development Dependencies]]
- [[_COMMUNITY_Project Meta & Dependencies|Project Meta & Dependencies]]
- [[_COMMUNITY_Layout & Navigation|Layout & Navigation]]
- [[_COMMUNITY_Build Scripts|Build Scripts]]
- [[_COMMUNITY_TypeScript Root|TypeScript Root]]
- [[_COMMUNITY_About Page|About Page]]
- [[_COMMUNITY_Achievements|Achievements]]
- [[_COMMUNITY_Affiliations|Affiliations]]
- [[_COMMUNITY_Contact|Contact]]
- [[_COMMUNITY_Home Page|Home Page]]
- [[_COMMUNITY_Research|Research]]
- [[_COMMUNITY_Courses|Courses]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Personal Branding|Personal Branding]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Projects|Projects]]
- [[_COMMUNITY_Publications|Publications]]
- [[_COMMUNITY_Volunteering|Volunteering]]
- [[_COMMUNITY_Workshops|Workshops]]
- [[_COMMUNITY_Writings|Writings]]
- [[_COMMUNITY_Engineering Simulation|Engineering Simulation]]
- [[_COMMUNITY_Product Design|Product Design]]
- [[_COMMUNITY_About Page (Semantic)|About Page (Semantic)]]
- [[_COMMUNITY_Contact Page (Semantic)|Contact Page (Semantic)]]
- [[_COMMUNITY_Projects Page (Semantic)|Projects Page (Semantic)]]
- [[_COMMUNITY_Research Page (Semantic)|Research Page (Semantic)]]
- [[_COMMUNITY_Publications Page (Semantic)|Publications Page (Semantic)]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]

## God Nodes (most connected - your core abstractions)
1. `loadPortfolio()` - 28 edges
2. `compilerOptions` - 16 edges
3. `dependencies` - 13 edges
4. `devDependencies` - 10 edges
5. `PortfolioData` - 9 edges
6. `makeId()` - 8 edges
7. `Field()` - 8 edges
8. `Section()` - 8 edges
9. `TextInput()` - 7 edges
10. `375` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ResearchContent()` --calls--> `useScrollRevealGroup()`  [EXTRACTED]
  app/research/ResearchContent.tsx → hooks/useScrollReveal.ts
- `Home()` --calls--> `loadPortfolio()`  [EXTRACTED]
  app/page.tsx → app/admin-panel/actions.ts
- `Research()` --calls--> `loadPortfolio()`  [EXTRACTED]
  app/research/page.tsx → app/admin-panel/actions.ts
- `Writings()` --calls--> `loadPortfolio()`  [EXTRACTED]
  app/writings/page.tsx → app/admin-panel/actions.ts
- `AdminPage()` --calls--> `loadPortfolio()`  [EXTRACTED]
  app/admin-panel/page.tsx → app/admin-panel/actions.ts

## Communities (34 total, 7 thin omitted)

### Community 0 - "TypeScript Configuration"
Cohesion: 0.1
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Development Dependencies"
Cohesion: 0.06
Nodes (31): dependencies, boneyard-js, next, react, react-dom, @tiptap/extension-font-family, @tiptap/extension-link, @tiptap/extension-text-align (+23 more)

### Community 2 - "Project Meta & Dependencies"
Cohesion: 0.06
Nodes (38): Props, TabKey, TABS, AchievementItem, ActionResult, CardItem, CertificationItem, EducationItem (+30 more)

### Community 3 - "Layout & Navigation"
Cohesion: 0.22
Nodes (3): geistMono, geistSans, metadata

### Community 4 - "Build Scripts"
Cohesion: 0.07
Nodes (22): bones, height, name, viewportWidth, width, bones, height, name (+14 more)

### Community 5 - "TypeScript Root"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 6 - "About Page"
Cohesion: 0.09
Nodes (30): About(), ordered(), Achievements(), ordered(), authorize(), deleteBlobAction(), loadPortfolio(), savePortfolio() (+22 more)

### Community 7 - "Achievements"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 8 - "Affiliations"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 9 - "Contact"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 10 - "Home Page"
Cohesion: 0.25
Nodes (7): ProjectItem, SocialLinks, HeroSideImages(), Home(), ordered(), ProjectGrid(), Props

### Community 11 - "Research"
Cohesion: 0.15
Nodes (11): Research, ResearchStats, NumberCounterProps, ScrollRevealOptions, useScrollRevealGroup(), ordered(), Research(), STAT_LABELS (+3 more)

### Community 12 - "Courses"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 15 - "Personal Branding"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 17 - "Projects"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 18 - "Publications"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 19 - "Volunteering"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 20 - "Workshops"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 21 - "Writings"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 23 - "Engineering Simulation"
Cohesion: 0.1
Nodes (20): bones, height, name, viewportWidth, width, bones, height, name (+12 more)

### Community 24 - "Product Design"
Cohesion: 0.4
Nodes (4): code:bash (npm run dev), Deploy on Vercel, Getting Started, Learn More

### Community 25 - "About Page (Semantic)"
Cohesion: 0.5
Nodes (3): Design Thinking, Frontend Aesthetics Guidelines, frontend-design

### Community 26 - "Contact Page (Semantic)"
Cohesion: 0.5
Nodes (3): permissions, additionalDirectories, allow

### Community 32 - "Community 32"
Cohesion: 0.5
Nodes (3): orgId, projectId, projectName

## Knowledge Gaps
- **306 isolated node(s):** `eslintConfig`, `name`, `version`, `private`, `dev` (+301 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `eslintConfig`, `name`, `version` to the rest of the system?**
  _306 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Development Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Project Meta & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Build Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `TypeScript Root` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `About Page` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._