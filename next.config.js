/** @type {import('next').NextConfig} */
const nextConfig = {
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
