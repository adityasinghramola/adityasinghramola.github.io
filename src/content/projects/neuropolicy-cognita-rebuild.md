---
title: What does it take to move a writing site off Squarespace onto a stack I control?
summary: Less than expected. NeuroPolicy Cognita now runs as a static Astro site on GitHub Pages, with a Cloudflare domain, a git-backed editor and a free contact form. What's left is content and search setup, not infrastructure.
date: 2026-10-25
status: in-progress
topics:
  - Web
  - Writing
tools:
  - Astro
  - GitHub Pages
  - Cloudflare
  - Pages CMS
  - Web3Forms
links:
  - label: Live site
    url: https://neuropolicycognita.org
  - label: Source code
    url: https://github.com/adityasinghramola/neuropolicycognita
---

## The question

NeuroPolicy Cognita started on Squarespace. I wanted it on a setup where the articles are plain files I own, the site deploys on its own, and editing doesn't need code.

## How it's built

- **Site:** Astro 5, built to static pages. Every push to the main branch deploys to GitHub Pages through a GitHub Actions workflow.
- **Domain:** neuropolicycognita.org, registered at Cloudflare, pointed at GitHub Pages with HTTPS enforced.
- **Editing:** Pages CMS gives a writing interface on top of the repo, so each article is a Markdown file under version control.
- **Contact form:** Web3Forms, which needs no server.

## The part that's mine

Every article has a home section (finance, politics, marketing or thinking) and a set of *lenses*, the other sections it connects to. The lenses drive the cross-links between articles and the connection map on the home page, so the site shows how the four areas feed each other rather than keeping them in separate boxes.

## Still to do

- Replace placeholder text and images in the first three articles
- Verify the site in Google Search Console and submit the sitemap
- Add Cloudflare Web Analytics
- Design passes: headline reveal, a live connection map, a reading progress bar
