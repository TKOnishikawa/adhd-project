import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { themes, themeIds } from '../data/themes';

export const GET: APIRoute = async () => {
  const research = await getCollection('research', ({ data }) => !data.draft);
  const meetings = await getCollection('meetings', ({ data }) => !data.draft);
  const references = await getCollection('references', ({ data }) => !data.draft);
  const notes = await getCollection('notes', ({ data }) => !data.draft);

  const manifest = {
    name: 'ADHD Coaching Project',
    description: 'ADHDコーチング事業 リサーチ & プロジェクトハブ',
    url: 'https://tkonishikawa.github.io/adhd-project/',
    version: '1.0.0',
    lastUpdated: new Date().toISOString().slice(0, 10),
    themes: themeIds.map((id) => ({
      id,
      label: themes[id].label,
      description: themes[id].description,
      researchCount: research.filter((r) => r.data.themeId === id).length,
    })),
    collections: {
      research: research.map((r) => ({
        slug: r.id.replace(/\.md$/, ''),
        title: r.data.title,
        themeId: r.data.themeId,
        maturity: r.data.maturity,
        date: r.data.date.toISOString().slice(0, 10),
        tags: r.data.tags,
      })),
      meetings: meetings.map((m) => ({
        slug: m.id.replace(/\.md$/, ''),
        title: m.data.title,
        date: m.data.date.toISOString().slice(0, 10),
      })),
      references: references.map((r) => ({
        slug: r.id.replace(/\.md$/, ''),
        title: r.data.title,
        sourceType: r.data.sourceType,
        date: r.data.date.toISOString().slice(0, 10),
      })),
      notes: notes.map((n) => ({
        slug: n.id.replace(/\.md$/, ''),
        title: n.data.title,
        noteType: n.data.noteType,
        date: n.data.date.toISOString().slice(0, 10),
      })),
    },
    stats: {
      totalThemes: themeIds.length,
      totalResearch: research.length,
      totalMeetings: meetings.length,
      totalReferences: references.length,
      totalNotes: notes.length,
    },
    templates: ['.templates/research.md', '.templates/meeting.md', '.templates/reference.md', '.templates/note.md'],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
