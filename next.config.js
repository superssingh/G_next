const path = require("path");

module.exports = {
  BASE_URL: process.env.BASE_URL,
  images: {
    domains: ["media.graphcms.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  swcMinify: true,
};
