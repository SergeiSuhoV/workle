const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  // Публикация в GP
  publicPath: process.env.NODE_ENV === "production" ? "/workle/" : "/",
});
