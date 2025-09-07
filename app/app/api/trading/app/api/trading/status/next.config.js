/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for now
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
