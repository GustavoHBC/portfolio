import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layout';
import StatsCard from 'components/stats-card';
import ScorePanel from 'components/score-panel';

type TGames = {
  name: string
  seniority: string
  description: string
  image: string
  game: {
    id: number
    team1: {
      score: number
      name: string
    }
    team2: {
      score: number
      name: string
    }
  }
}

const JsFight: NextPage = () => {
  const [games, setGames] = useState<Array<TGames>>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/broxas', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const gamesJson = await response.json();
      setGames(gamesJson);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <Heading as="h2" variant="page-title" textAlign="center">
        Inimigos do Javascript
      </Heading>
      <SimpleGrid columns={2} minChildWidth='320px' spacingX="20px" spacingY="20px" py={4}>
        {games.map(({game, ...data}, index) => (
          <StatsCard key={`jsfight-${index}`} {...data}>
            <ScorePanel {...game} />
          </StatsCard>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default JsFight;
