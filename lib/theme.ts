import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from "@chakra-ui/utils"

const styles = {
  global: (props: Dict<any> | StyleFunctionProps) => ({
    body: {
      bg: mode('#F0E7DB', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'card-title': {
        textDecoration: 'underline',
        fontSize: 16,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginBottom: 2,
      },
    },
  },
  Text: {
    variants: {
      'card-subtitle': {
        lineHeight: 4
      }
    }
  },
  Link: {
    baseStyle: (props: Dict<any> | StyleFunctionProps) => ({
      color: mode('#3D7AED', '#FF63C3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'M PLUS Rounded 1c'"
};

const colors = {
  glassTeal: '#88CCCA',
  light: '#F0E7DB',
  dark: '#202023',
  smoothLight: '#FFFFFF40',
  smoothDark: '#20202380'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;