import { Flex } from '@chakra-ui/react';
import PhotoListCard from '@/components/PhotoList/PhotoListCard';
import {
  addLocalStorageItem,
  removeLocalStorageItem,
} from '@/utils/localStorageHelper';
import useFetchPhotos from '@/hooks/useFetchPhotos';

function FavoriteList() {
  const { data: photos, setData: setPhotos } = useFetchPhotos();
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
          removeLocalStorageItem('favorites', photo);
          return { ...p, isPhotoLiked: false };
        }
        return p;
      });
      setPhotos(newPhotos);
    }
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      py={{ base: 8, md: 12 }}
      gap="12"
      as="section"
    >
      {photos &&
        photos.map((photo) => (
          <PhotoListCard
            key={photo.id}
            photo={photo}
            toggleFavorite={() => toggleFavorite(photo)}
            width="clamp(18.75rem, 32.5vw, 500px)"
          />
        ))}
    </Flex>
  );
}
export default FavoriteList;
