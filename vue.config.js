module.exports = {
  // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 默认值'dist'
  outputDir: "CodeHappier",
  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  // 默认值''
  // assetsDir: "production" ? "./assetsDir" : "assetsDir",
  productionSourceMap: false,
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // 默认值'index.html'
  indexPath: "index.html",
  devServer: {
    port: 5020,
    open: true,
  },
  configureWebpack: (config) => {
    // 生产环境下使用gzip
    if (process.env.NODE_ENV === "production") {
      const CompressionWebpackPlugin = require("compression-webpack-plugin");
      // 增加浏览器CPU（需要解压缩）， 减少网络传输量和带宽消耗 （需要衡量，一般小文件不需要压缩的）
      // 图片和PDF文件不应该被压缩，因为他们已经是压缩的了，试着压缩他们会浪费CPU资源而且可能潜在增加文件大小。
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]", // asset -> filename
          algorithm: "gzip",
          test: /\.(js|css)$/,
          threshold: 10240, // 达到10kb的静态文件进行压缩 按字节计算
          minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理
          deleteOriginalAssets: false, // 是否删除压缩的源文件
        })
      );
    }
  },
};
