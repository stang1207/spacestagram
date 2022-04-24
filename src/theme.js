import '@fontsource/varela-round';
import '@fontsource/varela';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customeTheme = extendTheme({
  colors: {
    brand: {
      text: '#333',
      background: '#FDFDFD',
    },
    darkbrand: {
      text: '#f6f6f8',
      background: '#1A202C',
    },
    cta: {
      main: '#33CA36',
      dark: '#0CA93d',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Varela, -apple-system, BlinkMacSystemFont',
    heading: 'Varela Round, sans-serif',
  },
  fontSizes: {
    sm: '0.75rem',
    md: '0.8125rem',
    lg: '0.9375rem',
    xl: '1rem',
  },
  breakpoints: {
    sm: '25em',
    md: '35em',
    lg: '48em',
    xl: '64em',
  },
  styles: {
    global: (props) => ({
      '#__next': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      'html, body': {
        color: mode('brand.text', 'darkbrand.text')(props),
        backgroundColor: mode(
          'brand.background',
          'darkbrand.background'
        )(props),
        transitionProperty: 'background-color color',
        transitionDuration: '.35s',
      },
      'h1,h2,h3,h4,h5,h6': {
        color: mode('cta.dark', 'cta.main')(props),
      },
    }),
  },
});

export default customeTheme;
