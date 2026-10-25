import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: () =>
    z.object({
      title: z.string(),
      // One or two sentences shown in lists and at the top of the page.
      summary: z.string(),
      // code = coding and games, art = art, finance = finance analysis
      category: z.enum(['code', 'art', 'finance']),
      date: z.coerce.date(),
      status: z.enum(['in-progress', 'done']).default('in-progress'),
      tags: z.array(z.string()).default([]),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      // Path under /public, e.g. /images/my-art.png (Pages CMS fills this in).
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
