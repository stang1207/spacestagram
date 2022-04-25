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
import ChakraLink from '@/components/Base/ChakraLink';
import PhotoListCardIcon from '@/components/PhotoList/PhotoListCardIcon';

const MotionFlex = motion(Flex);

function PhotoListCard({ photo, toggleFavorite, ...props }) {
  const [showText, setShowText] = useState(false);
  const trimmedDescription =
    photo.explanation.length >= 100
      ? `${photo.explanation.slice(0, 100)}...`
      : photo.explanation;

  return (
    <MotionFlex
      flexDir="column"
      w="full"
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="0 3px 10px rgba(0,0,0,0.3)"
      rounded="2xl"
      overflow="hidden"
      as="article"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 5px 25px rgba(0,0,0,0.5)',
      }}
      {...props}
    >
      <AspectRatio minW="full" ratio={16 / 10} pos="relative">
        <ChakraImage
          layout="fill"
          objectFit="cover"
          alt={photo.explanation}
          src={photo.thumbnail_url || photo.url}
          placeholder="blur"
          blurDataURL={photo.thumbnail_url || photo.url}
          quality={70}
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
            mr="3"
            color={photo.isPhotoLiked ? 'red.400' : 'red.200'}
            _hover={{ color: photo.isPhotoLiked ? 'red.400' : 'red.200' }}
            onClick={toggleFavorite}
          />
          <ChakraLink
            to={`https://www.facebook.com/sharer/sharer.php?u=${photo.url}`}
            target="_blank"
          >
            <PhotoListCardIcon
              display="flex"
              icon={FaShareAlt}
              color="blue.500"
            />
          </ChakraLink>
          <Text fontSize="sm" color="gray.500" textAlign="end" flex="1">
            {photo.date}
          </Text>
        </Flex>
      </Flex>
    </MotionFlex>
  );
}
export default PhotoListCard;
