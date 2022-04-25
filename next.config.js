/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  removeConsole: true,
  swcMinify: true,
  experimental: { esmExternals: true, emotion: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'apod.nasa.gov',
      'i.vimeocdn.com',
      'img.youtube.com',
      'www.youtube.com',
      'www.meteorshowers.org',
      'player.vimeo.com',
      'solarsystem.nasa.gov',
      'sci.esa.int',
    ],
  },
};

module.exports = nextConfig;
