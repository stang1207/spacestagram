import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

function PageLayoutFooter() {
  const footerBgColor = useColorModeValue('#F7F7F7', '#131720');
  const footerTextColor = useColorModeValue('brand.text', 'darkbrand.text');

  return (
    <Flex
      as="footer"
      py="4"
      bg={footerBgColor}
      transition="background-color color"
      transitionDuration=".35s"
      display="flex"
      justifyContent="center"
    >
      <Text
        fontSize="clamp(0.65rem, 0.6154rem + 0.1538vw, 0.8rem)"
        color={footerTextColor}
        as="small"
      >
        Spacestagram © 2022.
      </Text>
    </Flex>
  );
}
export default PageLayoutFooter;
