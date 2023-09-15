/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://dev.untact.neofect.net/:path*`,
      },
    ];
  },
  };
  
  module.exports = nextConfig;