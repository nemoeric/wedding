/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['a0.muscache.com'],
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
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '*',
      },
    ],
  },
}
module.exports = nextConfig