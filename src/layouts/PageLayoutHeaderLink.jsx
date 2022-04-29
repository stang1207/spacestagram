import { motion } from 'framer-motion';
import { Box, useColorModeValue } from '@chakra-ui/react';
import BaseLink from '@/components/Base/BaseLink';

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
      }}
      whileTap={{
        scale: 1.05,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <BaseLink
        to={to}
        fontSize="clamp(0.85rem, 0.7538rem + 0.2051vw, 1rem)"
        _hover={{
          color: 'cta.main',
        }}
        color={headerLinkColor}
        whiteSpace="nowrap"
      >
        {children}
      </BaseLink>
    </MotionNavItem>
  );
}
export default PageLayoutHeaderLink;
