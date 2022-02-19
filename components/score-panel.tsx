import type { NextComponentType } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';

type Team = {
  score?: number
  name?: string
}

interface IProps {
  team1?: Team;
  team2?: Team;
}

const ScorePanel: NextComponentType<{}, {}, IProps> = ({ team1, team2 }) => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Flex justifyContent="space-around" flexGrow={1}>
          <Text>{team1?.name}</Text>
          <Text>{team1?.score}</Text>
        </Flex>
        <Text>X</Text>
        <Flex justifyContent="space-around" flexGrow={1}>
          <Text>{team2?.score}</Text>
          <Text>{team2?.name}</Text>
        </Flex>
      </Flex>
      <Global
        styles={`
          .user-picture {
            border-radius: 120px;
          }
        `}
      />
    </Box>
  );
};

export default ScorePanel;
