import type { NextComponentType } from 'next';
import Head from 'next/head';
import getConfig from 'next/config'
import { useRouter } from "next/router";
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

const Layout: NextComponentType = ({ children }) => {
  const { publicRuntimeConfig } = getConfig()
  const { locale } = useRouter();
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={publicRuntimeConfig.sites[locale||'portfolio'].description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{publicRuntimeConfig.sites[locale||'portfolio'].title}</title>
      </Head>
      <Container bg={useColorModeValue('light', 'dark')} py={10} maxW="container.md">{children}</Container>
    </Box>
  );
};

export default Layout;
