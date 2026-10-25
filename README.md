# adityasinghramola.github.io

Aditya Ramola's portfolio: code and games, art, and finance analysis. 8-bit theme, built for speed: static HTML, no JavaScript, one self-hosted pixel font. Astro 5 static site, deployed to GitHub Pages on every push to `main`.

## Adding a project

**In Pages CMS (no code):** open app.pagescms.org, pick this repo, go to Projects, click Add. Pick the section (Code & games, Art or Finance). Save, and the site redeploys in about a minute.

**By hand:** copy `src/content/projects/_template.md`, rename it, fill it in, set `draft: false`.

Fields:

| Field | What it's for |
| --- | --- |
| title | Project name |
| category | `code`, `art` or `finance` |
| summary | One or two sentences, shown in lists and at the top of the page |
| date | Newest first |
| status | `in-progress` or `done` |
| tags | Python, Excel, pixel art, etc. |
| links | Spreadsheets, notebooks, data sources, related essays |
| cover | Image, uploaded to `public/images`. Give every Art entry one and the Art page becomes a gallery |
| draft | Hides the project when true |

## Local development

```
npm install
npm run dev
```

## Files

- `src/content/projects/` project write-ups
- `src/pages/about.astro` the About page text
- `src/lib/projects.ts` section names and descriptions
- `src/styles/global.css` colours and type
- `src/components/Orb.astro` the pixel orb
- `.pages.yml` Pages CMS setup
