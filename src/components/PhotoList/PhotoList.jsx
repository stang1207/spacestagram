import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import PhotoListCard from '@/components/PhotoList/PhotoListCard';

function PhotoList({ photos, setPhotos }) {
  return (
    <Box as="section" py={{ base: '8', md: '10', lg: '12' }} id="photoList">
      <Container maxW="container.lg">
        <Heading
          textAlign="center"
          fontSize="clamp(1rem, 0.8558rem + 0.6410vw, 1.625rem)"
        >
          Astronomy Pictures of the Day
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          justifyItems="center"
          alignItems="flex-start"
          gridGap="8"
          mt={{ base: 10, md: 12 }}
          px={{ base: 10, md: 8, lg: 0 }}
          as="section"
        >
          {photos &&
            photos.map((photo) => (
              <PhotoListCard
                key={photo.url}
                photo={photo}
                photos={photos}
                setPhotos={setPhotos}
              />
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
export default PhotoList;
