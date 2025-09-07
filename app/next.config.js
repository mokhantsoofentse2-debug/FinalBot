/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // REMOVE distDir and assetPrefix - they cause issues with static export
}

module.exports = nextConfig
