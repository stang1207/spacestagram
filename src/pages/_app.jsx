import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import PageLayout from '@/layouts/PageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
}

export default MyApp;
