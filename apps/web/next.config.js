/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  compiler: {
    // styledComponents: true,
  },
  transpilePackages: ['@packages/ui', '@packages/counter'],
}

module.exports = nextConfig
