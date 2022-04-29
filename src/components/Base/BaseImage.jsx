import NextImage from 'next/image';
import { chakra } from '@chakra-ui/react';

const ChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'layout',
      'priority',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
    ].includes(prop),
});

export default ChakraImage;
