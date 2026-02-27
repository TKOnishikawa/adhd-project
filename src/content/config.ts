import { defineCollection, z } from 'astro:content';

// Theme IDs — shared across all collections
const themeId = z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

// === Research articles (Themes A–H) ===
const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    themeId: themeId,
    tags: z.array(z.string()).default([]),

    // Maturity
    maturity: z.enum(['seed', 'memo', 'draft', 'published']).default('seed'),

    // AI / search metadata
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    relatedSlugs: z.array(z.string()).optional(),

    // Research-specific
    keyResearchers: z.array(z.string()).optional(),
    keyPapers: z.array(z.object({
      authors: z.string(),
      year: z.number(),
      title: z.string(),
      journal: z.string().optional(),
    })).optional(),
    coachingImplications: z.string().optional(),

    // Lifecycle
    updated: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

// === Meeting notes ===
const meetings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    participants: z.array(z.string()).default([]),
    duration: z.string().optional(),
    nextActions: z.array(z.string()).optional(),
    relatedThemes: z.array(themeId).optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// === External references ===
const references = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    url: z.string().url(),
    sourceType: z.enum(['paper', 'book', 'website', 'video', 'tool']),
    tags: z.array(z.string()).default([]),
    relatedThemes: z.array(themeId).optional(),
    authors: z.string().optional(),
    year: z.number().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// === SNS Strategy ===
const snsStrategy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'strategy',
      'platform',
      'content-plan',
      'benchmark',
      'report',
    ]).default('strategy'),
    platforms: z.array(z.enum([
      'x', 'note', 'instagram', 'youtube', 'tiktok', 'discord', 'line'
    ])).default([]),
    relatedThemes: z.array(themeId).optional(),
    maturity: z.enum(['seed', 'memo', 'draft', 'published']).default('seed'),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// === Project notes ===
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    noteType: z.enum(['idea', 'insight', 'decision', 'todo']).default('idea'),
    relatedThemes: z.array(themeId).optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { research, meetings, references, notes, 'sns-strategy': snsStrategy };
