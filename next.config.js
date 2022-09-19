const path = require("path");

module.exports = {
  BASE_URL: process.env.BASE_URL,
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

  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
};
