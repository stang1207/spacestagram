import {
  Box,
  Container,
  Flex,
  IconButton,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { GiMoon, GiSunSpear } from 'react-icons/gi';
import ChakraLink from '@/components/Base/ChakraLink';
import PageLayoutHeaderLink from './PageLayoutHeaderLink';

function PageLayoutHeader() {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <GiMoon size="1.15em" color="white" />,
    <GiSunSpear size="1.15em" color="black" />
  );
  const headerBgColor = useColorModeValue(
    'brand.background',
    'darkbrand.background'
  );

  return (
    <Box
      w="full"
      as="header"
      position="sticky"
      top="0"
      backgroundColor={headerBgColor}
      transition="background-color"
      transitionDuration=".35s"
      zIndex="1"
      boxShadow="md"
    >
      <Container
        maxW="container.lg"
        as="nav"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap="3"
        justifyContent="space-between"
        alignItems="center"
        py={{ base: 4, md: 6 }}
      >
        <ChakraLink to="/" flex="1">
          <Heading fontSize="clamp(1.25rem, 1.1923rem + 0.2564vw, 1.5rem)">
            Spacestagram
          </Heading>
        </ChakraLink>
        <Flex
          gap={{ base: 8, md: 12 }}
          as="ul"
          listStyleType="none"
          alignItems="center"
        >
          <PageLayoutHeaderLink to="/">Home</PageLayoutHeaderLink>
          <PageLayoutHeaderLink to="/favorites">
            My Favorite List
          </PageLayoutHeaderLink>
          <Box as="li">
            <IconButton
              display="inline-flex"
              size="sm"
              aria-label="Switch to light or dark mode"
              icon={colorModeIcon}
              colorScheme="whatsapp"
              onClick={() => toggleColorMode()}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
export default PageLayoutHeader;
