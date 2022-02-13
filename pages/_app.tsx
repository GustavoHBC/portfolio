import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../lib/fonts';
import theme from '../lib/theme';
import type { AppProps } from 'next/app';

function Portfolio({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  );
}

export default Portfolio;
