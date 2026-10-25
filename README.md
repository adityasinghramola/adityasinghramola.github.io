# adityasinghramola.github.io

Portfolio of small projects and analyses. Astro 5 static site, deployed to GitHub Pages on every push to `main`.

## Adding a project

**In Pages CMS (no code):** open app.pagescms.org, pick this repo, go to Projects, click Add. Write the title as the question the project answers, and the summary as the answer (or where it stands). Save, and the site redeploys in about a minute.

**By hand:** copy `src/content/projects/_template.md`, rename it, fill it in, set `draft: false`.

Fields:

| Field | What it's for |
| --- | --- |
| title | The question, e.g. "Do Nifty IT stocks lead the index after rate cuts?" |
| summary | One or two sentences of answer. Shown on the home page and at the top of the project |
| date / updated | Started, and last meaningful update. The list is sorted by the later of the two |
| status | `in-progress` or `done` |
| topics | Used for the filter buttons on the home page |
| tools | Excel, Python, etc. |
| links | Spreadsheets, notebooks, data sources, related essays |
| cover | Optional image, uploaded to `public/images` |
| draft | Hides the project when true |

## Local development

```
npm install
npm run dev
```

## Files

- `src/content/projects/` project write-ups
- `src/pages/about.astro` the About page text
- `src/styles/global.css` colours and type
- `.pages.yml` Pages CMS setup
