const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl:"https://demo.productionready.io",
    
    watchForFileChanges:true
  },
  video:true,
  videosFolder:"myVideo",
  videoCompression: 20

});


