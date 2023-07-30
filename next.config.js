/** @type {import('next').NextConfig} */


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gondalier.s3.eu-west-3.amazonaws.com',
        port: '',
        pathname: '/wedding/**',
      },
    ],
  },
}
module.exports = nextConfig