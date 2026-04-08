/** @type {import('next').NextConfig} */
const isStaticPreview = process.env.FIREBASE_STATIC_PREVIEW === 'true';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...(isStaticPreview
    ? {
        output: 'export',
        trailingSlash: true,
      }
    : {}),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
    ],
    unoptimized: isStaticPreview,
  },
  async rewrites() {
    if (isStaticPreview) {
      return [];
    }

    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}

module.exports = nextConfig
