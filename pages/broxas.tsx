import type { NextPage } from 'next';
import { Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layout';
import StatsCard from 'components/stats-card';
import ScorePanel from 'components/score-panel';

interface IMatches {
  name?: string
  seniority?: string
  description?: string
  image?: string
  match?: {
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

export async function getServerSideProps() {
  let matches: IMatches[] = [];
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

    matches = await response.json();;
  };
  await fetchData();
  return {
    props: {matches}, // will be passed to the page component as props
  }
}

const JsFight: NextPage<IMatches> = (props) => {
  return (
    <Layout>
      <Heading as="h2" variant="page-title" textAlign="center">
        Inimigos do Javascript
      </Heading>
      <SimpleGrid columns={2} minChildWidth='320px' spacingX="20px" spacingY="20px" py={4}>
        {Array.isArray(props) && props.map(({match, ...data}, index) => (
          <StatsCard key={`jsfight-${index}`} {...data}>
            <ScorePanel {...match} />
          </StatsCard>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default JsFight;
