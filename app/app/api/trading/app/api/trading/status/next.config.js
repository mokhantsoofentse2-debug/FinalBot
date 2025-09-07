/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← This is the key fix!
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
