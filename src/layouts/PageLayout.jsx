import { Box } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import { AnimatePresence, motion } from 'framer-motion';
import PageLayoutHeader from '@/layouts/PageLayoutHeader';
import PageLayoutFooter from '@/layouts/PageLayoutFooter';

// const MotionBox = motion(Box);

// const fadeInVariants = {
//   hidden: { opacity: 0, y: -100 },
//   enter: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 100 },
// };

function PageLayout({ children }) {
  // const router = useRouter();
  return (
    <>
      <PageLayoutHeader />
      <Box
        as="main"
        flex="1"
        display="flex"
        flexDir="column"
        // key={router.pathname}
        // variants={fadeInVariants}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // transition={{ type: 'linear', duration: 0.35 }}
      >
        {children}
      </Box>
      <PageLayoutFooter />
    </>
  );
}
export default PageLayout;
