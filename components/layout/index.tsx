import type { NextComponentType } from 'next';
import Head from 'next/head';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

const Layout: NextComponentType = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gustavo Bedendo Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <title>GustavoHBC</title>
      </Head>
      <Container bg={useColorModeValue('light', 'dark')} py={10} maxW="container.md">{children}</Container>
    </Box>
  );
};

export default Layout;
