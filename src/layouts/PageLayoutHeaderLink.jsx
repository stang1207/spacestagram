import { motion } from 'framer-motion';
import { Box, useColorModeValue } from '@chakra-ui/react';
import ChakraLink from '@/components/Base/ChakraLink';

const MotionNavItem = motion(Box);

function PageLayoutHeaderLink({ to, children }) {
  const headerLinkColor = useColorModeValue(
    'darkbrand.background',
    'brand.background'
  );

  return (
    <MotionNavItem
      as="li"
      whileHover={{
        scale: 1.2,
        color: '#31c842',
      }}
      whileTap={{
        scale: 1.05,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <ChakraLink
        to={to}
        fontSize="clamp(0.8rem, 0.7538rem + 0.2051vw, 1rem)"
        color={headerLinkColor}
      >
        {children}
      </ChakraLink>
    </MotionNavItem>
  );
}
export default PageLayoutHeaderLink;
