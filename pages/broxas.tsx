import {useState, useEffect} from 'react';
import type { NextPage } from 'next';
import { Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from 'components/layout';
import StatsCard from 'components/stats-card';
import ScorePanel from 'components/score-panel';

interface IMatches {
  name?: string
  seniority?: string
  description?: string
  image?: string
  game?: {
    id?: number
    team1: {
      score?: number
      name?: string
    }
    team2: {
      score?: number
      name?: string
    }
  }
}

export const getStaticProps = async () => {
  const response = await fetch('/api/broxas');
  const matches = await response.json();
  console.log(matches)
  return {
    props: { matches }
  }
}

const JsFight: NextPage<any> = ({matches: asd}) => {
  const [matches, setMatches] = useState<Array<IMatches>>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/broxas');
      const matches = await response.json();

      setMatches(matches);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <Heading as="h2" variant="page-title" textAlign="center">
        Inimigos do Javascript
      </Heading>
      <SimpleGrid columns={2} minChildWidth='game' spacingX="20px" spacingY="20px" py={4}>
        {Array.isArray(asd) && asd.map(({game, ...data}, index) => (
          <StatsCard key={`jsfight-${index}`} {...data}>
            <ScorePanel {...game} />
          </StatsCard>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default JsFight;
