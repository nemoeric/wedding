/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gondalier.s3.eu-west-3.amazonaws.com',
        port: '',
        pathname: '/wedding/**',
      },
      {
        protocol: 'https',
        hostname: 'gondalier.s3.amazonaws.com',
        port: '',
        pathname: '/wedding/**',
      },
    ],
  },
}
module.exports = nextConfig