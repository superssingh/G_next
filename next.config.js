const p = import('path')

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
    includePaths: [(__dirname, './src/styles')],
  },
}
