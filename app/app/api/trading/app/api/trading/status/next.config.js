/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This forces static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
