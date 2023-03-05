const path = require("path")

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.graphcms.com',
      'media.graphassets.com',
      'images.unsplash.com',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
};

