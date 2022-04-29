import BaseLink from '@/components/Base/BaseLink';

function BannerLink({ to, children, ...props }) {
  return (
    <BaseLink
      to={to}
      display="inline-block"
      borderRadius="md"
      p={{ base: '.4rem 1.25rem', md: '.5rem 1.5rem', xl: '.75rem 2rem' }}
      bg="brand.background"
      color="black"
      _hover={{
        bg: 'cta.dark',
        color: 'darkbrand.text',
      }}
      transition="all 0.3s"
      fontFamily="Varela Round"
      fontSize="clamp(0.8rem, 0.7538rem + 0.2051vw, 1rem)"
      {...props}
    >
      {children}
    </BaseLink>
  );
}
export default BannerLink;
