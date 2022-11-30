const path = require("path")

module.exports = {
  // basePath: process.env.BASE_URL,

  images: {
    domains: [
      "media.graphcms.com",
      "media.graphassets.com",
      "images.unsplash.com",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  swcMinify: true,

  experimental: {
    // appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
}

