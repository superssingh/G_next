const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
  cssModules: true,
});

module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
