import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

function ChakraLink({ to, children, ...props }) {
  return (
    <NextLink href={to} passHref>
      <Link
        _focus={{ boxShadow: 'none' }}
        _hover={{ textDecor: 'none' }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}
export default ChakraLink;
