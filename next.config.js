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

  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  font: {
    // Disable loading fonts from Google Fonts
    loadGoogleFonts: false,
  },
}
