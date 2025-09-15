const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // ? env nastavený na použití @cypress/grep, aby filtroval testy (nespouštěl ostatní )
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // ? Nastavení @cypress/grep aby měl přístup k testům
      require("@cypress/grep/src/plugin")(config);
      return config;
      // implement node event listeners here
    },
  },
});
