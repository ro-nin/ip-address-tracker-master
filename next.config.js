/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://geo.ipify.org/:path*',
      },
    ]
  },
}

module.exports = nextConfig
