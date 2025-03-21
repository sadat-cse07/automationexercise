const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
    baseUrl: "http://automationexercise.com",
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    // retries: 2,
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true, // Change to true to generate an HTML report
      json: true,
    },
    numTestsKeptInMemory: 0,
    experimentalSessionAndOrigin: true,
  },
});
