const path = require("path");

module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  schema: "https://localhost:8000",
};
