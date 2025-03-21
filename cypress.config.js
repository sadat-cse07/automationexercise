const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: "E-Commerce Test Report",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
  },
});
