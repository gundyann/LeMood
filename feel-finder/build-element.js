
const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/feel-finder/runtime-es2015.js",
    "./dist/feel-finder/polyfills-es2015.js",
    "./dist/feel-finder/scripts.js",
    "./dist/feel-finder/main-es2015.js"
  ];
  await fs.ensureDir("output");
  await concat(files, "output/feel-finder.js");
})();