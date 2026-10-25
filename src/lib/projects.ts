import { getCollection } from 'astro:content';

export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => {
    const da = (a.data.updated ?? a.data.date).valueOf();
    const db = (b.data.updated ?? b.data.date).valueOf();
    return db - da;
  });
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
