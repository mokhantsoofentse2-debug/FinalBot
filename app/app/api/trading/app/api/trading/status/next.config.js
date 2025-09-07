/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Change from 'standalone' to 'export'
  trailingSlash: true,
  basePath: '',
  images: {
    unoptimized: true
  }
}
