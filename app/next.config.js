/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add these for safety
  distDir: 'out',
  assetPrefix: '.'
}

module.exports = nextConfig
