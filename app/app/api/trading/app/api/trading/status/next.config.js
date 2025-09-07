/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Try this instead of 'standalone'
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
