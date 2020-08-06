module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  pwa: {
    name: 'Управління транспорту',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#FFFFFF',

    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      background_color: '#FFFFFF'

    }
  }
}
