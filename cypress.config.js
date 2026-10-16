const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://lms.xheroapp.com', // Cấu hình địa chỉ web chính
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
