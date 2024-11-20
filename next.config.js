/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporting the app as a static site
  output: 'export',

  // Image optimization configuration
  images: {
    unoptimized: true, // Disables built-in image optimization for static exports
    remotePatterns: [
      {
        protocol: 'https', // Allows fetching images over HTTPS
        hostname: 'images.unsplash.com', // Enables fetching from Unsplash
      },
    ],
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during production builds
  },
};

module.exports = nextConfig;
