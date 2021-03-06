import Head from 'next/head';
import { Box, Container, Heading } from '@chakra-ui/react';
import FavoriteList from '@/components/FavoriteList/FavoriteList';

function Favorites() {
  return (
    <>
      <Head>
        <title>Spacestagram - My Favorite Photos</title>
        <meta
          name="description"
          content="You can find all the photos that you have liked previously here. You can add or remove photos from your favorites. You can also remove all your favorites."
        />
      </Head>
      <Box
        as="section"
        flex="1"
        backgroundImage={`url("/images/outer-space.webp")`}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        <Container maxW="container.xl" py={{ base: 6, md: 8 }}>
          <Heading
            textAlign="center"
            fontSize="clamp(1.1rem, 0.7769rem + 1.4359vw, 2.5rem)"
          >
            My Favorite List of Photos
          </Heading>
          <FavoriteList />
        </Container>
      </Box>
    </>
  );
}
export default Favorites;
