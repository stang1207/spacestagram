import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import PhotoListCard from '@/components/PhotoList/PhotoListCard';
import {
  addLocalStorageItem,
  removeLocalStorageItem,
} from '@/utils/localStorageHelper';

function PhotoList({ photos, setPhotos }) {
  const toggleFavorite = (photo) => {
    if (!photo.isPhotoLiked) {
      const newPhotos = photos.map((p) => {
        if (p.id === photo.id) {
          const likedPhoto = { ...p, isPhotoLiked: true };
          addLocalStorageItem('favorites', likedPhoto);
          return { ...p, isPhotoLiked: true };
        }
        return p;
      });
      setPhotos(newPhotos);
    } else {
      const newPhotos = photos.map((p) => {
        if (p.id === photo.id) {
          const removedPhoto = { ...p, isPhotoLiked: false };
          removeLocalStorageItem('favorites', removedPhoto);
          return { ...p, isPhotoLiked: false };
        }
        return p;
      });
      setPhotos(newPhotos);
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
          columns={{ base: 1, md: 2, xl: 3 }}
          justifyItems="center"
          alignItems="flex-start"
          gridGap="10"
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
