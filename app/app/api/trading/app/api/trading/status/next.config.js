/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Change from 'standalone' to 'export'
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
