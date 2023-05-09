/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/simple',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
