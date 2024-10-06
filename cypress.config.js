const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' }); // Load environment variables from .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Map .env variables to Cypress environment variables
      config.env = {
        ...config.env,
        TRELLO_API_KEY: process.env.API_KEY,
        TRELLO_TOKEN: process.env.API_TOKEN,
      };
      return config;
    },
    specPattern: "cypress/Integration/APItest/demo1.cy.js" // Corrected the path separator
  },
});
