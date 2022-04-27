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

function PhotoListCard({
  photo,
  toggleFavorite,
  isFavoriteListCard,
  ...props
}) {
  const [showText, setShowText] = useState(false);
  const toggleText = () => setShowText(!showText);

  return (
    <MotionFlex
      display="flex"
      flexDir="column"
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="0 3px 10px rgba(0,0,0,0.3)"
      rounded="2xl"
      overflow="hidden"
      as="article"
      h="100%"
      w="100%"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 5px 25px rgba(0,0,0,0.5)',
      }}
      {...props}
    >
      <AspectRatio maxH="18.75rem" ratio={16 / 9} pos="relative">
        <ChakraImage
          layout="fill"
          objectFit="cover"
          alt={photo.title}
          src={photo.thumbnail_url || photo.url}
          placeholder="blur"
          blurDataURL={photo.thumbnail_url || photo.url}
          quality={photo.thumbnail_url || photo.url ? 70 : null}
        />
      </AspectRatio>
      <Flex
        as="section"
        p="4"
        flex="1"
        flexDir="column"
        justifyContent="space-between"
        overflow="hidden"
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
          fontSize="clamp(0.7rem, 0.6538rem + 0.2051vw, 0.8rem)"
          color="gray.400"
          _hover={{ color: useColorModeValue('brand.text', 'darkbrand.text') }}
          cursor="pointer"
          onClick={toggleText}
          noOfLines={showText ? 'unset' : 4}
        >
          {photo.explanation || 'No description available.'}
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
            aria-label="Share on Facebook"
          >
            <PhotoListCardIcon
              display="flex"
              icon={FaShareAlt}
              color="blue.500"
            />
          </ChakraLink>
          <Text color="gray.500" textAlign="end" flex="1">
            {photo.date}
          </Text>
        </Flex>
      </Flex>
    </MotionFlex>
  );
}
export default PhotoListCard;
