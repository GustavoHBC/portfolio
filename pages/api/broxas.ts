import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb';

const test = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { db } = await connectToDatabase();

  res.status(200).json([
    {
      name: `Gut + ${db.databaseName}`,
      seniority: 'Pleno',
      description: 'In code we trust',
      image: 'https://github.com/GustavoHBC.png',
      game: {
        id: 1,
        team1: {
          score: 2,
          name: 'Dev'
        },
        team2: {
          score: 0,
          name: 'JS'
        },
      }
    },
    {
      name: 'Léo',
      seniority: 'Júnior/Pleno',
      description: 'Focado',
      image: 'https://github.com/leoc9.png',
      game: {
        id: 2,
        team1: {
          score: 1,
          name: 'Dev'
        },
        team2: {
          score: 0,
          name: 'JS'
        },
      }
    },
    {
      name: 'Thommesani',
      seniority: 'Júnior',
      description: 'Tá sabendo demais',
      image: 'https://github.com/matheusthm.png',
      game: {
        id: 3,
        team1: {
          score: 1,
          name: 'Dev'
        },
        team2: {
          score: 0,
          name: 'JS'
        },
      }
    },
    {
      name: 'Gaeta',
      seniority: 'Júnior',
      description: 'Burro',
      image: 'https://github.com/jpgaeta.png',
      game: {
        id: 4,
        team1: {
          score: 1,
          name: 'Dev'
        },
        team2: {
          score: 0,
          name: 'JS'
        },
      }
    },
    {
      name: 'Xim',
      seniority: 'Júnior',
      description: 'Pintão',
      image: 'https://github.com/thiago-a580.png',
      game: {
        id: 5,
        team1: {
          score: 1,
          name: 'Dev'
        },
        team2: {
          score: 0,
          name: 'JS'
        },
      }
    }
  ]);
};

export default test;