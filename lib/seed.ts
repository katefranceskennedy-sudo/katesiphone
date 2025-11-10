// Seed data for channels and blocks (used by API stubs and pages)
export interface Channel {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  blockCount: number;
}

export interface BlockItem {
  id: string;
  title: string;
  thumbUrl: string;
  type: string;
  description?: string;
  source?: string;
}

export const channels: Channel[] = [
  {
    id: 'ch-1',
    slug: 'experimental-objects',
    title: 'Experimental Objects',
    description: 'A small collection of experiments and GIFs',
    thumbnailUrl: '/two.gif',
    blockCount: 5,
  },
  {
    id: 'ch-2',
    slug: 'publications',
    title: 'Publications',
    description: 'Selected published work and scans',
    thumbnailUrl: '/leadlightmag.gif',
    blockCount: 4,
  },
];

export const blocksByChannel: Record<string, BlockItem[]> = {
  'experimental-objects': [
    { id: 'b1', title: 'Two', thumbUrl: '/two.gif', type: 'gif' },
    { id: 'b2', title: 'Robot Un', thumbUrl: '/robotun.gif', type: 'gif' },
    { id: 'b3', title: 'Leadlight', thumbUrl: '/leadlightmag.gif', type: 'gif' },
    { id: 'b4', title: 'Fannys', thumbUrl: '/fannys.gif', type: 'gif' },
    { id: 'b5', title: 'Books', thumbUrl: '/books.gif', type: 'gif' },
  ],
  publications: [
    { id: 'p1', title: 'Leadlight Issue', thumbUrl: '/leadlightmag.gif', type: 'gif' },
    { id: 'p2', title: 'Books', thumbUrl: '/books.gif', type: 'gif' },
    { id: 'p3', title: 'Fannys', thumbUrl: '/fannys.gif', type: 'gif' },
    { id: 'p4', title: 'Robotun', thumbUrl: '/robotun.gif', type: 'gif' },
  ],
};
