/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  removeConsole: {
    exclude: ['error'],
  },
};

module.exports = nextConfig;
