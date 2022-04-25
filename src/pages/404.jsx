import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/react';

function CustomError() {
  return (
    <>
      <Head>
        <title>Spacestagram - 404 Error</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist or an error occurred. Please navigate back to the home page."
        />
      </Head>
      <Flex
        as="section"
        flex="1"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        transform="translateY(-3rem)"
        gap="6"
        px="16"
      >
        <Heading as="h1" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
          Page Not Found
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} textAlign="center">
          {`The page you're looking for doesn't exist or an error occurred. Please navigate back to the home page.`}
        </Text>
      </Flex>
    </>
  );
}
export default CustomError;
