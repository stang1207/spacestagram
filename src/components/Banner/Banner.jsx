import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import BannerLink from '@/components/Banner/BannerLink';

function Banner() {
  const BackgroundGradient = useColorModeValue(
    'linear-gradient(to right bottom, rgba(0,0,0,.15), rgba(0,0,0,.15))',
    'linear-gradient(to right bottom, rgba(0,0,0,0.2), rgba(0,0,0,.2))'
  );
  return (
    <Box
      as="section"
      backgroundImage={`${BackgroundGradient}, url('/images/starship.svg')`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      minH={{ base: '35vh', md: '42.5vw' }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap={{ base: 4, md: 6, lg: 8 }}
    >
      <Heading
        fontSize="clamp(1rem, 0.6538rem + 1.5385vw, 2.5rem)"
        color="cta.main"
        as="h1"
      >
        Start Exploring The Universe Today!
      </Heading>
      <BannerLink to="/myfavorites">My Favorite List</BannerLink>
    </Box>
  );
}
export default Banner;
