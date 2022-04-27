import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import PhotoListCard from '@/components/PhotoList/PhotoListCard';
import useLocalStorage from '@/hooks/useLocalStorage';

function PhotoList({ photos, setPhotos }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const toggleFavorite = (photo) => {
    setPhotos(
      photos.map((p) =>
        p.id === photo.id ? { ...photo, isPhotoLiked: !photo.isPhotoLiked } : p
      )
    );
    if (photo.isPhotoLiked) {
      const newFavorites = favorites.filter((p) => p.id !== photo.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, { ...photo, isPhotoLiked: true }]);
    }
  };

  return (
    <Box
      as="section"
      py={{ base: '8', md: '10', lg: '12' }}
      id="photoList"
      backgroundImage="/images/stars.webp"
      backgroundize="cover"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="container.lg">
        <Heading
          textAlign="center"
          fontSize="clamp(1rem, 0.8558rem + 0.6410vw, 1.625rem)"
        >
          Pictures of the Day
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          justifyItems="center"
          alignItems="start"
          gridGap="12"
          mt={{ base: 10, md: 12 }}
          px={{ base: 10, md: 8, lg: 0 }}
          as="section"
        >
          {photos &&
            photos.map((photo) => (
              <PhotoListCard
                key={photo.id}
                photo={photo}
                toggleFavorite={() => toggleFavorite(photo)}
              />
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
export default PhotoList;
