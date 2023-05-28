/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/calculator',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
