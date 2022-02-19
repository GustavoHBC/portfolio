import type { NextComponentType } from 'next';
import Image from 'next/image';
import { Heading, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';


interface IProps {
  name?: string;
  seniority?: string;
  description?: string;
  image?: string;
}

const StatsCard: NextComponentType<{}, {}, IProps> = ({ children, name, seniority, description, image }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      borderColor={useColorModeValue('smoothDark', 'smoothLight')}
      bgColor="#2e2e30"
      py={4}
      px={3}
    >
      <Flex mb={3}>
        {image && (
          <Image src={image} width={80} height={80} className="user-picture" alt="User picture" />
        )}
        <Box ml={image ? 4 : 0}>
          <Heading as="h3" variant="card-title">
            {name}
          </Heading>
          <Text as="p" fontSize={14} variant="card-text">Senioridade: {seniority}</Text>
          <Text as="p" fontSize={10} variant="card-text">{description}</Text>
        </Box>
      </Flex>
      {children}
    </Box>
  );
};

export default StatsCard;