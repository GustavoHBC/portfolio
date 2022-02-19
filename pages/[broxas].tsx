import type { NextPage } from 'next';
import { Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layout';
import StatsCard from 'components/stats-card';
import ScorePanel from 'components/score-panel';

const test = [
  {
    name: 'Gut',
    seniority: 'Pleno',
    description: 'In code we trust',
    image: 'https://github.com/GustavoHBC.png',
    game: {
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
]

const JsFight: NextPage = () => {
  return (
    <Layout>
      <Heading as="h2" variant="page-title" textAlign="center">
        Inimigos do Javascript
      </Heading>
      <SimpleGrid columns={2} spacingX="20px" spacingY="20px" py={4}>
        {test.map(({game, ...data}, index) => (
          <StatsCard key={`jsfight-${index}`} {...data}>
            <ScorePanel {...game} />
          </StatsCard>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default JsFight;
