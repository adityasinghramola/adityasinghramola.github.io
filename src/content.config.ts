import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: () =>
    z.object({
      // Write the title as the question the project answers.
      title: z.string(),
      // One or two sentences: what you found, or where you've got to.
      summary: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      status: z.enum(['in-progress', 'done']).default('in-progress'),
      topics: z.array(z.string()).default([]),
      tools: z.array(z.string()).default([]),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      // Path under /public, e.g. /images/projects/my-chart.png (Pages CMS fills this in).
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
