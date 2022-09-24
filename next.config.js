const path = require("path");

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
};

/**
//  * @type {import('next').NextConfig}
 */
// const nextConfig = {
//   /* config options here */
//   basePath: process.env.NEXT_PUBLIC_BASE_URL,
//   images: {
//     domains: [
//       "media.graphcms.com",
//       "media.graphassets.com",
//       "images.unsplash.com",
//     ],
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
//   swcMinify: true,
// };

// module.exports = nextConfig;
