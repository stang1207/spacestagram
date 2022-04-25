import { useState } from 'react';
import {
  AspectRatio,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ChakraImage from '@/components/Base/ChakraImage';
import PhotoListCardIcon from '@/components/PhotoList/PhotoListCardIcon';

const MotionFlex = motion(Flex);

function PhotoListCard({ photo, photos, setPhotos }) {
  const [showText, setShowText] = useState(false);
  const trimmedDescription =
    photo.explanation.length >= 100
      ? `${photo.explanation.slice(0, 100)}...`
      : photo.explanation;

  // const [localPhotos, setLocalPhotos] = useLocalStorage('photos', []);

  // const toggleIsPhotoLiked = (photoURL) => {
  //   const targetPhoto = photos.find(
  //     (p) => p.url === photoURL || p.thumbnail_url === photoURL
  //   );
  //   targetPhoto.isPhotoLiked = !targetPhoto.isPhotoLiked;
  //   return setPhotos(photos);
  // };

  // const onFavoriteClick = async (photoData) => {
  //   await toggleIsPhotoLiked(photoData.url);
  //   setLocalPhotos();
  // };

  return (
    <MotionFlex
      flexDir="column"
      w="full"
      bg={useColorModeValue('whiteAlpha.500', 'gray.700')}
      boxShadow="0 3px 10px rgba(0,0,0,0.3)"
      rounded="2xl"
      overflow="hidden"
      as="article"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 5px 25px rgba(0,0,0,0.5)',
      }}
    >
      <AspectRatio minW="full" ratio={16 / 9} pos="relative">
        <ChakraImage
          layout="fill"
          objectFit="cover"
          alt={photo.explanation}
          src={photo.thumbnail_url || photo.url}
          placeholder="blur"
          blurDataURL={photo.thumbnail_url || photo.url}
          quality={50}
        />
      </AspectRatio>
      <Flex
        flex="1"
        flexDir="column"
        p="4"
        as="section"
        justifyContent="center"
        h="full"
      >
        <Heading
          as="h3"
          fontSize="clamp(0.7rem, 0.6769rem + 0.1026vw, 0.8rem)"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {photo.title}
        </Heading>
        <Text
          py="2"
          fontSize="clamp(0.7rem, 0.6538rem + 0.2051vw, 0.9rem)"
          color="gray.400"
          _hover={{ color: useColorModeValue('brand.text', 'darkbrand.text') }}
          cursor="pointer"
          onClick={() => setShowText(!showText)}
        >
          {showText ? photo.explanation : trimmedDescription}
        </Text>

        <Flex alignItems="center" mt="4">
          <PhotoListCardIcon
            display="flex"
            icon={FaHeart}
            mr="2"
            color={photo.isPhotoLiked ? 'pink.400' : 'pink.200'}
            _hover={{ color: photo.isPhotoLiked ? 'pink.400' : 'pink.200' }}
            // onClick={() => onFavoriteClick(photo)}
          />
          <PhotoListCardIcon
            display="flex"
            icon={FaShareAlt}
            color="blue.500"
          />
          <Text fontSize="sm" color="gray.500" textAlign="end" flex="1">
            {photo.date}
          </Text>
        </Flex>
      </Flex>
    </MotionFlex>
  );
}
export default PhotoListCard;
