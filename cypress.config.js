const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalSessionSupport: true,
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      
    },
    defaultCommandTimeout: 30000,
    baseUrl: 'https://www.saucedemo.com/',
    experimentalRunAllSpecs: true
  },
})