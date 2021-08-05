module.exports = {
  configureWebpack: {
    devServer: {
      port: 8081
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.winoutt.admin',
        productName: 'Winoutt Admin'
      }
    }
  }
}
