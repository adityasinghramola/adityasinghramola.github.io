import { getCollection } from 'astro:content';

export const sections = {
  code: { name: 'Code & games', color: 'var(--blue)', path: '/code/', blurb: 'Things I program: tools, experiments and games.' },
  art: { name: 'Art', color: 'var(--pink)', path: '/art/', blurb: 'Drawings, pixel work and anything else I make by hand.' },
  finance: { name: 'Finance', color: 'var(--green)', path: '/finance/', blurb: 'Analysis of markets, companies and money, with the numbers shown.' },
} as const;

export type SectionKey = keyof typeof sections;

export async function getProjects(category?: SectionKey) {
  const all = await getCollection(
    'projects',
    ({ data }) => !data.draft && (!category || data.category === category)
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
