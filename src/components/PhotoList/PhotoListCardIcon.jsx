import { Box, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
function PhotoListCardIcon({ icon, ...props }) {
  return (
    <MotionBox
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      <Icon
        as={icon}
        cursor="pointer"
        boxSize="5"
        {...props}
        h="full"
        w="full"
      />
    </MotionBox>
  );
}
export default PhotoListCardIcon;
