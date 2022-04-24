import { Box } from '@chakra-ui/react';
import PageLayoutHeader from '@/layouts/PageLayoutHeader';
import PageLayoutFooter from '@/layouts/PageLayoutFooter';

function PageLayout({ children }) {
  return (
    <>
      <PageLayoutHeader />
      <Box as="main" flex="1">
        {children}
      </Box>
      <PageLayoutFooter />
    </>
  );
}
export default PageLayout;
