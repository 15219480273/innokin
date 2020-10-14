let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .react("./src/index.js", "./static/js/design-tool.js")
  .js("./src/general-scripts.js", "./static/js/")
  .js("./src/pixie/app.js", "./static/js/pixie-instance.js")
  .postCss("./src/tailwind.css", "./static/css/", [
    tailwindcss("./src/tailwind.config.js"),
  ]);

mix.options({
  processCssUrls: false,
});
