/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
        svgo: {
          plugins: [{ removeViewBox: false }],
        },
      },
    ],
  ],
  {
    resolve: {
      alias: {
        "~": path.join(__dirname, "src"),
      },
    },
  },
);
