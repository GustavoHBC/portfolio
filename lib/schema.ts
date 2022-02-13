export const schema = [
  {
    id: 1,
    title: '',
    tier: [0, 1, 2, 3],
    type: ['language', 'knowledge', 'book', 'socialmedia'],
    description: '',
  },
  {
    id: 2,
    title: 'HTML',
    tier: 3,
    description: 'Hyper Text Markup Language',
    relatedWith: [3, 4],
  },
  {
    id: 3,
    title: 'CSS',
    tier: 3,
    description: 'Cascade Style Sheet',
    relatedWith: [3],
  },
  {
    id: 4,
    title: 'JS',
    tier: 3,
    description: 'JavaScript',
    relatedWith: [3],
  },
];

export const mediaSchema = [
  {
    id: 2,
    courses: {
      premium: [],
      free: [],
    },
    books: {
      premium: [],
      free: [],
    },
    content: [
      {
        platform: 'youtube',
        link: 'https://youtube.com/',
        popularity: [0, 1],
      },
      {
        platform: 'instagram',
        link: 'https://instagram.com/',
        popularity: [0, 1],
      },
      {
        platform: 'linkedin',
        link: 'https://linkedin.com/',
        popularity: [0, 1],
      },
    ],
  },
];

