import { Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import PhotoListCard from '@/components/PhotoList/PhotoListCard';
import useLocalStorage from '@/hooks/useLocalStorage';

const MotionFlex = motion(Flex);

function FavoriteList() {
  const [favoritePhotos, setFavoritePhotos] = useLocalStorage('favorites', []);
  const removeFavoritePhoto = (photo) => {
    const newPhotos = favoritePhotos.filter((p) => p.id !== photo.id);
    setFavoritePhotos(newPhotos);
  };
  return (
    <Flex
      flexDir="column"
      py={{ base: 8, md: 12 }}
      gap="12"
      as="section"
      alignItems="center"
    >
      <AnimatePresence>
        {favoritePhotos.map((photo, index) => (
          <MotionFlex
            key={photo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.4 }}
            alignSelf={{
              base: 'center',
              lg: index % 2 === 0 ? 'flex-end' : 'flex-start',
            }}
          >
            <PhotoListCard
              isFavoriteListCard
              photo={photo}
              width="clamp(20rem, 30vw, 40rem)"
              toggleFavorite={() => removeFavoritePhoto(photo)}
              layoutId={photo.id}
            />
          </MotionFlex>
        ))}
      </AnimatePresence>
    </Flex>
  );
}
export default FavoriteList;
