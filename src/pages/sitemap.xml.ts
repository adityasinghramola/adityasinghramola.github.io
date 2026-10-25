import type { APIRoute } from 'astro';
import { getProjects } from '../lib/projects';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects();
  const urls = [
    { loc: '/', lastmod: undefined as Date | undefined },
    { loc: '/about/', lastmod: undefined as Date | undefined },
    ...projects.map((p) => ({ loc: `/projects/${p.id}/`, lastmod: p.data.updated ?? p.data.date })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${new URL(u.loc, site)}</loc>${u.lastmod ? `<lastmod>${u.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`
  )
  .join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
