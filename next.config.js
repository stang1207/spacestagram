/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  removeConsole: true,
  swcMinify: true,
  images: {
    domains: [
      'apod.nasa.gov',
      'i.vimeocdn.com',
      'img.youtube.com',
      'www.youtube.com',
      'www.meteorshowers.org',
      'player.vimeo.com',
    ],
  },
};

module.exports = nextConfig;
