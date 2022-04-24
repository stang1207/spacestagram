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
    <GiMoon size="1.25em" />,
    <GiSunSpear size="1.25em" />
  );
  const colorModeIconColor = useColorModeValue('white', 'black');
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
      {/* Navbar */}
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
        {/* Logo */}
        <ChakraLink to="/">
          <Heading fontSize="clamp(1.25rem, 1.1923rem + 0.2564vw, 1.5rem)">
            Spacestagram
          </Heading>
        </ChakraLink>

        {/* Navbar Right Menu */}
        <Flex alignItems="center" gap="6">
          {/* Navbar Menu Items */}
          <Flex gap="8" as="ul" listStyleType="none">
            <PageLayoutHeaderLink to="/">Home</PageLayoutHeaderLink>
            <PageLayoutHeaderLink to="/myfavorites">
              My Favorites
            </PageLayoutHeaderLink>
          </Flex>
          {/* Navbar Switch Color Mode Button */}
          <IconButton
            size="sm"
            aria-label="Switch to light or dark mode"
            icon={colorModeIcon}
            colorScheme="whatsapp"
            color={colorModeIconColor}
            onClick={() => toggleColorMode()}
          />
        </Flex>
      </Container>
    </Box>
  );
}
export default PageLayoutHeader;
