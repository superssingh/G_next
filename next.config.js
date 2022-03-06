const path = require("path");

module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  schema: "https://localhost:8000",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
